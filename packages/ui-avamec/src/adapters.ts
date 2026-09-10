import { parseState } from './activity';
import type { ActivityAdapter, ActivityPayload, ActivityState, AvamecBridge } from './types';
export function createAvamecAdapter(bridge: AvamecBridge): ActivityAdapter {
  return {
    async load(key) { const response = await bridge.obterDadosGenericos(key); const value = response?.data?.[0]?.valor; return value ? parseState(JSON.parse(value)) : null; },
    async save(key, state) { await bridge.registrarDadosGenericos(key, JSON.stringify(state)); },
    async submit(payload) { await bridge.registrarRespostaAtividade(payload); },
    async result(id) { const { data } = await bridge.obterRespostaAtividade(id); return data ? { evaluated: data.situacao === 'AVALIADA' || typeof data.nota === 'number', grade: data.nota } : null; }
  };
}
export function createLocalAdapter(storage: Pick<Storage, 'getItem' | 'setItem'>, namespace: string): ActivityAdapter {
  if (!namespace.trim()) throw new Error('Informe um namespace por curso e estudante.');
  const keyFor = (key: string) => `modfly:${namespace}:${key}`;
  return {
    async load(key) { const value = storage.getItem(keyFor(key)); return value ? parseState(JSON.parse(value)) : null; },
    async save(key, state) { storage.setItem(keyFor(key), JSON.stringify(state)); },
    async submit(payload) { storage.setItem(keyFor(payload.identificador), JSON.stringify(payload)); },
    async result(id) { const value = storage.getItem(keyFor(id)); if (!value) return null; const payload: ActivityPayload = JSON.parse(value); return { evaluated: true, grade: 10 * payload.questoes.filter(q => q.gabaritos[0].valor === '1').length / payload.questoes.length }; }
  };
}
export function createMemoryAdapter(): ActivityAdapter {
  const entries = new Map<string, string>();
  return createLocalAdapter({ getItem: key => entries.get(key) ?? null, setItem: (key, value) => { entries.set(key, value); } }, 'demo');
}
export type { ActivityState };
