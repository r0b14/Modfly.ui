import { useEffect, useState, useRef } from 'react';
import { useQuestionsContext } from '../../../contexts/QuestionsContext';

export const SendActivityButton: React.FC<SendActivityButtonProps> = ({
  numberOfQuestions,
  numberOfQuestionsOriginal,
  slideNow,
  moduleNow,
  numberOfErrors = 3,
}) => {
  const {
    questionArray,
    showResult,
    updateShowResult,
    questionAnsweredArray,
    feedbackShow,
    updateFeedbackShow,
    hasSentAnswers,
    updateHasSentAnswers,
    setCurrentActivity,
  } = useQuestionsContext();

  const [wrongAnswerFlag, setWrongAnswerFlag] = useState(false);
  const [noMoreChances, setNoMoreChances] = useState(false);
  const [attemptsRemaining, setAttemptsRemaining] = useState(numberOfErrors);
  const [currentErrorCount, setCurrentErrorCount] = useState(0);
  const updateFlag = useRef(false);
  const errorsCounterRef = useRef(0);

  useEffect(() => {
    if (!updateFlag.current) {
      updateFlag.current = true;

      // Definir a atividade atual automaticamente para carregar/salvar estado correto
      const activityId = `M${moduleNow}_S${slideNow}`;
      setCurrentActivity(activityId);

      // Função auxiliar que atualiza o contador de erros do módulo, para não permitir que o usuário faça o módulo mais de 3 vezes
      syncStatusWithAPI();
    }
  }, [moduleNow, slideNow, setCurrentActivity]);

  // Nova função baseada na arquitetura Client-Server do AVAMEC
  async function syncStatusWithAPI() {
    if (!window.BridgeRestApi) {
      return;
    }

    const API = new window.BridgeRestApi();
    const activityId = `moduloAvaliativo_S${slideNow}M${moduleNow}`;
    const activityStateKey = `activityState_M${moduleNow}_S${slideNow}`; // Key para persistir estado de edição

    try {
      const response = await API.obterRespostaAtividade(activityId);

      // Leitura do Estado Local (EDITING vs VIEWING)
      const cachedState = localStorage.getItem(activityStateKey);
      const isEditingMode = cachedState === 'EDITING';

      if (response && response.data) {
        const { situacao, nota } = response.data;

        // FIX: A API pode retornar situacao undefined mas com nota válida.
        // Se houver nota, tratamos como avaliada.
        // A escala de nota observada é 10 para acerto total. Ajustado de 100 para 10.
        const isAvaliadaOrHasGrade =
          situacao === 'AVALIADA' || (nota !== undefined && nota !== null);

        if (isAvaliadaOrHasGrade) {
          // Verifica aprovação (Nota 10 = 100%)
          const isPassing = nota >= 10;
          setWrongAnswerFlag(!isPassing);

          // Lógica de Renderização Condicional (Resultados vs Edição)
          if (isPassing) {
            // Se passar, sempre mostra resultado (Bloqueado)
            updateShowResult(true);
            updateFeedbackShow(true);
            updateHasSentAnswers(true);
            // Salva estado de sucesso para evitar "isEditing" futuro
            localStorage.setItem(activityStateKey, 'VIEWING_RESULT');
          } else {
            // Se falhou (nota < 10)
            if (isEditingMode) {
              // Se estava editando, NÃO bloqueia a tela, mesmo tendo nota antiga
              updateShowResult(false);
              updateHasSentAnswers(false); // Permite enviar novamente
            } else {
              // Se não estava editando (primeiro load pós-falha), mostra o resultado/feedback
              updateShowResult(true);
              updateFeedbackShow(true);
              updateHasSentAnswers(true);
            }
          }
        }
      }

      // Mantemos a lógica auxiliar de contagem de erros genéricos como fallback/controle de tentativas
      const errorsKey = `errorsFPIA_M${moduleNow - 1}_S${slideNow}`;
      const resultErrors = await API.obterDadosGenericos(errorsKey);
      const auxErrors = resultErrors?.data?.[0]?.valor;

      if (auxErrors != null) {
        errorsCounterRef.current = JSON.parse(auxErrors);
      } else {
        errorsCounterRef.current = 0;
      }

      setCurrentErrorCount(errorsCounterRef.current);
      setAttemptsRemaining(numberOfErrors - errorsCounterRef.current);

      // Definição robusta de sucesso para evitar bloqueios indevidos por histórico de erros
      const currentNota = response?.data?.nota;
      const isSuccess = currentNota !== undefined && currentNota >= 10;

      if (!isSuccess && errorsCounterRef.current > 0 && errorsCounterRef.current < numberOfErrors) {
        // Novamente: só força a exibição do erro se NÃO estivermos no modo de edição
        if (!isEditingMode) {
          setWrongAnswerFlag(true);
          updateShowResult(true);
          updateFeedbackShow(true);
        } else {
          // Podemos setar wrongAnswerFlag = true para garantir que o checkAnswer funcione correto,
          // mas o updateShowResult DEVE ser false (já tratado acima ou mantido)
          setWrongAnswerFlag(true);
        }
      }

      if (errorsCounterRef.current >= numberOfErrors) {
        setNoMoreChances(true);
        updateShowResult(true);
        updateFeedbackShow(true);

        // Se esgotou chances, definimos explicitamente o erro, EXCETO se já houver sucesso confirmado
        if (!isSuccess) {
          setWrongAnswerFlag(true);
        } else {
          setWrongAnswerFlag(false);
        }
      }
    } catch (error) {
      console.error('❌ Erro ao sincronizar botão com API:', error);
    }
  }

  // Antiga updateErrorCounter substituída por syncStatusWithAPI
  /* async function updateErrorCounter() ... */

  function checkAnswer() {
    const activityId = `M${moduleNow}_S${slideNow}`;

    let API = new window.BridgeRestApi();

    let jsonAnswer = {
      identificador: `moduloAvaliativo_S${slideNow}M${moduleNow}`,
      nomeAtividade: `MA_S${slideNow}M${moduleNow}`,
      questoes: [] as any,
    };

    let wrongAnswer = 0;

    /* ----------- CHECA SE TODAS AS QUESTÕES FORAM RESPONDIDAS -----------*/
    // Caso a questão não esteja marcada, vai ativar o aviso, solicitando que o usuário responda
    let hasNoQuestionsAnswered = false;

    let firstAdvice = true;
    const updatedArray: any = [];
    for (let index = 0; index < numberOfQuestions; index++) {
      if (questionAnsweredArray[index] === true) {
        updatedArray.push(true);
      } else {
        updatedArray.push(false);
      }
    }

    updatedArray.forEach((isMarked: any, index: number) => {
      const noAnswerMarkedAdvice = document.querySelector(
        `#noAnswerMarkedAdvice${index}`,
      ) as HTMLElement | null;

      if (!isMarked && noAnswerMarkedAdvice != null) {
        hasNoQuestionsAnswered = true;
        noAnswerMarkedAdvice.style.display = 'block';
        noAnswerMarkedAdvice.style.opacity = '0';
        setTimeout(() => {
          noAnswerMarkedAdvice.style.opacity = '1';
          if (firstAdvice) {
            const y = noAnswerMarkedAdvice.getBoundingClientRect().top + window.scrollY - 20;
            window.scroll({
              top: y,
              behavior: 'smooth',
            });
            firstAdvice = false;
          }
        }, 10);
      } else {
        if (noAnswerMarkedAdvice != null) {
          noAnswerMarkedAdvice.style.display = 'none';
        }
      }
    });
    /* ----------- CHECA SE TODAS AS QUESTÕES FORAM RESPONDIDAS -----------*/

    if (!hasNoQuestionsAnswered && numberOfQuestions) {
      // Caso todas as questões tenham sido respondidas, podemos prosseguir com a correção
      for (let index = 0; index < numberOfQuestions; index++) {
        const questionNumber = `${index + 1}`;

        // Verifica se a questão está correta
        // Suporta dois formatos:
        // 1. QuestionOption: usa apenas o número "1", "2", etc
        // 2. QuestionTrueOrFalse: usa formato "1-1-5" (número-resposta-total)
        const isCorrect = questionArray.some((item) => {
          // Se o item é exatamente o número da questão (QuestionOption)
          if (item === questionNumber) return true;

          // Se o item começa com "número-" (QuestionTrueOrFalse)
          // Ex: "1-1-5", "1-2-5", etc para a questão 1
          if (item.startsWith(`${questionNumber}-`)) return true;

          return false;
        });

        if (isCorrect) {
          // Se a questão está no questionArray, então está correta
          let newQuestion = {
            identificador: `S${slideNow}M${moduleNow}_${index + 1}`,
            gabaritos: [
              {
                chave: '1',
                valor: '1',
              },
              {
                chave: '2',
                valor: '0',
              },
            ],
          };

          jsonAnswer.questoes.push(newQuestion);
        } else {
          // Se a questão não está no questionArray, então está incorreta
          let newQuestion = {
            identificador: `S${slideNow}M${moduleNow}_${index + 1}`,
            gabaritos: [
              {
                chave: '1',
                valor: '0',
              },
              {
                chave: '2',
                valor: '1',
              },
            ],
          };

          jsonAnswer.questoes.push(newQuestion);
          wrongAnswer = 1;
        }
      }

      updateShowResult(true); // Mostrar resultados

      // Atualizar o estado para indicar que as respostas foram enviadas
      updateHasSentAnswers(true);

      // Salva estado como 'VIEWING_RESULT' (pois acabamos de submeter)
      const activityStateKey = `activityState_M${moduleNow}_S${slideNow}`;
      localStorage.setItem(activityStateKey, 'VIEWING_RESULT');

      if (wrongAnswer) {
        setWrongAnswerFlag(true);
        errorsCounterRef.current++;
        setCurrentErrorCount(errorsCounterRef.current);
        const remaining = numberOfErrors - errorsCounterRef.current;
        setAttemptsRemaining(remaining);

        let API = new window.BridgeRestApi();
        API.registrarDadosGenericos(
          `errorsFPIA_M${moduleNow - 1}_S${slideNow}`,
          JSON.stringify(errorsCounterRef.current),
        );

        // Verificar se atingiu o número máximo de tentativas
        if (errorsCounterRef.current >= numberOfErrors) {
          updateFeedbackShow(true); // Exibir feedback quando tentativas esgotadas
          setNoMoreChances(true);
        }
      } else {
        setWrongAnswerFlag(false);
        errorsCounterRef.current = numberOfErrors;
        let API = new window.BridgeRestApi();
        API.registrarDadosGenericos(
          `errorsFPIA_M${moduleNow - 1}_S${slideNow}`,
          JSON.stringify(errorsCounterRef.current),
        );

        updateFeedbackShow(true); // Exibir feedback quando todas as questões estão corretas
      }

      // Faz o envio das repostas do questionário para o AVAMEC pela API
      // updateErrorCounter(); // REMOVIDO: Causa race condition ao buscar dados antigos da API antes de salvar os novos

      try {
        const result = API.registrarRespostaAtividade(jsonAnswer);

        if (result && result.then) {
          result
            .then((res: any) => {
              // Promise resolvida com sucesso
            })
            .catch((err: any) => {
              console.error('❌❌❌ Promise REJEITADA com erro! ❌❌❌');
              console.error('Erro completo:', err);
            });
        }
      } catch (error) {
        console.error('❌ Erro SÍNCRONO ao chamar API.registrarRespostaAtividade:', error);
      }
    }
  }

  return (
    <div className="w-full flex flex-col justify-center items-center mt-14 gap-4">
      <div className="w-full max-w-[268px] mx-auto">
        {/* Botão: VERIFICAR (amarelo, clicável) - antes de enviar as respostas */}
        {/* Adicionado !showResult para garantir exclusão mútua com TENTAR NOVAMENTE */}
        {!hasSentAnswers && !showResult && currentErrorCount < numberOfErrors && (
          <h5
            className={`text-[22px] font-medium text-[#fff] text-center w-full max-w-[268px] bg-[#4A90E2] cursor-pointer px-6 py-4 rounded-[25px]`}
            style={{ fontFamily: 'Roboto' }}
            onClick={() => {
              checkAnswer();
            }}
          >
            VERIFICAR {currentErrorCount + 1} DE {numberOfErrors}
          </h5>
        )}

        {/* Botão: TENTAR NOVAMENTE (amarelo, clicável) - errou mas ainda tem tentativas */}
        {showResult && wrongAnswerFlag && currentErrorCount < numberOfErrors && (
          <h5
            className={`text-[22px] font-medium text-[#1A3A67] text-center w-full max-w-[268px] bg-[#FFF394] cursor-pointer px-5 py-2.5 rounded-[25px]`}
            style={{ fontFamily: 'Roboto' }}
            onClick={() => {
              // Volta ao estado de edição para permitir corrigir as respostas
              updateShowResult(false);
              updateFeedbackShow(false);
              updateHasSentAnswers(false);
              // Salva estado de edição no LocalStorage para persistir em caso de refresh/navegação
              const activityStateKey = `activityState_M${moduleNow}_S${slideNow}`;
              localStorage.setItem(activityStateKey, 'EDITING');
            }}
          >
            TENTAR NOVAMENTE
          </h5>
        )}

        {/* Botão: RESPOSTA CORRETA (verde, bloqueado) - acertou todas as questões */}
        {showResult && !wrongAnswerFlag && (
          <h5
            className="text-[22px] font-medium text-[#1A3A67] text-center w-full bg-[#90D96E] cursor-not-allowed pointer-events-none px-4 py-2.5 rounded-[25px]"
            style={{ fontFamily: 'Roboto' }}
          >
            RESPOSTA CORRETA
          </h5>
        )}

        {/* Botão oculto quando tentativas esgotadas - mantém lógica mas esconde visualmente */}
        {(noMoreChances ||
          (showResult && wrongAnswerFlag && currentErrorCount >= numberOfErrors)) && (
          <div className="w-full h-[41px]" style={{ visibility: 'hidden' }}>
            {/* Espaço reservado invisível para manter layout */}
          </div>
        )}
      </div>
    </div>
  );
};

interface SendActivityButtonProps {
  slideNow: number;
  moduleNow: number;
  numberOfQuestions: number;
  numberOfQuestionsOriginal?: number;
  numberOfErrors?: number;
}

export default SendActivityButton;
