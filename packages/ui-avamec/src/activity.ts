import type { ActivityDefinition, ActivityPayload, ActivityState, Answer, QuestionDefinition } from './types';
export const activityId = (activity: ActivityDefinition) => `moduloAvaliativo_S${activity.slide}M${activity.module}`;
export const storageKey = (activity: ActivityDefinition) => `modfly_v1_M${activity.module}_S${activity.slide}`;
export const initialState = (): ActivityState => ({ version: 1, answers: {}, attempts: 0, phase: 'editing', results: {}, passed: false });
const record = (answer: Answer | undefined): Record<string, string> => typeof answer === 'object' && !Array.isArray(answer) && answer !== null ? answer : {};
export function isAnswered(question: QuestionDefinition, answer?: Answer): boolean {
  if (question.type === 'written') return typeof answer === 'string' && answer.trim().length > 0;
  if (question.type === 'option') return typeof answer === 'string' && question.options.some(o => o.id === answer);
  if (question.type === 'multiple') return Array.isArray(answer) && answer.length > 0 && answer.every(a => question.options.some(o => o.id === a));
  const values = record(answer);
  return question.rows.every(row => question.type === 'true-false' ? ['true', 'false'].includes(values[row.id]) : question.options.some(o => o.id === values[row.id]));
}
export function evaluate(question: QuestionDefinition, answer?: Answer): boolean {
  if (!isAnswered(question, answer)) return false;
  if (question.type === 'option') return question.correctAnswer === answer;
  if (question.type === 'multiple') return Array.isArray(answer) && new Set(answer).size === question.correctAnswer.length && question.correctAnswer.every(a => answer.includes(a));
  if (question.type === 'written') {
    const normalize = (value: string) => question.caseSensitive ? value.trim() : value.trim().toLocaleLowerCase('pt-BR');
    return typeof answer === 'string' && question.correctAnswer.some(a => normalize(a) === normalize(answer));
  }
  return question.rows.every(row => record(answer)[row.id] === question.correctAnswer[row.id]);
}
export function validateActivity(activity: ActivityDefinition): void {
  if (![activity.module, activity.slide, activity.maxAttempts ?? 3].every(v => Number.isSafeInteger(v) && v > 0)) throw new Error('Módulo, slide e tentativas devem ser inteiros positivos.');
  if (!activity.questions.length) throw new Error('A atividade precisa ter questões.');
  const ids = activity.questions.map(q => q.id);
  if (new Set(ids).size !== ids.length || ids.some(id => !/^[a-zA-Z0-9-]+$/.test(id))) throw new Error('IDs de questões devem ser únicos, com letras, números ou hífen.');
  for (const q of activity.questions) {
    for (const items of ['rows' in q ? q.rows : [], 'options' in q ? q.options : []]) {
      if (new Set(items.map(o => o.id)).size !== items.length || items.some(o => !o.id || !o.label)) throw new Error(`Opções inválidas: ${q.id}`);
    }
    if ('rows' in q && !q.rows.length || 'options' in q && !q.options.length) throw new Error(`Questão sem opções: ${q.id}`);
    if (!isAnswered(q, q.type === 'written' ? q.correctAnswer[0] : q.correctAnswer)) throw new Error(`Gabarito inválido: ${q.id}`);
  }
}
export function preparePayload(activity: ActivityDefinition, answers: Record<string, Answer>): ActivityPayload {
  validateActivity(activity);
  if (!activity.questions.every(q => isAnswered(q, answers[q.id]))) throw new Error('Responda todas as questões antes de enviar.');
  return {
    identificador: activityId(activity), nomeAtividade: `MA_S${activity.slide}M${activity.module}`,
    questoes: activity.questions.map(q => ({ identificador: `S${activity.slide}M${activity.module}_${q.id}`, gabaritos: [{ chave: '1', valor: evaluate(q, answers[q.id]) ? '1' : '0' }, { chave: '2', valor: evaluate(q, answers[q.id]) ? '0' : '1' }] }))
  };
}
export function parseState(value: unknown): ActivityState {
  if (!value || typeof value !== 'object') throw new Error('Estado persistido inválido.');
  const s = value as ActivityState;
  if (s.version !== 1 || !Number.isSafeInteger(s.attempts) || s.attempts < 0 || !['editing', 'submitting', 'result', 'uncertain'].includes(s.phase) || typeof s.passed !== 'boolean' || !s.answers || typeof s.answers !== 'object' || Array.isArray(s.answers) || !s.results || typeof s.results !== 'object' || Object.values(s.results).some(v => typeof v !== 'boolean')) throw new Error('Estado persistido incompatível.');
  for (const a of Object.values(s.answers)) {
    if (typeof a !== 'string' && !(Array.isArray(a) ? a.every(v => typeof v === 'string') : a && typeof a === 'object' && Object.values(a).every(v => typeof v === 'string'))) throw new Error('Resposta persistida inválida.');
  }
  return s;
}
