import type { ActivityDefinition } from './types';
export const demoActivity: ActivityDefinition = {
  module: 1, slide: 1, maxAttempts: 3,
  questions: [
    { id:'1', type:'option', prompt:'Qual estratégia ajuda a aprender?', options:[{id:'praticar',label:'Praticar com feedback'},{id:'ignorar',label:'Ignorar dúvidas'}], correctAnswer:'praticar' },
    { id:'2', type:'multiple', prompt:'Selecione as práticas de estudo ativo.', options:[{id:'explicar',label:'Explicar com suas palavras'},{id:'praticar',label:'Resolver exercícios'},{id:'pular',label:'Pular a revisão'}], correctAnswer:['explicar','praticar'] },
    { id:'3', type:'true-false', prompt:'Avalie as afirmações.', rows:[{id:'feedback',label:'Feedback ajuda a revisar o aprendizado.'},{id:'decorar',label:'Decorar substitui sempre a compreensão.'}], correctAnswer:{feedback:'true',decorar:'false'} },
    { id:'4', type:'grid', prompt:'Classifique cada prática.', rows:[{id:'resumir',label:'Resumir com suas palavras'}], options:[{id:'ativa',label:'Estudo ativo'},{id:'passiva',label:'Estudo passivo'}], correctAnswer:{resumir:'ativa'} },
    { id:'5', type:'correlation', prompt:'Relacione a ação ao objetivo.', rows:[{id:'revisar',label:'Revisar'}], options:[{id:'consolidar',label:'Consolidar o aprendizado'},{id:'esquecer',label:'Esquecer o conteúdo'}], correctAnswer:{revisar:'consolidar'} },
    { id:'6', type:'drag-drop', prompt:'Arraste ou selecione o objetivo de praticar.', rows:[{id:'pratica',label:'Praticar'}], options:[{id:'aplicar',label:'Aplicar o conhecimento'},{id:'adiar',label:'Adiar dúvidas'}], correctAnswer:{pratica:'aplicar'} },
    { id:'7', type:'written', prompt:'Complete: aprender exige tempo e…', correctAnswer:['prática','pratica'] }
  ]
};
