export type Answer = string | string[] | Record<string, string>;
export interface Option { id: string; label: string }
export interface QuestionBase { id: string; prompt: string; feedback?: { correct: string; incorrect: string } }
export type QuestionDefinition = QuestionBase & (
  | { type: 'option'; options: Option[]; correctAnswer: string }
  | { type: 'multiple'; options: Option[]; correctAnswer: string[] }
  | { type: 'true-false'; rows: Option[]; correctAnswer: Record<string, 'true' | 'false'> }
  | { type: 'grid' | 'correlation' | 'drag-drop'; rows: Option[]; options: Option[]; correctAnswer: Record<string, string> }
  | { type: 'written'; correctAnswer: string[]; caseSensitive?: boolean }
);
export interface ActivityDefinition { module: number; slide: number; questions: QuestionDefinition[]; maxAttempts?: number }
export interface ActivityPayload { identificador: string; nomeAtividade: string; questoes: { identificador: string; gabaritos: { chave: string; valor: string }[] }[] }
export type ActivityPhase = 'editing' | 'submitting' | 'result' | 'uncertain';
export interface ActivityState { version: 1; answers: Record<string, Answer>; attempts: number; phase: ActivityPhase; results: Record<string, boolean>; passed: boolean }
export interface ActivityResult { evaluated: boolean; grade?: number }
export interface ActivityAdapter {
  load(key: string): Promise<ActivityState | null>;
  save(key: string, state: ActivityState): Promise<void>;
  submit(payload: ActivityPayload): Promise<void>;
  result(activityId: string): Promise<ActivityResult | null>;
}
/** Bridge injectado pela aplicação hospedeira; não existe acesso global implícito. */
export interface AvamecBridge {
  obterDadosGenericos(key: string): Promise<{ data?: { valor: string }[] }>;
  registrarDadosGenericos(key: string, value: string): Promise<unknown>;
  registrarRespostaAtividade(payload: ActivityPayload): Promise<unknown>;
  obterRespostaAtividade(id: string): Promise<{ data?: { situacao?: string; nota?: number } }>;
}
