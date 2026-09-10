import React, { useMemo } from 'react';
import { Citation, Accordion, Pagination, UnityBanner } from '@modfly/ui';
import { ActivityQuestions, QuestionsProvider, createMemoryAdapter } from '@modfly/ui-avamec';
import type { ActivityDefinition } from '@modfly/ui-avamec';
const activity: ActivityDefinition = { module: 1, slide: 1, questions: [{ id:'1', type:'option', prompt:'O que ajuda a consolidar o aprendizado?', options:[{id:'a',label:'Praticar e receber feedback'},{id:'b',label:'Ignorar dúvidas'}], correctAnswer:'a' }] };
export const App: React.FC = () => {
  const adapter = useMemo(() => createMemoryAdapter(), []);
  const [page, setPage] = React.useState(1);
  return <main style={{maxWidth:1000,margin:'auto',padding:24}}>
    <UnityBanner type="main" module={1} subtitle="Aprender fazendo" />
    <h1>Uma aula com Modfly UI</h1><p>Este curso demonstra o consumo dos pacotes publicados. A atividade usa memória local à sessão.</p>
    {page === 1 ? <><Citation title="Comece pela curiosidade" text="Aprender combina explicação, prática e reflexão." /><Accordion title="Como estudar este módulo?" bgColor={1}><p>Leia o conteúdo, explique com suas palavras e avance para a atividade.</p></Accordion></> : <QuestionsProvider activity={activity} adapter={adapter}><ActivityQuestions /></QuestionsProvider>}
    <Pagination numberOfPages={2} currentPage={page} onPageChange={setPage} />
  </main>;
};
