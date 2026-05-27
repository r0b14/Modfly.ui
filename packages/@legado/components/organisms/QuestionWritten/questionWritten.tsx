import { useEffect, useRef, useState } from "react";
import { useQuestionsContext } from "contexts/QuestionsContext";
import "./styles.css";

interface QuestionWrittenProps {
  number: number;
  indicator: number;
  correctAnswer: Array<string>;
  numberQuestion?: Array<any>;
  text?: Array<any>;
  answersContent: Array<string>;
  feedbackContent?: Array<string>; // [0] = feedback para resposta correta, [1] = feedback para resposta incorreta
  children?: React.ReactNode;
  slideNow: number;
  moduleNow: number;
}

export const QuestionWritten: React.FC<QuestionWrittenProps> = ({
  number,
  indicator,
  numberQuestion,
  text,
  children,
  correctAnswer = [],
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
    feedbackShow,
  } = useQuestionsContext();

  const useEffectFlag = useRef(0);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});

  function handleInputChange(value: string, inputIndex: number) {
    updateShowResult(false);

    // Converte para lowercase antes de processar
    const normalizedValue = value.toLowerCase();

    // Atualiza o estado local
    const newAnswers = { ...userAnswers, [inputIndex]: normalizedValue };
    setUserAnswers(newAnswers);

    // Salva no LocalStorage
    LocalStorageSave({
      inputIndex,
      value: normalizedValue,
    });

    // Verifica se todas as respostas estão corretas
    checkAllAnswers(newAnswers);
  }

  function checkAllAnswers(answers: { [key: number]: string }) {
    // Verifica se todos os campos foram preenchidos
    const allFilled = correctAnswer.every(
      (_, index) => answers[index] && answers[index].trim() !== ""
    );

    if (!allFilled) {
      // Remove a questão do array se não estiver completa
      let auxArray = questionArray.filter((tag) => tag !== `${number}`);
      updateArray(auxArray);
      return;
    }

    // Verifica se todas as respostas estão corretas (case-insensitive e trim)
    const allCorrect = correctAnswer.every((correctAns, index) => {
      const userAns = answers[index] || "";
      return (
        userAns.trim().toLowerCase() === correctAns.trim().toLowerCase()
      );
    });

    if (allCorrect) {
      // Adiciona a questão ao context se todas estiverem corretas
      const auxArray = [...questionArray];
      const found = auxArray.find((tag) => tag === `${number}`);
      if (found === undefined) {
        auxArray.push(`${number}`);
        updateArray(auxArray);
      }
    } else {
      // Remove a questão do context se alguma estiver errada
      const auxArray = questionArray.filter((tag) => tag !== `${number}`);
      updateArray(auxArray);
    }

    // Marca a questão como respondida
    const auxQuestionAnsweredArray = [...questionAnsweredArray];
    auxQuestionAnsweredArray[number - 1] = true;
    updateQuestionAnsweredArray(auxQuestionAnsweredArray);
  }

  useEffect(() => {
    const auxNumber = number;
    if (useEffectFlag.current === 0) LocalStorageLoad(auxNumber);

    useEffectFlag.current = 1;

    if (showResult) {
      // Aplica classes de feedback visual aos inputs
      correctAnswer.forEach((_, index) => {
        const input = document.querySelector(
          `#writtenAnswer${number}${index}`
        ) as HTMLInputElement;

        if (input) {
          const userAnswer = userAnswers[index] || "";
          const isCorrect =
            userAnswer.trim().toLowerCase() ===
            correctAnswer[index].trim().toLowerCase();

          input.classList.remove("iddleInputAnswer", "incorrectInputAnswer");
          input.classList.add(
            isCorrect ? "correctInputAnswer" : "incorrectInputAnswer"
          );
        }
      });
    } else {
      // Remove as classes de feedback quando não estiver mostrando resultado
      correctAnswer.forEach((_, index) => {
        const input = document.querySelector(
          `#writtenAnswer${number}${index}`
        ) as HTMLInputElement;

        if (input) {
          input.classList.remove("correctInputAnswer", "incorrectInputAnswer");
          input.classList.add("iddleInputAnswer");
        }
      });
    }
  }, [
    showResult,
    feedbackShow,
    number,
    correctAnswer,
    moduleNow,
    slideNow,
    questionArray,
    updateArray,
    questionAnsweredArray,
    updateQuestionAnsweredArray,
    updateShowResult,
    userAnswers,
  ]);

  // Renderiza o componente de input
  const renderInput = (index: number) => {
    const isCorrect =
      (userAnswers[index] || "").trim().toLowerCase() ===
      correctAnswer[index].trim().toLowerCase();

    return (
      <input
        key={index}
        type="text"
        id={`writtenAnswer${number}${index}`}
        className={`writtenInput text-center text-paragraph-normal p-2 rounded-lg iddleInputAnswer bg-[#ECF3FB] text-gray-600 ${
          showResult || feedbackShow ? "pointer-events-none" : ""
        }`}
        style={{
          width: `${Math.max(147, (userAnswers[index]?.length || 0) * 12 + 40)}px`,
          height: "41px",
          minWidth: "147px",
          maxWidth: "500px",
          border: "none",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
        value={userAnswers[index] || ""}
        onChange={(e) => handleInputChange(e.target.value, index)}
        placeholder="..."
        disabled={showResult || feedbackShow}
      />
    );
  };

  return (
    <div
      className={`question-main ${showResult || feedbackShow ? "pointer-events-none" : ""}`}
    >
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

        <div className="answersDiv mt-8">
          <p
            id={`noAnswerMarkedAdvice${number - 1}`}
            style={{
              display: "none",
              fontSize: "21px",
              color: "rgb(255, 255, 255)",
              backgroundColor: "rgba(255, 83, 83, 0.815)",
              borderRadius: "20px",
              padding: "10px 20px",
              transition: "all .3s",
              animation: "blink 4s",
              animationIterationCount: "3",
            }}
          >
            É preciso que você preencha todos os campos!
          </p>

          {/* Área de preenchimento com inputs inline */}
          <div className="written-answer-area pt-5">
            <p className="written-content-line flex flex-wrap items-center">
              {answersContent.map((content, index) => {
                return (
                  <>
                    <span
                      key={`text-${index}`}
                      className="inline"
                      dangerouslySetInnerHTML={{
                        __html: sanitizeHTML(String(content)),
                      }}
                    />
                    {/* Renderiza o input correspondente */}
                    {correctAnswer[index] !== undefined && renderInput(index)}
                  </>
                );
              })}
            </p>
            
            {/* Feedbacks abaixo da linha de texto */}
            {(showResult || feedbackShow) && (
              <div className="feedback-container mt-6">
                {(() => {
                  // Verifica se TODAS as respostas estão corretas
                  const allCorrect = correctAnswer.every((correctAns, index) => {
                    const userAns = userAnswers[index] || "";
                    return userAns.trim().toLowerCase() === correctAns.trim().toLowerCase();
                  });
                  
                  // feedbackContent possui 2 índices: [0] para correto, [1] para incorreto
                  const feedbackIndex = allCorrect ? 0 : 1;
                  const feedbackText = feedbackContent[feedbackIndex];
                  
                  return feedbackText ? (
                    <div
                      className={`feedback-inline px-8 py-3 rounded-lg ${
                        allCorrect
                          ? "bg-[#93EABA] border border-black"
                          : "bg-[#FFF394] border border-black"
                      }`}
                    >
                      <span
                        dangerouslySetInnerHTML={{
                          __html: sanitizeHTML(String(feedbackText)),
                        }}
                      />
                    </div>
                  ) : null;
                })()}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  // Funções de salvamento na API genérica

  // Sanitiza HTML antes de inserir com dangerouslySetInnerHTML
  function sanitizeHTML(dirty: string) {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(dirty, "text/html");

      // Remover elementos perigosos
      const forbidden = doc.querySelectorAll("script, iframe, object, embed");
      forbidden.forEach((n) => n.remove());

      // Remover atributos event handlers e javascript: nos atributos
      const all = doc.querySelectorAll("*");
      all.forEach((el) => {
        Array.from(el.attributes).forEach((attr) => {
          const name = attr.name.toLowerCase();
          const value = String(attr.value || "");
          if (name.startsWith("on") || /javascript:\s*/i.test(value)) {
            el.removeAttribute(attr.name);
          }
        });
      });

      return doc.body.innerHTML;
    } catch (e) {
      // fallback: escapa o HTML básico
      return String(dirty)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/'/g, "&#039;");
    }
  }

  async function LocalStorageLoad(auxNumber: number) {
    let savedAnswers: Array<any> = [];
    let API = new window.BridgeRestApi();
    let result;

    setTimeout(async () => {
      try {
        let promise = API.obterDadosGenericos(
          `QuestionWrittenStorage${moduleNow}${slideNow}${auxNumber}`
        );
        result = await promise;

        if (JSON.parse(result.data[0].valor) !== "void") {
          savedAnswers = JSON.parse(result.data[0].valor);
        }
      } catch (error) {
        console.error("Erro ao obter dados genéricos:", error);
      }

      if (savedAnswers.length > 0) {
        const loadedAnswers: { [key: number]: string } = {};
        savedAnswers.forEach((item: any) => {
          loadedAnswers[item.inputIndex] = item.value;

          const input = document.querySelector(
            `#writtenAnswer${auxNumber}${item.inputIndex}`
          ) as HTMLInputElement;
          if (input) {
            input.value = item.value;
          }
        });

        setUserAnswers(loadedAnswers);
        checkAllAnswers(loadedAnswers);
      }
    }, 10);
    return null;
  }

  async function LocalStorageSave(answerData: {
    inputIndex: number;
    value: string;
  }) {
    const key = `QuestionWrittenStorage${moduleNow}${slideNow}${number}`;
    let existingItems: Array<any> = [];

    let API = new window.BridgeRestApi();
    let result;

    try {
      let promise = API.obterDadosGenericos(key);
      result = await promise;

      if (JSON.parse(result.data[0].valor) !== "void") {
        existingItems = JSON.parse(result.data[0].valor);
      }
    } catch (error) {
      console.error("Erro ao obter dados genéricos:", error);
    }

    // Remove o item existente com o mesmo inputIndex
    existingItems = existingItems.filter(
      (item: any) => item.inputIndex !== answerData.inputIndex
    );

    const updatedItems = [...existingItems, answerData];

    API.registrarDadosGenericos(key, JSON.stringify(updatedItems));
  }
};