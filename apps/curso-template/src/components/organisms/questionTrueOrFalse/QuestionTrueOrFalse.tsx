import { useCallback, useEffect, useRef } from 'react';
import { useQuestionsContext } from '../../../contexts/QuestionsContext';
import ReactMarkdown from 'react-markdown';
import './Styles.css';

interface QuestionTrueOrFalseProps {
  number: number;
  indicator: number;
  correctAnswer: Array<number>;
  numberQuestion?: Array<any>;
  text?: Array<any>;
  feedbackArray?: Array<string> | React.ReactNode[];
  answersContent: Array<string> | React.ReactNode[];
  children?: React.ReactNode;
  slideNow: number;
  moduleNow: number;
}

const QuestionTrueOrFalse: React.FC<QuestionTrueOrFalseProps> = ({
  number,
  indicator,
  numberQuestion,
  text,
  children,
  feedbackArray = [],
  correctAnswer,
  answersContent = [],
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
    hasSentAnswers,

    feedbackShow, // Acessando feedbackShow do contexto
  } = useQuestionsContext();

  const useEffectFlag = useRef(0);
  const answersCheckerRef = useRef(new Array(correctAnswer.length).fill(false));
  const questionAnsweredArrayRef = useRef(new Array(correctAnswer.length).fill(false));

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

            const myQuestionId = `S${slideNow}M${moduleNow}_${number}`;
            correctAnswer.forEach((_, index) => {
              const currentSubQId = `S${slideNow}M${moduleNow}_${number}`;

              const apiQuestion = questoesUsuario.find(
                (q: any) => q.questao.identificador === currentSubQId,
              );

              if (apiQuestion && apiQuestion.respostas) {
                const isCorrect = apiQuestion.respostas.some(
                  (r: any) => r.chave === '1' && r.valor === '1',
                );

                if (isCorrect) {
                  // Re-hidratar o context para garantir consistência
                  const totalOptions = correctAnswer.length;
                }
              }
            });
          }
        }
      }
    } catch (error) {
      console.error('❌ Erro na persistência (QuestionTrueOrFalse):', error);
    } finally {
      console.groupEnd();
    }
  }

  useEffect(() => {
    if (useEffectFlag.current === 0) {
      initPersistence();
      useEffectFlag.current = 1;
    }
  }, []);

  useEffect(() => {
    LocalStorageLoad(number);
  }, [showResult, feedbackShow, number]);

  function handleInputChecked(
    optionNumber: number,
    otherOptionNumber: number,
    answerMarked: number,
    isRestoring = false,
  ) {
    if (!isRestoring) {
      updateShowResult(false);
    }

    const answers = document.querySelectorAll(`.questionOption${number - 1}`);
    answers.forEach((answer) => {
      answer.classList.add('iddleOption-TrueOrFalse');
    });

    LocalStorageSave({
      id: `#questionOption${number - 1}${answerMarked}${optionNumber}`,
      optionNumber: optionNumber,
      otherOptionNumber: otherOptionNumber,
      answerMarked: answerMarked,
    });

    const thisOption = document.querySelector(
      `#questionOption${number - 1}${answerMarked}${optionNumber}`,
    ) as HTMLElement;

    if (thisOption != null) {
      thisOption.classList.remove('iddleOption-TrueOrFalse');
      thisOption.classList.add('markedOption-TrueOrFalse');
    }

    const otherOption = document.querySelector(
      `#questionOption${number - 1}${answerMarked}${otherOptionNumber}`,
    ) as HTMLElement;

    if (otherOption) {
      otherOption.classList.remove('markedOption-TrueOrFalse');
      otherOption.classList.add('iddleOption-TrueOrFalse');
    }

    const totalOptions = correctAnswer.length;
    const subQuestionNumber = `${number}-${answerMarked}-${totalOptions}`;

    // CORREÇÃO: Uso de atualização funcional para evitar Race Condition
    if (optionNumber === correctAnswer[answerMarked - 1]) {
      answersCheckerRef.current[answerMarked - 1] = true;
      updateArray((prevArray) => {
        // Verifica se já existe para evitar duplicatas
        if (!prevArray.includes(subQuestionNumber)) {
          return [...prevArray, subQuestionNumber];
        }
        return prevArray;
      });
    } else {
      answersCheckerRef.current[answerMarked - 1] = false;
      updateArray((prevArray) => prevArray.filter((tag) => tag !== subQuestionNumber));
    }

    questionAnsweredArrayRef.current[answerMarked - 1] = true;
    const allMarked = questionAnsweredArrayRef.current.filter((item) => item === true);

    if (allMarked.length === correctAnswer.length) {
      updateQuestionAnsweredArray((prev) => {
        const auxQuestionAnsweredArray = [...prev];
        auxQuestionAnsweredArray[number - 1] = true;
        return auxQuestionAnsweredArray;
      });
    }
  }

  const LocalStorageLoad = useCallback(
    async (auxNumber: number) => {
      // Primeiro tenta carregar do localStorage (mais confiável em dev)
      const key = `SACQuestionTrueOrFalseStorageQuestion${moduleNow}${slideNow}`;
      let chosenAnswers: Array<any> = [];

      setTimeout(() => {
        try {
          const stored = localStorage.getItem(key);
          if (stored) {
            chosenAnswers = JSON.parse(stored);
          }
        } catch (error) {
          console.error('Erro ao obter dados de persistência (localStorage):', error);
        }

        chosenAnswers.forEach((chosenAnswer: any, idx: number) => {
          if (chosenAnswer.id.includes(`#questionOption${auxNumber - 1}`)) {
            handleInputChecked(
              chosenAnswer.optionNumber,
              chosenAnswer.otherOptionNumber,
              chosenAnswer.answerMarked,
              true,
            );

            const chosenAnswerElement = document.querySelector(chosenAnswer.id) as HTMLElement;
            if (chosenAnswerElement) {
              chosenAnswerElement.classList.remove('iddleOption-TrueOrFalse');
              chosenAnswerElement.classList.add('markedOption-TrueOrFalse');
            }
          }
        });
        // Movido para dentro do timeout
        if (showResult) {
          correctAnswer.forEach((_: any, index: number) => {
            if (answersCheckerRef.current[index]) {
              // Acertou
            } else {
              let incorrectAnswer: number;

              if (correctAnswer[index] === 2) {
                incorrectAnswer = 1;
              } else {
                incorrectAnswer = 2;
              }

              const chosenAnswerIncorrect = document.querySelector(
                `#questionOption${number - 1}${index + 1}${incorrectAnswer}`,
              ) as HTMLElement;

              if (chosenAnswerIncorrect) {
                chosenAnswerIncorrect.classList.remove('iddleOption-TrueOrFalse');
                chosenAnswerIncorrect.classList.add('incorrectAnswer-QuestionTF');
              }
            }
          });

          const options = document.querySelectorAll(
            `.questionOption${number - 1}`,
          ) as NodeListOf<HTMLElement>;

          options.forEach((option: HTMLElement) => {
            option.style.pointerEvents = 'none';
            option.style.cursor = 'default';
          });
        } else {
          const answers = document.querySelectorAll(
            `.questionOption${number - 1}`,
          ) as NodeListOf<HTMLElement>;

          const wrongAnswerAdvice = document.querySelector(
            `#wrongAnswerAdvice${number - 1}`,
          ) as HTMLElement;

          const allCorrect = answersCheckerRef.current.filter((item) => item === true);

          let auxErrors = localStorage.getItem(`errorsFPIA_M${moduleNow - 1}_S${slideNow}`);

          if (allCorrect.length !== correctAnswer.length) {
            if (auxErrors !== null && auxErrors !== '0') {
              if (wrongAnswerAdvice && feedbackShow) {
                wrongAnswerAdvice.style.display = 'block';
                wrongAnswerAdvice.style.opacity = '0';
                setTimeout(() => {
                  if (wrongAnswerAdvice) {
                    wrongAnswerAdvice.style.opacity = '1';
                  }
                }, 10);
              }
            }

            // Manter respostas corretas, remover apenas as incorretas
            answers.forEach((answer: HTMLElement) => {
              if (!answer.classList.contains('correctAnswer-QuestionTF')) {
                answer.classList.add('iddleOption-TrueOrFalse');
                answer.classList.remove('incorrectAnswer-QuestionTF');
                answer.style.pointerEvents = 'auto';
                answer.style.cursor = 'pointer';
              }
            });
          }
        }
      }, 500);
    },
    [
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
    ],
  );

  return (
    <div className="question-main">
      <div className="question mt-3">
        <div className="question-titleAndAdvice">
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
          ) : null}
          {children ? <div>{children}</div> : null}
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
            className="mb-5"
          >
            É preciso que você marque alguma alternativa!
          </p>
          <p
            id={`wrongAnswerAdvice${number - 1}`}
            style={{
              display: 'none',
              fontSize: '21px',
              color: 'black',
              backgroundColor: '#FFF8B8',
              borderRadius: '20px',
              padding: '10px 20px',
              transition: 'all .3s',
              animation: 'blink 4s',
              animationIterationCount: '3',
            }}
            className="mb-5"
          >
            Você errou essa questão, mude suas respostas e envie novamente!
          </p>
          {answersContent.map((answer, index) => {
            const isCorrect = answersCheckerRef.current[index];
            return (
              <div
                key={index}
                className={`answer-TrueOrFalse answer-TrueOrFalse${number}`}
                id={`answerBackground${number - 1}${index + 1}`}
              >
                <div className="flex items-center gap-5 w-full">
                  <div className="flex md:flex-row flex-col gap-1 h-full">
                    <p
                      onClick={() => handleInputChecked(2, 1, index + 1)}
                      className={`iddleOption-TrueOrFalse  questionOption${number - 1}`}
                      id={`questionOption${number - 1}${index + 1}2`}
                    >
                      V
                    </p>
                    <p
                      onClick={() => handleInputChecked(1, 2, index + 1)}
                      className={`iddleOption-TrueOrFalse   questionOption${number - 1}`}
                      id={`questionOption${number - 1}${index + 1}1`}
                    >
                      F
                    </p>
                  </div>
                  <div className="flex flex-col gap-5 w-full">
                    <p>{answer}</p>

                    {/* Sistema de Feedback Modificado */}
                    <div className={`feedbackShow ${hasSentAnswers ? 'block' : 'hidden'}`}>
                      {feedbackShow ? (
                        isCorrect ? (
                          correctAnswer[index] === 2 /* feedbackshow e correta */ ? (
                            <p
                              className="w-full p-5"
                              style={{
                                border: '2px solid #000',
                                borderRadius: '10px',
                                background: '#93EABA',
                                color: '#000000',
                              }}
                            >
                              {feedbackArray[index]}
                            </p>
                          ) : (
                            <p
                              className="w-full p-5"
                              style={{
                                border: '2px solid #000',
                                borderRadius: '10px',
                                background: '#93EABA',
                                color: '#000000',
                              }}
                            >
                              {feedbackArray[index]}
                            </p>
                          )
                        ) : correctAnswer[index] === 2 /* feedbackshow e errou */ ? (
                          <p
                            className="w-full p-5"
                            style={{
                              border: '2px solid #000',
                              borderRadius: '10px',
                              background: '#FFF394',
                              color: '#000000',
                            }}
                          >
                            {feedbackArray[index]}
                          </p>
                        ) : (
                          <p
                            className="w-full p-5"
                            style={{
                              border: '2px solid #000',
                              borderRadius: '10px',
                              background: '#FFF394',
                              color: '#000000',
                            }}
                          >
                            {feedbackArray[index]}
                          </p>
                        )
                      ) : isCorrect ? (
                        correctAnswer[index] === 2 ? (
                          <p
                            className="w-full p-5"
                            style={{
                              border: '2px solid #000',
                              borderRadius: '10px',
                              background: '#93EABA', // Mantém a cor amarela para erro
                              color: '#000000',
                            }}
                          >
                            {feedbackArray[index]}
                          </p>
                        ) : (
                          <p
                            className="w-full p-5"
                            style={{
                              border: '2px solid #000',
                              borderRadius: '10px',
                              background: '#93EABA', // Mantém a cor amarela para erro
                              color: '#000000',
                            }}
                          >
                            {feedbackArray[index]}
                          </p>
                        )
                      ) : (
                        <p
                          className="w-full p-5"
                          style={{
                            border: '2px solid #000',
                            borderRadius: '10px',
                            background: '#FFF394', // Mantém a cor amarela para erro
                            color: '#000000',
                          }}
                        >
                          {feedbackArray[index + 1]}
                        </p>
                      )}
                    </div>
                    {/* Fim do Sistema de Feedback Modificado */}
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

  function LocalStorageSave(chosenAnswer: {
    id: string;
    optionNumber: number;
    otherOptionNumber: number;
    answerMarked: number;
  }) {
    const key = `SACQuestionTrueOrFalseStorageQuestion${moduleNow}${slideNow}`;
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
      (item: { id: string; optionNumber: number; answerMarked: number }) =>
        item.id.slice(0, -1) !== chosenAnswer.id.slice(0, -1),
    );

    const updatedItems = [...existingItems, chosenAnswer];

    try {
      localStorage.setItem(key, JSON.stringify(updatedItems));
    } catch (error) {
      console.error('Erro ao salvar no localStorage:', error);
    }
  }
};
export default QuestionTrueOrFalse;
