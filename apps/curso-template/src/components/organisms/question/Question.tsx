import { useEffect, useRef, useState } from 'react';
import { useQuestionsContext } from '../../../contexts/QuestionsContext';
import './Styles.css';

interface QuestionProps {
  number: number;
  indicator: number;
  correctAnswer: number;
  numberQuestion?: Array<any>;
  text?: Array<any>;
  answersContent: Array<string>;
  feedbackContent?: Array<string>;
  children?: React.ReactNode;
  slideNow: number;
  moduleNow: number;
}

const Question: React.FC<QuestionProps> = ({
  number,
  indicator,
  numberQuestion,
  text,
  children,
  correctAnswer,
  answersContent = [],
  feedbackContent = [],
  moduleNow,
  slideNow,
}) => {
  const {
    questionArray,
    updateArray,
    questionAnsweredArray,
    updateQuestionAnsweredArray,
    showResult,
    updateShowResult,
    feedbackShow, // Mantendo feedbackShow do contexto
  } = useQuestionsContext();

  const useEffectFlag = useRef(0);
  const feedbackRef = useRef<HTMLDivElement>(null);

  const [userAnswer, setUserAnswer] = useState<number>();

  async function initPersistence() {
    try {
      // 1. Carrega estado visual do LocalStorage (Visual Memory)
      LocalStorageLoad(number);

      // 2. Consulta a API para validar o estado real (True Memory)
      if (window.BridgeRestApi) {
        const api = new window.BridgeRestApi();
        const activityId = `moduloAvaliativo_S${slideNow}M${moduleNow}`;

        const response = await api.obterRespostaAtividade(activityId);

        if (response && response.data) {
          const { situacao, questoesUsuario } = response.data;

          // Se a atividade já foi finalizada, bloqueia e mostra resultado
          if (situacao === 'AVALIADA') {
            updateShowResult(true);

            // Validar questoes
            const myQuestionId = `S${slideNow}M${moduleNow}_${number}`;
            const apiQuestion = questoesUsuario.find(
              (q: any) => q.questao.identificador === myQuestionId,
            );

            if (apiQuestion && apiQuestion.respostas) {
              const isCorrect = apiQuestion.respostas.some(
                (r: any) => r.chave === '1' && r.valor === '1',
              );

              if (isCorrect) {
                updateArray((prev) => {
                  const aux = [...prev];
                  const found = aux.find((tag) => tag === `${number}`);
                  if (found === undefined) {
                    aux.push(`${number}`);
                  }
                  return aux;
                });
              }
            }
          }
        }
      }
    } catch (error) {
      console.error('❌ Erro na persistência (Question):', error);
    } finally {
      console.groupEnd();
    }
  }

  // Adicionar listener para links no feedback
  useEffect(() => {
    const handleFeedbackClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('target') === '_blank') {
        e.stopPropagation();
        e.preventDefault();
        const href = target.getAttribute('href');
        if (href) {
          window.open(href, '_blank', 'noopener,noreferrer');
        }
      }
    };

    const feedbackElements = document.querySelectorAll('.feedback_question');
    feedbackElements.forEach((el) => {
      el.addEventListener('click', handleFeedbackClick);
    });

    return () => {
      feedbackElements.forEach((el) => {
        el.removeEventListener('click', handleFeedbackClick);
      });
    };
  }, [showResult, feedbackShow]);

  function handleInputChecked(answerMarked: number, isRestoring = false) {
    if (!isRestoring) {
      updateShowResult(false);
    }

    LocalStorageSave(`answer${number - 1}${answerMarked}`);

    setUserAnswer(answerMarked);

    const thisInput = document.querySelector(
      `#answer${number - 1}${answerMarked}`,
    ) as HTMLInputElement;

    const answerDivs = document.querySelectorAll(
      `.answer-oneAnswer${number}`,
    ) as NodeListOf<HTMLElement>;

    if (thisInput != null) {
      thisInput.checked = true;
    }

    answerDivs.forEach((element: HTMLElement) => {
      element.classList.remove(
        'iddleAnswer-Question',
        'correctAnswer-Question',
        'incorrectAnswer-Question',
      );

      const input = element.querySelector('input[type="radio"]') as HTMLInputElement;

      if (input) {
        input.classList.remove('correctAnswer-Question', 'incorrectAnswer-Question');
        if (input.checked) {
          element.style.background = '#FCEAD4';
        } else {
          element.style.background = '#fff';
        }
      }
    });

    if (answerMarked === correctAnswer) {
      updateArray((prev: string[]) => {
        const auxArray = [...prev];
        const found = auxArray.find((tag) => tag === `${number}`);
        if (found === undefined) {
          auxArray.push(`${number}`);
        }
        return auxArray;
      });
    } else {
      updateArray((prev: string[]) => prev.filter((tag) => tag !== `${number}`));
    }

    updateQuestionAnsweredArray((prev: boolean[]) => {
      const auxQuestionAnsweredArray = [...prev];
      auxQuestionAnsweredArray[number - 1] = true;
      return auxQuestionAnsweredArray;
    });
  }

  useEffect(() => {
    // const auxNumber = number; // Removido pois usamos via initPersistence agora
    if (useEffectFlag.current === 0) {
      initPersistence();
    }
    useEffectFlag.current = 1;

    const answers = document.querySelectorAll(
      `.answer-oneAnswer${number}`,
    ) as NodeListOf<HTMLElement>;

    if (showResult) {
      // Verificar também se feedbackShow está ativo
      const answer = document.querySelector(
        `#answerBackground${number - 1}${userAnswer}`,
      ) as HTMLElement;

      if (answer) {
        if (userAnswer === correctAnswer) {
          answer.classList.add('correctAnswer-Question');
        } else {
          answer.classList.add('incorrectAnswer-Question');
        }
      }

      answers.forEach((answer: HTMLElement) => {
        answer.style.pointerEvents = 'none';
      });
    } else {
      // Ao resetar (showResult=false), manter respostas corretas mas remover apenas as incorretas
      answers.forEach((answer: HTMLElement) => {
        if (!answer.classList.contains('correctAnswer-Question')) {
          answer.classList.remove('incorrectAnswer-Question');
          answer.style.pointerEvents = 'auto';
        }
      });
    }
  }, [
    showResult,
    feedbackShow, // Adicionado feedbackShow como dependência
    number,
    correctAnswer,
    moduleNow,
    slideNow,
    questionArray,
    updateArray,
    questionAnsweredArray,
    updateQuestionAnsweredArray,
    updateShowResult,
    userAnswer, // Adicionado userAnswer se necessário
  ]);

  return (
    <div className="question-main">
      <div className="question mt-3">
        <div className="question-titleAndAdvice w-full">
          {/* {indicator && (
            <h4 className="question-title text-title-2">Questão {indicator}</h4>
          )} */}

          {numberQuestion ? (
            <div className="question-number-header">
              {numberQuestion.map((content, index) => {
                return (
                  <div key={index} className="question-number-content">
                    {content}
                  </div>
                );
              })}
            </div>
          ) : null}

          {text ? (
            <div>
              {text.map((paragraph, index) => {
                return (
                  <p key={index} className="question-text">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          ) : (
            <></>
          )}
          {children ? <div>{children}</div> : <></>}
        </div>
        <div className="answersDiv">
          <p
            id={`noAnswerMarkedAdvice${number - 1}`}
            style={{
              display: 'none',
              fontSize: '21px',
              color: 'rgb(255, 255, 255)',
              backgroundColor: 'rgba(255, 83, 83, 0.815)',
              borderRadius: '20px',
              padding: '10px 20px',
              transition: 'all .3s',
              animation: 'blink 4s',
              animationIterationCount: '3',
            }}
          >
            É preciso que você marque alguma alternativa!
          </p>
          {answersContent.map((answer, index) => {
            const isCorrect = index + 1 === correctAnswer;
            const isSelected = userAnswer === index + 1;
            return (
              <div
                key={index}
                id={`answerBackground${number - 1}${index + 1}`}
                className={[
                  `answer-oneAnswer answer-oneAnswer${number}`,
                  'bg-transparent border-2 text-black',
                  // estado base
                  'border-[#F5BE7A] bg-white',
                  // estado selecionado atual (apenas 1)
                  isSelected ? 'bg-[#FCEAD4] border-[#72401D]' : '',
                  // estado de resultado correto/incorreto (se precisar manter)
                  showResult && isSelected && isCorrect ? 'correctAnswer-Question' : '',
                  showResult && isSelected && !isCorrect ? 'incorrectAnswer-Question' : '',
                ].join(' ')}
                style={{
                  pointerEvents: showResult || feedbackShow ? 'none' : 'auto',
                }}
                onClick={() => handleInputChecked(index + 1)}
              >
                <div className="flex items-center gap-5 w-full">
                  <input
                    type="radio"
                    id={`answer${number - 1}${index + 1}`}
                    value={`answer${number - 1}${index + 1}`}
                    name={`questionAnswer${number - 1}`}
                    className={`answer${number - 1} button-radio`}
                  />
                  <div className="flex flex-col gap-5 w-full">
                    {/* Render HTML safely: sanitize then inject with dangerouslySetInnerHTML */}
                    <p
                      dangerouslySetInnerHTML={{
                        __html: sanitizeHTML(String(answer)),
                      }}
                    />

                    {/* Feedback Dinâmico */}
                    <div
                      className={`feedback_question ${
                        (showResult || feedbackShow) && isSelected ? 'block' : 'hidden'
                      }`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {isSelected &&
                        (isCorrect ? (
                          <p
                            className="w-full p-5"
                            style={{
                              borderRadius: '20px',
                              border: '1px solid #000000',
                              background: '#93EABA',
                              pointerEvents: 'auto',
                            }}
                            onClick={(e) => e.stopPropagation()}
                            dangerouslySetInnerHTML={{
                              __html: sanitizeHTML(String(feedbackContent[index])),
                            }}
                          />
                        ) : (
                          <p
                            className="w-full p-5"
                            style={{
                              borderRadius: '20px',
                              background: '#FFF394',
                              border: '1px solid #000000',
                              pointerEvents: 'auto',
                            }}
                            onClick={(e) => e.stopPropagation()}
                            dangerouslySetInnerHTML={{
                              __html: sanitizeHTML(String(feedbackContent[index])),
                            }}
                          />
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  // Funções de salvamento na API genérica

  // Sanitiza HTML antes de inserir com dangerouslySetInnerHTML
  function sanitizeHTML(dirty: string) {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(dirty, 'text/html');

      // Remover elementos perigosos
      const forbidden = doc.querySelectorAll('script, iframe, object, embed');
      forbidden.forEach((n) => n.remove());

      // Remover atributos event handlers e javascript: nos atributos
      const all = doc.querySelectorAll('*');
      all.forEach((el) => {
        // copiar lista porque podemos modificar atributos
        Array.from(el.attributes).forEach((attr) => {
          const name = attr.name.toLowerCase();
          const value = String(attr.value || '');
          if (name.startsWith('on') || /javascript:\s*/i.test(value)) {
            el.removeAttribute(attr.name);
          }
        });
      });

      return doc.body.innerHTML;
    } catch (e) {
      // fallback: escapa o HTML básico
      return String(dirty)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\"/g, '&quot;')
        .replace(/'/g, '&#039;');
    }
  }

  async function LocalStorageLoad(auxNumber: number) {
    let inputClasses: Array<any> = [];
    const key = `FPIAQuestionStorageQuestion${moduleNow}${slideNow}`;

    setTimeout(() => {
      try {
        const stored = localStorage.getItem(key);
        if (stored) {
          inputClasses = JSON.parse(stored);
        }
      } catch (error) {
        console.error('Erro ao obter dados do localStorage:', error);
      }

      inputClasses.forEach((input: any, idx: number) => {
        const condition =
          auxNumber < 10
            ? input.charAt(input.length - 2) === (auxNumber - 1).toString()
            : input.slice(-3, -1) === (auxNumber - 1).toString();
        if (condition) {
          const selectedAnswer = parseInt(input.charAt(input.length - 1));
          handleInputChecked(selectedAnswer, true);

          const inputElement = document.querySelector(`#${input}`) as any;
          if (inputElement && inputElement.parentNode) {
            inputElement.checked = true;
            // Força atualização visual imediata no elemento pai
            const parentDiv = inputElement.closest('.answer-oneAnswer') as HTMLElement;
            if (parentDiv) parentDiv.style.background = '#FCEAD4';
          }
        }
      });
    }, 500); // Aumentado para 500ms (Padrão Ouro de Timing) para evitar Race Condition com resetContext
    return null;
  }

  function LocalStorageSave(classValue: string) {
    const key = `FPIAQuestionStorageQuestion${moduleNow}${slideNow}`;
    let existingItems: Array<any> = [];

    try {
      const stored = localStorage.getItem(key);
      if (stored) {
        existingItems = JSON.parse(stored);
      }
    } catch (error) {
      console.error('Erro ao ler do localStorage:', error);
    }

    existingItems = existingItems.filter(
      (item: string) => item.slice(0, -1) !== classValue.slice(0, -1),
    );

    const updatedItems = [...existingItems, classValue];

    try {
      localStorage.setItem(key, JSON.stringify(updatedItems));
    } catch (lsErr) {
      console.warn('Não foi possível salvar no localStorage:', lsErr);
    }
  }
};

export default Question;
