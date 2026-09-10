import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { ActivityController, ActivityQuestions, QuestionsProvider, createMemoryAdapter, createAvamecAdapter, preparePayload, evaluate, storageKey } from '../packages/ui-avamec/src';
import type { ActivityAdapter, ActivityDefinition, QuestionDefinition } from '../packages/ui-avamec/src';
const question: QuestionDefinition = { id: '1', type: 'option', prompt: 'Qual ação ajuda a aprender?', options: [{ id: 'a', label: 'Praticar' }, { id: 'b', label: 'Ignorar' }], correctAnswer: 'a' };
const activity: ActivityDefinition = { module: 2, slide: 12, questions: [question], maxAttempts: 2 };
async function setup(adapter = createMemoryAdapter()) { const controller = new ActivityController(activity, adapter); await controller.load(); return controller; }
describe('Contrato AVAMEC', () => {
  it('gera IDs e gabarito binário do contrato documentado', () => {
    expect(preparePayload(activity, { '1': 'a' })).toEqual({ identificador: 'moduloAvaliativo_S12M2', nomeAtividade: 'MA_S12M2', questoes: [{ identificador: 'S12M2_1', gabaritos: [{ chave: '1', valor: '1' }, { chave: '2', valor: '0' }] }] });
    expect(() => preparePayload(activity, {})).toThrow('Responda todas');
  });
  it('avalia seleção múltipla sem aceitar opções extras e respostas escritas sem diferença de caixa', () => {
    const q: QuestionDefinition = { ...question, type: 'multiple', correctAnswer: ['a'] };
    expect(evaluate(q, ['a'])).toBe(true); expect(evaluate(q, ['a','b'])).toBe(false);
    expect(evaluate({ id:'2', type:'written', prompt:'Resposta', correctAnswer:['Reflexão'] }, ' REFLEXÃO ')).toBe(true);
  });
  it.each(['grid','correlation','drag-drop'] as const)('avalia todas as linhas de %s', type => {
    const q: QuestionDefinition = { id:'3', prompt:'Associe', type, rows:[{id:'x',label:'X'},{id:'y',label:'Y'}], options:question.options, correctAnswer:{x:'a',y:'b'} };
    expect(evaluate(q,{x:'a'})).toBe(false); expect(evaluate(q,{x:'a',y:'b'})).toBe(true); expect(evaluate(q,{x:'b',y:'a'})).toBe(false);
  });
  it('restaura seleção, bloqueio e tentativas após recarregar', async () => {
    const adapter = createMemoryAdapter(); const first = await setup(adapter);
    first.answer('1','b'); await first.submit(); expect(first.getSnapshot().state.attempts).toBe(1);
    const second = await setup(adapter); expect(second.getSnapshot().state.answers['1']).toBe('b'); expect(second.getSnapshot().state.phase).toBe('result');
    await second.retryAttempt(); second.answer('1','a'); await second.submit(); await second.retryAttempt();
    expect(second.getSnapshot().state.passed).toBe(true); expect(second.getSnapshot().state.phase).toBe('result');
  });
  it('impede envio duplicado enquanto aguarda a plataforma', async () => {
    const adapter = createMemoryAdapter(); const submit = vi.spyOn(adapter,'submit'); const controller = await setup(adapter);
    controller.answer('1','a'); await Promise.all([controller.submit(), controller.submit()]); expect(submit).toHaveBeenCalledTimes(1);
  });
  it('não reenvia avaliação quando a gravação posterior falha', async () => {
    const adapter = createMemoryAdapter(); const save = adapter.save; let fail = true;
    adapter.save = async (key,state) => { if (state.phase === 'result' && fail) throw new Error('Sem conexão'); await save(key,state); };
    const submit = vi.spyOn(adapter,'submit'); const controller = await setup(adapter); controller.answer('1','a'); await controller.submit();
    expect(controller.getSnapshot().error).toBe('Sem conexão'); fail = false; await controller.retrySave(); expect(submit).toHaveBeenCalledTimes(1); expect(controller.getSnapshot().error).toBeNull();
  });
  it('bloqueia tentativa com resultado de envio desconhecido', async () => {
    const adapter = createMemoryAdapter(); adapter.submit = vi.fn().mockRejectedValue(new Error('Timeout'));
    const controller = await setup(adapter); controller.answer('1','a'); await controller.submit(); await controller.submit();
    expect(controller.getSnapshot().state.phase).toBe('uncertain'); expect(adapter.submit).toHaveBeenCalledTimes(1);
    const restored = await setup(adapter); expect(restored.getSnapshot().state.phase).toBe('uncertain');
  });
  it('mantém atividades isoladas e salva respostas na ordem', async () => {
    const adapter = createMemoryAdapter(); const controller = await setup(adapter);
    controller.answer('1','b'); controller.answer('1','a'); await controller.submit();
    expect((await adapter.load(storageKey(activity)))?.answers['1']).toBe('a');
    expect(await adapter.load(storageKey({...activity, slide:13}))).toBeNull();
  });
  it('não converte erro remoto em sucesso local', async () => {
    const bridge = { obterDadosGenericos: vi.fn().mockRejectedValue(new Error('Indisponível')), registrarDadosGenericos: vi.fn(), registrarRespostaAtividade: vi.fn(), obterRespostaAtividade: vi.fn() };
    await expect(createAvamecAdapter(bridge).load('x')).rejects.toThrow('Indisponível');
  });
  it('não sobrescreve avaliação órfã após falha no carregamento', async () => {
    const adapter: ActivityAdapter = { ...createMemoryAdapter(), result: async () => ({ evaluated: true, grade: 10 }) };
    const save = vi.spyOn(adapter,'save'); const controller = await setup(adapter); await controller.retrySave();
    expect(controller.getSnapshot().error).toContain('sem o estado detalhado'); expect(save).not.toHaveBeenCalled();
  });
  it('a interface exige resposta e exibe feedback após confirmação', async () => {
    render(<QuestionsProvider activity={activity} adapter={createMemoryAdapter()}><ActivityQuestions /></QuestionsProvider>);
    await waitFor(() => expect(screen.getByRole('radio', {name:'Praticar'})).toBeEnabled());
    expect(screen.getByRole('button', {name:'Enviar respostas'})).toBeDisabled();
    fireEvent.click(screen.getByRole('radio', {name:'Praticar'})); fireEvent.click(screen.getByRole('button', {name:'Enviar respostas'}));
    await screen.findByText('Atividade concluída!'); expect(screen.getByRole('radio', {name:'Praticar'})).toBeDisabled();
  });
});
