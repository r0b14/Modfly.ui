import { useEffect, useRef } from 'react';
import { useQuestionsContext } from '../../../contexts/QuestionsContext';
import './Styles.css';

let showResultFlag = false;

const QuestionMultipleAnswer: React.FC<QuestionMultipleAnswerProps> = ({
  number,
  indicator,
  text,
  children,
  feedbackArray,
  correctAnswer,
  answersContent = [],
  moduleNow,
  slideNow,
  maxSelections,
}) => {
  const {
    questionArray,
    updateArray,
    questionAnsweredArray,
    updateQuestionAnsweredArray,
    showResult,
    updateShowResult,
    feedbackShow,
  } = useQuestionsContext();

  const useEffectFlag = useRef(0);

  const userAnswer = useRef(new Array(answersContent.length).fill(false));

  function handleInputChecked(answerMarked: number, isLoading = false, inputClick = false) {
    updateShowResult(false);
    // evita que o usuário marque mais alternativas do que o permitido
    const currentlySelected = userAnswer.current.filter((v) => v === true).length;
    const willToggleTo = !userAnswer.current[answerMarked - 1];
    if (!isLoading && willToggleTo && currentlySelected >= maxSelections) {
      if (inputClick) {
        const thisInput = document.querySelector(`#answer${number - 1}${answerMarked}`) as any;
        if (thisInput) thisInput.checked = false;
      }

      const maxAdvice = document.querySelector(`#maxSelectionAdvice${number - 1}`) as any;
      if (maxAdvice) {
        maxAdvice.style.display = 'block';
        maxAdvice.style.opacity = '0';
        setTimeout(() => (maxAdvice.style.opacity = '1'), 10);
        setTimeout(() => (maxAdvice.style.opacity = '0'), 1500);
        setTimeout(() => (maxAdvice.style.display = 'none'), 1800);
      }
      return;
    }

    if (!isLoading) {
      LocalStorageSave(`answer${number - 1}${answerMarked}`);
    }

    const thisInput = document.querySelector(`#answer${number - 1}${answerMarked}`) as any;

    const answerDivs = document.querySelectorAll(`.answer-MultipleAnswer${number}`) as any;

    if (thisInput != null) {
      if (inputClick) {
        thisInput.checked = !userAnswer.current[answerMarked - 1];
      } else {
        thisInput.checked = !thisInput.checked;
      }
    }

    userAnswer.current[answerMarked - 1] = !userAnswer.current[answerMarked - 1];

    answerDivs.forEach((element: any) => {
      element.classList.remove('iddleAnswer-QuestionMultipleAnswer');
      if (element.firstElementChild.firstElementChild.checked === true) {
        // fundo claro + borda azul escuro conforme especificado
        element.style.background = '#FCEAD4';
        element.style.color = 'black';
        element.style.border = '2px solid #935528';
      } else {
        element.style.background = '#fff';
        element.style.color = 'black';
        element.style.border = '2px solid #935528';
      }
    });

    let allCorrect = true;
    userAnswer.current.forEach((answer, index) => {
      if (correctAnswer.includes(index + 1)) {
        if (userAnswer.current[index] == false) {
          allCorrect = false;
        }
      } else {
        if (userAnswer.current[index] == true) {
          allCorrect = false;
        }
      }
    });

    if (allCorrect) {
      // Se a alternativa marcada está correta, vamos adicionar a questão ao context
      const auxArray = [...questionArray];
      const found = auxArray.find((tag) => tag === `${number}`);
      if (found === undefined) {
        // Esse if é para evitar que a questão seja adicionada mais de uma vez ao context
        auxArray.push(`${number}`);
        updateArray(auxArray);
      }
    } else {
      // Se a alternativa marcada está errada, vamos remover a questão ao context
      const auxArray = questionArray.filter((tag) => tag !== `${number}`);
      updateArray(auxArray);
    }

    const numberOfTrues = userAnswer.current.filter((answer) => answer === true);

    // Atualiza o array de questões respondidas para o pagination identificar que essa questão está respondida
    const auxQuestionAnsweredArray = [...questionAnsweredArray];
    if (numberOfTrues.length >= correctAnswer.length) {
      auxQuestionAnsweredArray[number - 1] = true;
      updateQuestionAnsweredArray(auxQuestionAnsweredArray);
    } else {
      auxQuestionAnsweredArray[number - 1] = false;
      updateQuestionAnsweredArray(auxQuestionAnsweredArray);
    }
  }

  useEffect(() => {
    if (useEffectFlag.current === 0) {
      // 1. Carregamento Visual (LocalStorage)
      LocalStorageLoad(number);

      // 2. Validação com API (Autoridade)
      const checkPersistence = async () => {
        try {
          if ((window as any).BridgeRestApi) {
            const api = new (window as any).BridgeRestApi();
            const activityId = `moduloAvaliativo_M${moduleNow}_S${slideNow}`; // Formato ID pode variar, verifique SendActivityButton
            // SendActivityButton usa: identificador: `moduloAvaliativo_S${slideNow}M${moduleNow}`.
            // Aqui vamos usar o mesmo.
            const realId = `moduloAvaliativo_S${slideNow}M${moduleNow}`;

            const response = await api.obterRespostaAtividade(realId);

            if (response && response.data) {
              const { situacao, questoesUsuario } = response.data;

              // Hidratação via API (Autoridade Suprema)
              if (questoesUsuario && questoesUsuario.length > 0) {
                // Mapeia as respostas da API para garantir consistência
                questoesUsuario.forEach((q: any) => {
                  if (q.respostas) {
                    q.respostas.forEach((r: any) => {
                      // Procura pela estrutura padrão de chave (index 1-based)
                      const index = parseInt(r.chave, 10);
                      if (!isNaN(index) && !userAnswer.current[index - 1]) {
                        // Marca silenciosamente (isLoading=true)
                        handleInputChecked(index, true);
                      }
                    });
                  }
                });
              }

              if (situacao === 'AVALIADA') {
                // Garante que o bloqueio ocorra APÓS a hidratação visual (500ms)
                setTimeout(() => {
                  updateShowResult(true);
                }, 600);
              }
            }
          }
        } catch (error) {
          console.error('Erro ao verificar persistência API:', error);
        }
      };

      checkPersistence();
    }

    useEffectFlag.current = 1;

    if (showResult) {
      showResultFlag = true;

      const wrongAnswerAdvice = document.querySelector(`#wrongAnswerAdvice${number - 1}`) as any;

      wrongAnswerAdvice.style.display = 'none';

      userAnswer.current.forEach((answer, index) => {
        const answerBackground = document.querySelector(
          `#answerBackground${number - 1}${index + 1}`,
        ) as HTMLElement;

        const feedback = document.querySelector(
          `#feedbackQuestion${number - 1}${index + 1}`,
        ) as HTMLElement;

        if (answer) {
          if (correctAnswer.includes(index + 1)) {
            answerBackground.classList.add('correctAnswer-QuestionMultipleAnswer');
            // mostrar feedback correto (mesma estrutura do componente Question)
            feedback.classList.add('correctFeedback-QuestionMultipleAnswer');
          } else {
            answerBackground.classList.add('iddleAnswer-QuestionMultipleAnswer');
            // mostrar feedback incorreto
            feedback.classList.add('incorrectFeedback-QuestionMultipleAnswer');
          }
        }

        const answers = document.querySelectorAll(
          `.answer-MultipleAnswer${number}`,
        ) as NodeListOf<HTMLElement>;

        answers.forEach((answer: HTMLElement) => {
          answer.style.pointerEvents = 'none';
        });
      });
    } else {
      const answersDiv = document.querySelectorAll(
        `.answer-MultipleAnswer${number}`,
      ) as NodeListOf<HTMLElement>;

      const feedbacks = document.querySelectorAll(`.feedbackQuestion${number - 1}`) as any;

      const wrongAnswerAdvice = document.querySelector(`#wrongAnswerAdvice${number - 1}`) as any;

      feedbacks.forEach((feedback: any) => {
        feedback.classList.remove('incorrectFeedback-QuestionMultipleAnswer');
        feedback.classList.remove('correctFeedback-QuestionMultipleAnswer');
      });

      let allCorrect = true;
      userAnswer.current.forEach((answer, index) => {
        if (correctAnswer.includes(index + 1)) {
          if (userAnswer.current[index] == false) {
            allCorrect = false;
          }
        } else {
          if (userAnswer.current[index] == true) {
            allCorrect = false;
          }
        }
      });

      let auxErrors = localStorage.getItem(`errorsPR_M${moduleNow - 1}_S${slideNow}`);

      if (!allCorrect) {
        if (auxErrors !== null && auxErrors !== '0') {
          if (wrongAnswerAdvice && showResultFlag) {
            wrongAnswerAdvice.style.display = 'block';
            wrongAnswerAdvice.style.opacity = '0';
            setTimeout(() => {
              wrongAnswerAdvice.style.opacity = '1';
            }, 10);
          }
        }

        answersDiv.forEach((answer: HTMLElement) => {
          if (!answer.classList.contains('correctAnswer-QuestionMultipleAnswer')) {
            answer.style.pointerEvents = 'auto';
            answer.classList.remove('iddleAnswer-QuestionMultipleAnswer');
          }
        });
      }

      if (wrongAnswerAdvice && (auxErrors == '3' || allCorrect) && showResultFlag) {
        wrongAnswerAdvice.style.display = 'none';
      }
    }
  }, [showResult, feedbackShow]);

  return (
    <div className="question-main">
      <div className="question mt-3">
        <div className="question-titleAndAdvice">
          {text ? (
            <div>
              {text.map((paragraph: any, index: number) => {
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
            É preciso que você marque pelo menos {correctAnswer.length}{' '}
            {correctAnswer.length == 1 ? 'alternativa' : 'alternativas'} !
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
          >
            Você errou essa questão, mude suas respostas e envie novamente!
          </p>
          {/* Estilização do alerta de máximo de seleções atingidas */}
          <p
            id={`maxSelectionAdvice${number - 1}`}
            style={{
              display: 'none',
              fontSize: '18px',
              color: 'black',
              backgroundColor: '#FFF394',
              border: '1px solid #FFD700',
              borderRadius: '12px',
              padding: '8px 14px',
              transition: 'all .2s',
              opacity: 0,
            }}
          >
            Você só pode marcar até {maxSelections} alternativas.
          </p>
          {answersContent.map((answer: string, index: number) => {
            return (
              <div
                key={index}
                className={`answer-MultipleAnswer answer-MultipleAnswer${number}`}
                onClick={() => handleInputChecked(index + 1)}
                id={`answerBackground${number - 1}${index + 1}`}
                style={{
                  background: '#fff',
                  color: 'black',
                  border: '2px solid #B7703E',
                }}
              >
                <div className="flex items-center gap-5 w-full">
                  <input
                    type="radio"
                    id={`answer${number - 1}${index + 1}`}
                    value={`answer${number - 1}${index + 1}`}
                    name={`questionAnswer${number - 1}${index + 1}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleInputChecked(index + 1, false, true);
                    }}
                    className={`answer${number - 1}`}
                  />
                  <span className="custom-checkbox" aria-hidden="true"></span>
                  <p>{answer}</p>
                </div>
                <div
                  id={`feedbackQuestion${number - 1}${index + 1}`}
                  className={`w-full px-6 hidden feedbackQuestion${number - 1}`}
                >
                  <p className="px-6 py-4 rounded-lg">{feedbackArray[index]}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  // Funções de salvamento no LocalStorage

  function LocalStorageLoad(auxNumber: number) {
    // Atraso de 500ms para evitar Race Condition com resetContext (Padrão de Ouro)
    setTimeout(() => {
      const storedData = localStorage.getItem(
        `PRQuestionMultipleAnswerStorageQuestion${moduleNow}${slideNow}${number}`,
      );
      const inputClasses = storedData ? JSON.parse(storedData) : [];

      let loadedCount = 0;
      const prefix = `answer${number - 1}`;

      inputClasses.forEach((input: any) => {
        // Lógica de parser robusta para extrair o índice corretamente
        if (input.startsWith(prefix)) {
          const valWithIndex = input.substring(prefix.length);
          const index = parseInt(valWithIndex, 10);

          if (!isNaN(index)) {
            // Verifica o limite de seleções durante o carregamento (Correção do Bug)
            if (loadedCount < maxSelections) {
              handleInputChecked(index, true);
              loadedCount++;
            }
          }
        } else {
          // Fallback para legado (tentar último char se não bater prefixo, mas com cuidado)
          // Mas como o prefixo é gerado determinísticamente, melhor ignorar lixo.
        }
      });
    }, 500);
    return null;
  }

  function LocalStorageSave(classValue: string) {
    const key = `PRQuestionMultipleAnswerStorageQuestion${moduleNow}${slideNow}${number}`;
    const storedData = localStorage.getItem(key);
    let existingItems = storedData ? JSON.parse(storedData) : [];

    const found = existingItems.find((item: string) => item == classValue);
    if (found) {
      existingItems = existingItems.filter((item: string) => item !== classValue);
      const updatedItems = [...existingItems];

      localStorage.setItem(key, JSON.stringify(updatedItems));
    } else {
      const updatedItems = [...existingItems, classValue];

      localStorage.setItem(key, JSON.stringify(updatedItems));
    }
  }
};

interface QuestionMultipleAnswerProps {
  number: number;
  indicator: number;
  correctAnswer: Array<number>;
  text?: Array<any>;
  answersContent: Array<string>;
  feedbackArray: Array<string>;
  children?: React.ReactNode;
  slideNow: number;
  moduleNow: number;
  maxSelections: number;
}

export default QuestionMultipleAnswer;
