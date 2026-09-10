'use client';
import React, { createContext, useContext, useEffect, useMemo, useSyncExternalStore, useId } from 'react';
import { ActivityController } from './controller';
import { isAnswered } from './activity';
import type { ActivityAdapter, ActivityDefinition, QuestionDefinition } from './types';

const Context = createContext<ActivityController | null>(null);
export interface QuestionsProviderProps { activity: ActivityDefinition; adapter: ActivityAdapter; children: React.ReactNode }
export function QuestionsProvider({ activity, adapter, children }: QuestionsProviderProps) {
  const signature = JSON.stringify(activity);
  const controller = useMemo(() => new ActivityController(JSON.parse(signature), adapter), [signature, adapter]);
  useEffect(() => { void controller.load(); }, [controller]);
  return <Context.Provider value={controller}>{children}</Context.Provider>;
}
export function useActivity() {
  const controller = useContext(Context);
  if (!controller) throw new Error('Use as questões dentro de QuestionsProvider.');
  const snapshot = useSyncExternalStore(controller.subscribe, controller.getSnapshot, controller.getSnapshot);
  return { ...snapshot, controller };
}
export interface QuestionProps { question: QuestionDefinition }
function Question({ question }: QuestionProps) {
  const { state, busy, loading, error, controller } = useActivity();
  const instance = useId();
  const answer = state.answers[question.id];
  const disabled = loading || busy || !!error || state.phase !== 'editing';
  const set = (value: Parameters<typeof controller.answer>[1]) => controller.answer(question.id, value);
  const selected = (row: string) => answer && typeof answer === 'object' && !Array.isArray(answer) ? answer[row] ?? '' : '';
  const setRow = (row: string, value: string) => set({ ...(answer && typeof answer === 'object' && !Array.isArray(answer) ? answer : {}), [row]: value });
  const result = state.phase === 'result' ? state.results[question.id] : undefined;
  return <fieldset className="modfly-question" disabled={disabled} aria-describedby={result === undefined ? undefined : `${instance}-feedback`}>
    <legend>{question.prompt}</legend>
    {(question.type === 'option' || question.type === 'multiple') && question.options.map(option => <label className="modfly-option" key={option.id}>
      <input type={question.type === 'option' ? 'radio' : 'checkbox'} name={instance} value={option.id}
        checked={question.type === 'option' ? answer === option.id : Array.isArray(answer) && answer.includes(option.id)}
        onChange={event => question.type === 'option' ? set(option.id) : set(event.target.checked ? [...(Array.isArray(answer) ? answer : []), option.id] : (Array.isArray(answer) ? answer : []).filter(id => id !== option.id))} />
      <span>{option.label}</span>
    </label>)}
    {question.type === 'written' && <label className="modfly-written">Sua resposta<textarea value={typeof answer === 'string' ? answer : ''} onChange={e => set(e.target.value)} rows={4} /></label>}
    {question.type === 'drag-drop' && <div aria-label="Itens para associar" className="modfly-bank">{question.options.map(option => <span key={option.id} draggable={!disabled} onDragStart={e => e.dataTransfer.setData('text/plain', option.id)}>{option.label}</span>)}</div>}
    {'rows' in question && question.rows.map(row => {
      const options = question.type === 'true-false' ? [{ id: 'true', label: 'Verdadeiro' }, { id: 'false', label: 'Falso' }] : question.options;
      return <div className="modfly-row" key={row.id} onDragOver={e => { if (!disabled && question.type === 'drag-drop') e.preventDefault(); }} onDrop={e => {
        if (disabled || question.type !== 'drag-drop') return;
        e.preventDefault(); const value = e.dataTransfer.getData('text/plain'); if (options.some(o => o.id === value)) setRow(row.id, value);
      }}>
        <label htmlFor={`${instance}-${row.id}`}>{row.label}</label>
        <select id={`${instance}-${row.id}`} value={selected(row.id)} onChange={e => setRow(row.id, e.target.value)}>
          <option value="">Selecione uma resposta</option>{options.map(o => <option key={o.id} value={o.id}>{o.label}</option>)}
        </select>
      </div>;
    })}
    {result !== undefined && <p id={`${instance}-feedback`} className={result ? 'modfly-correct' : 'modfly-incorrect'} role="status">{result ? question.feedback?.correct ?? 'Resposta correta.' : question.feedback?.incorrect ?? 'Resposta incorreta. Reveja o conteúdo.'}</p>}
  </fieldset>;
}
type TypedProps<T extends QuestionDefinition['type']> = { question: Extract<QuestionDefinition, { type: T }> };
export type QuestionOptionProps = TypedProps<'option'>;
export type QuestionMultipleAnswerProps = TypedProps<'multiple'>;
export type QuestionTrueOrFalseProps = TypedProps<'true-false'>;
export type QuestionWrittenProps = TypedProps<'written'>;
export type QuestionGridProps = { question: QuestionDefinition & { type: 'grid' } };
export type QuestionCorrelationProps = { question: QuestionDefinition & { type: 'correlation' } };
export type QuestionDragDropProps = { question: QuestionDefinition & { type: 'drag-drop' } };
export function QuestionOption(props: QuestionOptionProps) { return <Question {...props} />; }
export function QuestionMultipleAnswer(props: QuestionMultipleAnswerProps) { return <Question {...props} />; }
export function QuestionTrueOrFalse(props: QuestionTrueOrFalseProps) { return <Question {...props} />; }
export function QuestionWritten(props: QuestionWrittenProps) { return <Question {...props} />; }
export function QuestionGrid(props: QuestionGridProps) { return <Question {...props} />; }
export function QuestionCorrelation(props: QuestionCorrelationProps) { return <Question {...props} />; }
export function QuestionDragDrop(props: QuestionDragDropProps) { return <Question {...props} />; }
export interface SendActivityButtonProps { children?: React.ReactNode }
export function SendActivityButton({ children = 'Enviar respostas' }: SendActivityButtonProps) {
  const { state, error, busy, loading, controller } = useActivity();
  const complete = controller.activity.questions.every(q => isAnswered(q, state.answers[q.id]));
  const remaining = Math.max(0, (controller.activity.maxAttempts ?? 3) - state.attempts);
  return <div className="modfly-actions" aria-busy={busy || loading}>
    {loading && <p role="status">Carregando atividade…</p>}
    {error && <div role="alert"><p>{error}</p>{state.phase !== 'uncertain' && <button type="button" disabled={busy} onClick={() => void controller.retrySave()}>Tentar sincronizar novamente</button>}</div>}
    {state.phase === 'uncertain' && <p role="alert">O envio ficou sem confirmação. Consulte a plataforma antes de tentar novamente; nenhuma nova tentativa será enviada automaticamente.</p>}
    {state.phase === 'editing' && <button type="button" disabled={loading || busy || !!error || !complete} onClick={() => void controller.submit()}>{busy ? 'Enviando…' : children}</button>}
    {state.phase === 'result' && <><p role="status">{state.passed ? 'Atividade concluída!' : remaining ? `Você tem ${remaining} tentativa(s) restante(s).` : 'Tentativas esgotadas.'}</p>{!state.passed && remaining > 0 && <button type="button" disabled={busy || !!error} onClick={() => void controller.retryAttempt()}>Tentar novamente</button>}</>}
  </div>;
}
export function ActivityQuestions() {
  const { controller } = useActivity();
  return <>{controller.activity.questions.map(question => <Question key={question.id} question={question} />)}<SendActivityButton /></>;
}
