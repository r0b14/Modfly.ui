import { AvamecDemo } from '@/components/docs/AvamecDemo';
import { DocCodeBlock } from '@/components/docs/DocCodeBlock';
const code = `'use client';
import { useMemo } from 'react';
import { QuestionsProvider, ActivityQuestions, createAvamecAdapter } from '@modfly/ui-avamec';
import type { ActivityDefinition, AvamecBridge } from '@modfly/ui-avamec';
import '@modfly/ui-avamec/styles.css';

const activity: ActivityDefinition = {
  module: 1, slide: 1, maxAttempts: 3,
  questions: [{ id: '1', type: 'option', prompt: 'Como consolidar o aprendizado?',
    options: [{ id: 'a', label: 'Praticando' }, { id: 'b', label: 'Ignorando dúvidas' }],
    correctAnswer: 'a' }]
};

export function Aula({ bridge }: { bridge: AvamecBridge }) {
  const adapter = useMemo(() => createAvamecAdapter(bridge), [bridge]);
  return <QuestionsProvider activity={activity} adapter={adapter}>
    <ActivityQuestions />
  </QuestionsProvider>;
}`;
export default function Page() {
  return <article className="doc-prose px-4 sm:px-8"><div className="doc-cat">Integrações · AVAMEC</div><h1 className="doc-title">Praticar e receber <i>feedback.</i></h1><p className="doc-lead">Sete formatos de questão, estado de atividade compartilhado e adaptadores explícitos de persistência.</p>
    <h2 className="doc-h2">Experimente uma atividade</h2><p className="doc-p">Esta demonstração usa memória: recarregar a página reinicia as respostas. Ela não envia dados ao AVAMEC.</p><AvamecDemo />
    <h2 className="doc-h2">Conectar à plataforma</h2><p className="doc-p">Instale <code>@modfly/ui-avamec</code>. A aplicação fornece uma instância de BridgeRestApi adaptada ao contrato assíncrono <code>AvamecBridge</code>. Se a plataforma usa callbacks, converta-os em Promises que resolvam somente após confirmação.</p><DocCodeBlock filename="Aula.tsx" raw={code}><pre>{code}</pre></DocCodeBlock>
    <h2 className="doc-h2">API pública</h2><div className="table-wrap"><table className="doc-table"><thead><tr><th>API</th><th>Responsabilidade</th></tr></thead><tbody>
      <tr><td>QuestionsProvider</td><td>Recebe activity, adapter e children. Trocar a atividade cria um estado isolado.</td></tr><tr><td>ActivityQuestions</td><td>Renderiza as questões configuradas e o envio.</td></tr><tr><td>QuestionOption / QuestionMultipleAnswer</td><td>Recebem question com options e gabarito único ou múltiplo.</td></tr><tr><td>QuestionTrueOrFalse</td><td>Recebe question com rows e gabaritos true/false por linha.</td></tr><tr><td>QuestionGrid / QuestionCorrelation / QuestionDragDrop</td><td>Recebem question com rows, options e gabarito por linha. DragDrop também funciona por seleção e teclado.</td></tr><tr><td>QuestionWritten</td><td>Recebe question com respostas textuais aceitas e caseSensitive opcional.</td></tr><tr><td>SendActivityButton</td><td>Exibe envio, sincronização, resultado e nova tentativa.</td></tr><tr><td>createAvamecAdapter / createLocalAdapter / createMemoryAdapter</td><td>Integração remota, armazenamento local isolado por namespace ou demonstração em memória.</td></tr><tr><td>preparePayload / evaluate / useActivity</td><td>Contrato de envio, avaliação e acesso ao estado.</td></tr>
    </tbody></table></div>
    <h2 className="doc-h2">Persistência e falhas</h2><p className="doc-p">Respostas detalhadas são gravadas separadamente do gabarito binário. Uma atividade só mostra conclusão após confirmação de envio. Se a gravação posterior falhar, sincronizar novamente não reenvia a avaliação. Um timeout no envio deixa a atividade bloqueada para reconciliação na plataforma, pois o contrato disponível não oferece chave de idempotência.</p><p className="doc-p">Não há importação automática dos estados antigos do curso-template: antes de usar em cursos existentes, migre os dados e homologue IDs, gabaritos e tentativas. Use um curso de teste para a primeira integração.</p>
  </article>;
}
