import { useEffect, useRef } from "react";
import { useQuestionsContext } from "../../../contexts/QuestionsContext";
import "./styles.css";

const QuestionGrid: React.FC<QuestionGridProps> = ({
  moduleNow,
  slideNow,
  number,
  indicator,
  correctAnswer,
  text,
  children,
  sideOptions = [],
  topOptions = [],
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

  const userAnswer = useRef(new Array(correctAnswer.length).fill(-1));

  // Array que será utilizado para saber se as respostas estão corretas
  const answersCheckerRef = useRef(new Array(correctAnswer.length).fill(false));

  // Array que será utilizado para saber se todas as opções foram respondidas
  const questionAnsweredArrayRef = useRef(new Array(correctAnswer.length).fill(false));

  function handleInputChecked(lineNumber: number, optionNumber: number) {
    updateShowResult(false);

    LocalStorageSave({
      classname: `gridAnswer${number - 1}${lineNumber + 1}${optionNumber + 1}`,
      lineNumber: lineNumber,
      optionNumber: optionNumber,
    });

    const thisOption = document.querySelector(
      `#gridAnswer${number - 1}${lineNumber + 1}${optionNumber + 1}`
    ) as any;

    if (thisOption != null) {
      thisOption.checked = true;
    }

    userAnswer.current[lineNumber] = optionNumber;

    if (optionNumber + 1 === correctAnswer[lineNumber]) {
      answersCheckerRef.current[lineNumber] = true;
    } else {
      answersCheckerRef.current[lineNumber] = false;
    }

    questionAnsweredArrayRef.current[lineNumber] = true;

    const allCorrect = answersCheckerRef.current.filter((item) => item === true);

    if (allCorrect.length === correctAnswer.length) {
      // Se as alternativas marcadas estão corretas, vamos adicionar a questão ao context
      const auxArray = [...questionArray];
      const found = auxArray.find((tag) => tag === `${number}`);
      if (found === undefined) {
        // Esse if é para evitar que a questão seja adicionada mais de uma vez ao context
        auxArray.push(`${number}`);
        updateArray(auxArray);
      }
    } else {
      // Se alguma alternativa marcada está errada, vamos remover a questão ao context
      const auxArray = questionArray.filter((tag) => tag !== `${number}`);
      updateArray(auxArray);
    }

    const allMarked = questionAnsweredArrayRef.current.filter((item) => item === true);

    if (allMarked.length === correctAnswer.length) {
      // Atualiza o array de questões respondidas para o pagination identificar que essa questão está respondida
      const auxQuestionAnsweredArray = [...questionAnsweredArray];
      auxQuestionAnsweredArray[number - 1] = true;
      updateQuestionAnsweredArray(auxQuestionAnsweredArray);
    }
  }

  useEffect(() => {
    if (useEffectFlag.current === 0) LocalStorageLoad();

    useEffectFlag.current = 1;

    if (showResult) {
      answersCheckerRef.current.forEach((answer, index) => {
        if (answer) {
          const chosenAnswer = document.querySelector(
            `#gridAnswerBackground${number - 1}${index + 1}${correctAnswer[index]}`
          ) as HTMLElement;

          const lineBlocks = document.querySelectorAll(
            `.questionGrid-line${number - 1}${index + 1}`
          );

          if (chosenAnswer) {
            chosenAnswer.classList.add("correctOptionBackground-questionGrid");
          }

          lineBlocks.forEach((block) => {
            block.classList.add("correctOptionBackground-questionGrid");
          });
        } else {
          const chosenAnswer = document.querySelector(
            `#gridAnswerBackground${number - 1}${index + 1}${userAnswer.current[index] + 1}`
          ) as HTMLElement;

          const lineBlocks = document.querySelectorAll(
            `.questionGrid-line${number - 1}${index + 1}`
          );

          if (chosenAnswer) {
            chosenAnswer.classList.add("incorrectOptionBackground-questionGrid");
          }

          lineBlocks.forEach((block) => {
            block.classList.add("incorrectOptionBackground-questionGrid");
          });
        }
      });

      const options = document.querySelectorAll(
        `.gridAnswer${number - 1}`
      ) as NodeListOf<HTMLElement>;

      options.forEach((option: HTMLElement) => {
        option.style.pointerEvents = "none";
        option.style.cursor = "default";
      });
    } else {
      const answers = document.querySelectorAll(`.gridAnswer${number - 1}`) as any;

      answers.forEach((answer: HTMLElement) => {
        const parent = answer.parentNode as any;
        if (parent) {
          parent.classList.remove("correctOptionBackground-questionGrid");
          parent.classList.remove("incorrectOptionBackground-questionGrid");
        }
        answer.style.pointerEvents = "auto";
        answer.style.cursor = "pointer";
      });

      sideOptions.forEach((option, index) => {
        const lineBlocks = document.querySelectorAll(`.questionGrid-line${number - 1}${index + 1}`);
        lineBlocks.forEach((block) => {
          block.classList.remove("incorrectOptionBackground-questionGrid");
          block.classList.remove("correctOptionBackground-questionGrid");
        });
      });
    }
  });

  return (
    <div className="question-main">
      <div className="question mt-3">
        <div className="question-titleAndAdvice">
          {indicator && <h4 className="question-title text-title-2">Questão {indicator}</h4>}
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
            É preciso que você marque alguma alternativa!
          </p>
          <div className="questionGrid-gridDiv overflow-x-scroll xl:overflow-x-hidden">
            <div></div>
            {topOptions.map((topOption) => {
              return <p className="text-center md:w-[251px] px-5">{topOption}</p>;
            })}
            {sideOptions.map((sideOption, index) => {
              return (
                <>
                  <p className={`p-4 rounded-l-xl questionGrid-line${number - 1}${index + 1}`}>
                    {sideOption}
                  </p>
                  {topOptions.map((item, subIndex) => {
                    return (
                      <div
                        className={`flex items-center justify-center questionGrid-line${
                          number - 1
                        }${index + 1} ${subIndex + 1 == topOptions.length ? "rounded-r-xl" : ""}`}
                        id={`gridAnswerBackground${number - 1}${index + 1}${subIndex + 1}`}
                      >
                        <input
                          type="radio"
                          id={`gridAnswer${number - 1}${index + 1}${subIndex + 1}`}
                          value={`gridAnswer${number - 1}${index + 1}${subIndex + 1}`}
                          name={`questionGridAnswer${number - 1}${index + 1}`}
                          className={`gridAnswer${number - 1}`}
                          onClick={() => handleInputChecked(index, subIndex)}
                        />
                      </div>
                    );
                  })}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );

  // Funções de salvamento no LocalStorage

  function LocalStorageLoad() {
    setTimeout(() => {
      const storedData = localStorage.getItem(
        `PRQuestionGridStorageQuestion${moduleNow}${slideNow}`
      );
      const chosenAnswers = storedData ? JSON.parse(storedData) : [];

      chosenAnswers.forEach((chosenAnswer: any) => {
        handleInputChecked(chosenAnswer.lineNumber, chosenAnswer.optionNumber);
      });
    }, 10);
    return null;
  }

  function LocalStorageSave(chosenAnswer: {
    classname: string;
    lineNumber: number;
    optionNumber: number;
  }) {
    const key = `PRQuestionGridStorageQuestion${moduleNow}${slideNow}`;
    const storedData = localStorage.getItem(key);
    let existingItems = storedData ? JSON.parse(storedData) : [];

    existingItems = existingItems.filter(
      (item: { classname: string; lineNumber: number; optionNumber: number }) =>
        item.classname !== chosenAnswer.classname
    );

    const updatedItems = [...existingItems, chosenAnswer];

    localStorage.setItem(key, JSON.stringify(updatedItems));
  }
};

interface QuestionGridProps {
  slideNow: number;
  moduleNow: number;
  number: number;
  indicator: number;
  correctAnswer: Array<number>;
  text?: Array<any>;
  children?: React.ReactNode;
  sideOptions: Array<string>;
  topOptions: Array<string>;
}

export default QuestionGrid;
