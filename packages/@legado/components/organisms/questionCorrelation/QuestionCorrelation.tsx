import React, { useEffect, useRef } from 'react';
import { useQuestionsContext } from '../../../contexts/QuestionsContext';
import './Styles.css';

let showResultFlag = false;

const QuestionCorrelation: React.FC<QuestionCorrelationProps> = ({
  indicator,
  number,
  numberQuestion,
  text,
  children,
  feedbackArray,
  correctAnswer,
  answersOptions = [],
  answersTexts = [],
  moduleNow,
  slideNow,
  variant = '1',
  oneOptionPerRow = false,
  answerOptionClassName,
  answerOptionStyles = [],
}) => {
  const {
    questionArray,
    updateArray,
    questionAnsweredArray,
    updateQuestionAnsweredArray,
    showResult,
    updateShowResult,
  } = useQuestionsContext();

  const useEffectFlag = useRef(0);

  // Array que será utilizado para saber se as respostas estão corretas
  const answersCheckerRef = useRef(new Array(answersTexts.length).fill(false));

  // Array que será utilizado para saber se todas as opções foram respondidas
  const questionAnsweredArrayRef = useRef(new Array(answersTexts.length).fill(false));

  async function initPersistence() {
    try {
      // 1. Carrega estado visual do LocalStorage (memória de curto prazo/detalhes)
      LocalStorageLoad();

      // 2. Consulta a API para validar o estado real (memória de longo prazo/autoridade)
      if (window.BridgeRestApi) {
        const api = new window.BridgeRestApi();
        const activityId = `moduloAvaliativo_S${slideNow}M${moduleNow}`;

        const response = await api.obterRespostaAtividade(activityId);

        if (response && response.data) {
          const { situacao, questoesUsuario } = response.data;

          // Se a atividade já foi finalizada, bloqueia e mostra resultado
          if (situacao === 'AVALIADA') {
            updateShowResult(true);

            // Tenta validar as respostas locais com o que está na API (Problema 1)
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
      console.error('❌ Erro na persistência (QuestionCorrelation):', error);
    } finally {
      console.groupEnd();
    }
  }

  function handleInputChecked(textIndex: number, optionIndex: number, isLoading = false) {
    LocalStorageSave({
      id: `#chosenAnswer${number}${textIndex}`,
      value: String.fromCharCode(65 + optionIndex),
      textIndex: textIndex,
      optionIndex: optionIndex,
    });

    const chosenAnswer = document.querySelector(
      `#chosenAnswer${number}${textIndex}`,
    ) as HTMLElement;

    chosenAnswer.textContent = String.fromCharCode(65 + optionIndex);

    if (optionIndex + 1 === correctAnswer[textIndex]) {
      answersCheckerRef.current[textIndex] = true;
    } else {
      answersCheckerRef.current[textIndex] = false;
    }

    questionAnsweredArrayRef.current[textIndex] = true;

    const allCorrect = answersCheckerRef.current.filter((item) => item === true);

    if (allCorrect.length === answersTexts.length) {
      // Se a alternativa marcada está correta, vamos adicionar a questão ao context
      const auxArray = [...questionArray];
      const found = auxArray.find((tag) => tag === `${number}`);
      if (found === undefined) {
        // Evita duplicidade
        auxArray.push(`${number}`);
        updateArray(auxArray);
      }
    } else {
      // Se alguma está errada, removemos do context
      const auxArray = questionArray.filter((tag) => tag !== `${number}`);
      updateArray(auxArray);
    }

    const allMarked = questionAnsweredArrayRef.current.filter((item) => item === true);

    if (allMarked.length === answersTexts.length) {
      // Marca a questão como respondida para o pagination
      const auxQuestionAnsweredArray = [...questionAnsweredArray];
      auxQuestionAnsweredArray[number - 1] = true;
      updateQuestionAnsweredArray(auxQuestionAnsweredArray);
    }

    const textOptions = document.querySelectorAll(`.textOption${number}${textIndex}`);

    chosenAnswer.style.backgroundColor = '#EA8914';
    chosenAnswer.style.borderColor = '#EA8914';
    chosenAnswer.style.color = '#000000';

    if (!isLoading) {
      textOptions.forEach((option) => {
        if (option) {
          option.classList.toggle('hiddenOption');
        }
      });
    }

    // Sincroniza as cores dos cards de answersOptions em tempo real
    refreshUsedOptionsUI();
  }

  function showOptions(index: number) {
    const textOptions = document.querySelectorAll(`.textOption${number}${index}`);

    textOptions.forEach((option) => {
      if (option) {
        option.classList.toggle('hiddenOption');
      }
    });
  }

  useEffect(() => {
    if (useEffectFlag.current === 0) {
      initPersistence();
    }
    useEffectFlag.current = 1;

    if (showResult) {
      showResultFlag = true;

      const wrongAnswerAdvice = document.querySelector(`#wrongAnswerAdvice${number - 1}`) as any;

      wrongAnswerAdvice.style.display = 'none';

      answersCheckerRef.current.forEach((answer, index) => {
        const chosenAnswer = document.querySelector(
          `#chosenAnswer${number}${index}`,
        ) as HTMLElement;

        const chosenAnswerDiv = document.querySelector(
          `#answerDiv-Correlation${number}${index}`,
        ) as HTMLElement;

        if (answer) {
          const feedback = document.querySelector(
            `#correctFeedbackCorrelation${number}${index}`,
          ) as HTMLElement;

          if (chosenAnswer) {
            if (chosenAnswerDiv) {
              chosenAnswerDiv.classList.add('correctChoosenAnswerDiv-Correlation');
            }
            chosenAnswer.classList.remove('iddleChosenAnswer');
            chosenAnswer.classList.add('correctChosenAnswer');

            feedback.style.display = 'initial';
          }
        } else {
          const feedback = document.querySelector(
            `#incorrectFeedbackCorrelation${number}${index}`,
          ) as HTMLElement;

          if (chosenAnswer) {
            chosenAnswer.classList.remove('iddleChosenAnswer');
            chosenAnswer.classList.add('incorrectChosenAnswer');

            feedback.style.display = 'initial';
          }
        }
      });
    } else {
      const choosenAnswers = document.querySelectorAll(`.choosenAnswer${number}`) as any;

      const feedbacks = document.querySelectorAll(`.feedbackCorrelation${number}`) as any;

      const wrongAnswerAdvice = document.querySelector(`#wrongAnswerAdvice${number - 1}`) as any;

      const allCorrect = answersCheckerRef.current.filter((item) => item === true);

      let auxErrors = localStorage.getItem(`errorsPR_M${moduleNow - 1}_S${slideNow}`);

      if (allCorrect.length !== answersTexts.length) {
        if (auxErrors !== null && auxErrors !== '0') {
          if (wrongAnswerAdvice && showResultFlag) {
            wrongAnswerAdvice.style.display = 'block';
            wrongAnswerAdvice.style.opacity = '0';
            setTimeout(() => {
              wrongAnswerAdvice.style.opacity = '1';
            }, 10);
          }
        }

        choosenAnswers.forEach((answer: HTMLElement) => {
          const parent = answer.parentNode?.parentNode as any;
          if (!parent.classList.contains('correctChoosenAnswerDiv-Correlation')) {
            answer.classList.remove('incorrectChosenAnswer');
            answer.classList.remove('correctChosenAnswer');
            answer.classList.add('iddleChosenAnswer');
          }
        });
      }

      feedbacks.forEach((feedback: HTMLElement) => {
        if (feedback.style.display === 'initial') {
          if (feedback.classList.contains('incorrectFeedback-Correlation')) {
            feedback.style.display = 'none';
          }
        }
      });
    }
  }, [showResult]);

  // Sincroniza os cards das opções com base no que está atualmente exibido nos chosenAnswer
  function refreshUsedOptionsUI() {
    // 1) limpa todos os cards marcados
    document
      .querySelectorAll(`.globalOption-${number}.usedOption`)
      .forEach((el) => el.classList.remove('usedOption'));

    // 2) recolore apenas os realmente usados
    answersTexts.forEach((_, idx) => {
      const chosen = document.querySelector(`#chosenAnswer${number}${idx}`) as HTMLElement | null;
      const letter = chosen?.textContent?.trim();
      if (!letter || letter === '?') return;
      const optIdx = letter.charCodeAt(0) - 65;
      const card = document.querySelector(
        `.globalOption-${number}[data-optionindex="${optIdx}"]`,
      ) as HTMLElement | null;
      card?.classList.add('usedOption');
    });
  }

  // Restaura do LocalStorage e sincroniza visual ao final
  function LocalStorageLoad() {
    setTimeout(() => {
      const key = `PRQuestionStorageQuestionCorrelation${moduleNow}${slideNow}${number}`;
      const storedData = localStorage.getItem(key);
      const chosenAnswers = storedData ? JSON.parse(storedData) : [];

      chosenAnswers.forEach((chosenAnswer: any, idx: number) => {
        handleInputChecked(chosenAnswer.textIndex, chosenAnswer.optionIndex, true);

        const el = document.querySelector(chosenAnswer.id) as HTMLElement | null;
        if (el) {
          el.textContent = chosenAnswer.value;
          el.style.backgroundColor = '#EA8914';
          el.style.borderColor = '#EA8914';
        }
      });

      // Consolidar UI das opções após restaurar
      refreshUsedOptionsUI();

      // Reaplica estado no contexto caso ele tenha sido sobrescrito
      setTimeout(() => {
        // Marca a questão como respondida no contexto se todas as opções estiverem marcadas
        const allMarked = questionAnsweredArrayRef.current.filter((item) => item === true);
        if (allMarked.length === answersTexts.length) {
          updateQuestionAnsweredArray((prev) => {
            const aux = [...prev];
            aux[number - 1] = true;
            return aux;
          });
        }

        // Marca a questão como correta no contexto caso todas as respostas estejam corretas
        const allCorrect = answersCheckerRef.current.filter((item) => item === true);
        if (allCorrect.length === answersTexts.length) {
          updateArray((prev) => {
            const aux = [...prev];
            if (!aux.includes(`${number}`)) aux.push(`${number}`);
            return aux;
          });
        }
      }, 120);
    }, 10);
    return null;
  }

  function LocalStorageSave(chosenAnswer: any) {
    const key = `PRQuestionStorageQuestionCorrelation${moduleNow}${slideNow}${number}`;
    const storedData = localStorage.getItem(key);
    let existingItems = storedData ? JSON.parse(storedData) : [];

    existingItems = existingItems.filter((item: any) => item.id !== chosenAnswer.id);

    const updatedItems = [...existingItems, chosenAnswer];
    localStorage.setItem(key, JSON.stringify(updatedItems));
  }

  const generateAlphabet = (num: number) => {
    const alphabet = [];
    for (let i = 0; i < num; i++) {
      alphabet.push(String.fromCharCode(65 + i));
    }
    return alphabet;
  };

  const optionsWrapperClass = oneOptionPerRow
    ? 'flex flex-col w-full gap-4'
    : variant === '1'
      ? 'grid gap-4 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] max-[900px]:grid-cols-[repeat(auto-fit,minmax(180px,1fr))]'
      : 'flex flex-wrap justify-center gap-4';

  return (
    <div className="question-main">
      {children}
      <div className="question mt-3">
        <div className="question-titleAndAdvice">
          {/*{indicator && (
            <h4 className="question-title text-title-2">Questão {indicator}</h4>
          )}*/}
          {numberQuestion ? (
            <div className="question-number-header">
              {numberQuestion.map((content: any, idx: number) => (
                <div key={idx} className="question-number-content">
                  {content}
                </div>
              ))}
            </div>
          ) : null}
          <div>
            {text.map((paragraph, index) => {
              return (
                <p key={index} className="question-text">
                  {paragraph}
                </p>
              );
            })}
          </div>
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
          <div className="flex flex-col w-full gap-6 mt-5">
            <div className={optionsWrapperClass}>
              {answersOptions.map((option, index) => (
                <div
                  key={index}
                  data-optionindex={index}
                  className={`globalOption-${number} bg-transparent rounded-[8px] p-4 flex items-center gap-4 border-2 border-[#6F310E] ${
                    answerOptionClassName ? answerOptionClassName : ''
                  }`}
                  style={answerOptionStyles?.[index]}
                >
                  <span
                    translate="no"
                    className=" text-[24px] font-semibold rounded-[50%] border-[2px] border-black p-4 min-h-[50px] max-h-[50px] min-w-[50px] max-w-[50px] flex items-center justify-center"
                  >
                    {generateAlphabet(answersOptions.length)[index]}
                  </span>
                  <h5>{option}</h5>
                </div>
              ))}
            </div>
            <div className="flex flex-col w-full gap-4">
              {answersTexts.map((text, index) => {
                return (
                  <div
                    key={`answerDiv-Correlation${number}${index}`}
                    id={`answerDiv-Correlation${number}${index}`}
                    className="iddleAnswerDiv rounded-[25px] p-4 flex flex-col items-start gap-4 w-full"
                  >
                    <div className="w-full max-w-[50px] flex gap-4">
                      <span
                        onClick={!showResult ? () => showOptions(index) : () => {}}
                        id={`chosenAnswer${number}${index}`}
                        className={`iddleChosenAnswer choosenAnswer${number} text-[24px] font-semibold rounded-[50%] p-4 min-h-[50px] max-h-[50px] min-w-[50px] max-w-[50px] flex items-center justify-center cursor-pointer transition-all`}
                      >
                        ?
                      </span>
                      {answersOptions.map((option, subIndex) => {
                        return (
                          <span
                            key={`textOption${number}${index}${subIndex}`}
                            onClick={
                              !showResult ? () => handleInputChecked(index, subIndex) : () => {}
                            }
                            translate="no"
                            className={`textOption${number}${index} text-[24px] font-semibold rounded-[50%] bg-[#C9AA85] p-4 min-h-[50px] max-h-[50px] min-w-[50px] max-w-[50px] flex items-center justify-center cursor-pointer hover:bg-[#EA8914] transition-all duration-500 hiddenOption`}
                          >
                            {generateAlphabet(answersOptions.length)[subIndex]}
                          </span>
                        );
                      })}
                    </div>
                    {typeof text === 'string' ? (
                      <p dangerouslySetInnerHTML={{ __html: text }}></p>
                    ) : (
                      <div>{text as React.ReactNode}</div>
                    )}
                    <div
                      id={`correctFeedbackCorrelation${number}${index}`}
                      className={`w-full hidden correctFeedback-Correlation feedbackCorrelation${number}`}
                    >
                      <p className="px-6 py-4 rounded-lg">{feedbackArray[index][0]}</p>
                    </div>
                    <div
                      id={`incorrectFeedbackCorrelation${number}${index}`}
                      className={`w-full hidden incorrectFeedback-Correlation feedbackCorrelation${number}`}
                    >
                      <p className="px-6 py-4 rounded-[8px]">{feedbackArray[index][1]}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Tipos de props
interface QuestionCorrelationProps {
  number: number;
  indicator?: number;
  numberQuestion?: Array<any>;
  correctAnswer: Array<number>;
  text: Array<any>;
  answersOptions: Array<string>;
  answersTexts: Array<string | React.ReactNode>;
  feedbackArray: Array<Array<string>>;
  children?: React.ReactNode;
  slideNow: number;
  moduleNow: number;
  variant?: '1' | '2'; // novo
  answerOptionClassName?: string;
  answerOptionStyles?: Array<React.CSSProperties>;
  oneOptionPerRow?: boolean;
}

export default QuestionCorrelation;
