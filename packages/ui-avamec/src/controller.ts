import { activityId, evaluate, initialState, isAnswered, parseState, preparePayload, storageKey, validateActivity } from './activity';
import type { ActivityAdapter, ActivityDefinition, ActivityState, Answer } from './types';
export interface ActivitySnapshot { state: ActivityState; loading: boolean; busy: boolean; error: string | null }
/** Uma instância por atividade; gravações em série preservam a ordem das respostas. */
export class ActivityController {
  private snapshot: ActivitySnapshot = { state: initialState(), loading: true, busy: false, error: null };
  private listeners = new Set<() => void>();
  private queue: Promise<void> = Promise.resolve();
  private initialized = false;
  private loadGeneration = 0;
  private committed: ActivityState | null = null;
  constructor(readonly activity: ActivityDefinition, readonly adapter: ActivityAdapter) { validateActivity(activity); }
  subscribe = (listener: () => void) => { this.listeners.add(listener); return () => { this.listeners.delete(listener); }; };
  getSnapshot = () => this.snapshot;
  private update(patch: Partial<ActivitySnapshot>) { this.snapshot = { ...this.snapshot, ...patch }; this.listeners.forEach(l => l()); }
  private error(error: unknown) { this.update({ error: error instanceof Error ? error.message : 'Não foi possível salvar a atividade.' }); }
  async load() {
    const generation = ++this.loadGeneration;
    this.initialized = false;
    this.update({ loading: true, error: null });
    try {
      const saved = await this.adapter.load(storageKey(this.activity));
      const state = saved ? parseState(saved) : initialState();
      if (state.phase === 'submitting') state.phase = 'uncertain';
      const remote = await this.adapter.result(activityId(this.activity));
      // Uma nota antiga não comprova o recebimento de uma tentativa em trânsito.
      if (remote?.evaluated && !saved) throw new Error('Existe uma avaliação sem o estado detalhado. Reconcilie a atividade antes de continuar.');
      if (generation !== this.loadGeneration) return;
      this.initialized = true;
      this.update({ state, loading: false });
    } catch (e) { if (generation !== this.loadGeneration) return; this.error(e); this.update({ loading: false }); }
  }
  answer(id: string, value: Answer) {
    const { state, loading, busy, error } = this.snapshot;
    if (loading || busy || error || state.phase !== 'editing') return;
    if (!this.activity.questions.some(q => q.id === id)) throw new Error('Questão desconhecida.');
    const next = { ...state, answers: { ...state.answers, [id]: value } };
    this.update({ state: next });
    this.queue = this.queue.then(() => this.adapter.save(storageKey(this.activity), next)).catch(e => { this.error(e); });
  }
  async submit() {
    if (this.snapshot.busy || this.snapshot.loading || this.snapshot.state.phase !== 'editing' || this.snapshot.error) return;
    if (!this.activity.questions.every(q => isAnswered(q, this.snapshot.state.answers[q.id]))) { this.update({ error: 'Responda todas as questões antes de enviar.' }); return; }
    this.update({ busy: true });
    let submitted = false;
    try {
      await this.queue;
      if (this.snapshot.error) return;
      const state = this.snapshot.state;
      if (state.attempts >= (this.activity.maxAttempts ?? 3)) throw new Error('Tentativas esgotadas.');
      const payload = preparePayload(this.activity, state.answers);
      await this.adapter.save(storageKey(this.activity), { ...state, phase: 'submitting' });
      this.update({ state: { ...state, phase: 'submitting' } });
      submitted = true;
      await this.adapter.submit(payload);
      const results = Object.fromEntries(this.activity.questions.map(q => [q.id, evaluate(q, state.answers[q.id])]));
      this.committed = { ...state, attempts: state.attempts + 1, phase: 'result', results, passed: Object.values(results).every(Boolean) };
      this.update({ state: this.committed });
      await this.adapter.save(storageKey(this.activity), this.committed);
      this.committed = null;
    } catch (e) {
      if (submitted && !this.committed) this.update({ state: { ...this.snapshot.state, phase: 'uncertain' } });
      this.error(e);
    } finally { this.update({ busy: false }); }
  }
  async retrySave() {
    if (!this.initialized) { await this.load(); return; }
    if (this.snapshot.busy) return;
    this.update({ busy: true });
    try {
      await this.queue;
      if (this.snapshot.state.phase === 'uncertain') throw new Error('Envio sem confirmação. Consulte a plataforma antes de reenviar.');
      await this.adapter.save(storageKey(this.activity), this.committed ?? this.snapshot.state);
      this.committed = null;
      this.update({ error: null });
    } catch (e) { this.error(e); } finally { this.update({ busy: false }); }
  }
  async retryAttempt() {
    const { state, busy, error } = this.snapshot;
    if (busy || error || state.phase !== 'result' || state.passed || state.attempts >= (this.activity.maxAttempts ?? 3)) return;
    this.update({ busy: true });
    const next = { ...state, phase: 'editing' as const, results: {} };
    try { await this.adapter.save(storageKey(this.activity), next); this.update({ state: next }); }
    catch (e) { this.error(e); } finally { this.update({ busy: false }); }
  }
}
