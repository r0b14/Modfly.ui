import { useEffect, useRef, useState } from "react";
import { useQuestionsContext } from "../../../contexts/QuestionsContext";
import "./styles.css";

const QuestionOneAnswerNormal: React.FC<QuestionOneAnswerNormalProps> = ({
  number,
  text,
  children,
  correctAnswer,
  answersContent = [],
  moduleNow,
  slideNow,
  sendButtonNumber = 1,
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

  const [userAnswer, setUserAnswer] = useState<number>();
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  function handleInputChecked(answerMarked: number) {
    updateShowResult(false);

    LocalStorageSave(`answer${number - 1}${answerMarked}`);

    setUserAnswer(answerMarked);

    const thisInput = document.querySelector(
      `#answer${number - 1}${answerMarked}`
    ) as HTMLInputElement;

    const answerDivs = document.querySelectorAll(
      `.answer-oneAnswer${number}`
    ) as NodeListOf<HTMLElement>;

    if (thisInput != null) {
      thisInput.checked = true;
    }

    const answers = document.querySelectorAll(`.answerBackground${number - 1}`);
    answers.forEach((answer) => {
      answer.classList.remove("correctAnswer");
      answer.classList.remove("incorrectAnswer");
      answer.classList.remove("markedAnswer");
      answer.classList.add("iddleAnswer");
    });

    // Remover .markedAnswer de todas as alternativas
    answerDivs.forEach((element: HTMLElement) => {
      element.classList.remove("iddleAnswer", "correctAnswer", "incorrectAnswer", "markedAnswer");
    });

    // Adicionar .markedAnswer à alternativa clicada
    const selectedAnswerDiv = document.querySelector(
      `#answerBackground${number - 1}${answerMarked}`
    ) as HTMLElement;

    if (selectedAnswerDiv) {
      selectedAnswerDiv.classList.add("markedAnswer");
    }

    if (answerMarked === correctAnswer) {
      const auxArray = [...questionArray];
      const found = auxArray.find((tag) => tag === `${number}`);

      if (found === undefined) {
        auxArray.push(`${number}`);
        updateArray(auxArray);
      }
    } else {
      const auxArray = questionArray.filter((tag) => tag !== `${number}`);
      updateArray(auxArray);
    }

    const auxQuestionAnsweredArray = [...questionAnsweredArray];
    auxQuestionAnsweredArray[number - 1] = true;
    updateQuestionAnsweredArray(auxQuestionAnsweredArray);
  }

  useEffect(() => {
    const auxNumber = number;
    if (useEffectFlag.current === 0) LocalStorageLoad(auxNumber);

    useEffectFlag.current = 1;

    // Recupera o número de erros e determina se deve mostrar o resultado
    let auxShowResult = false;
    let auxErrors = localStorage.getItem(
      `errorsPR_M${moduleNow - 1}_S${slideNow}_${sendButtonNumber}`
    );

    if (auxErrors != null) {
      if (JSON.parse(auxErrors) >= 3) {
        auxShowResult = true;
      }
    }

    // Verifica se deve mostrar o resultado
    if (true) {
      const answer = document.querySelector(
        `#answerBackground${number - 1}${userAnswer}`
      ) as HTMLElement;

      const inputAnswer = document.querySelector(
        `#answer${number - 1}${userAnswer}`
      ) as HTMLElement;

      if (answer && inputAnswer) {
        if (userAnswer === correctAnswer) {
          answer.classList.remove("iddleAnswer");
          answer.classList.add("correctAnswer");

          inputAnswer.classList.add("correctInputAnswer");
          inputAnswer.classList.add("noPointerEvents");
        } else {
          answer.classList.remove("iddleAnswer");
          answer.classList.add("incorrectAnswer");

          inputAnswer.classList.add("incorrectInputAnswer");
          inputAnswer.classList.add("noPointerEvents");
        }
      }

      // Desativa interações
      const inputAnswers = document.querySelectorAll(
        `.answerBackground${number - 1}`
      ) as NodeListOf<HTMLElement>;

      inputAnswers.forEach((inputAnswer: HTMLElement) => {
        inputAnswer.classList.add("noPointerEvents");
      });

      const divAnswers = document.querySelectorAll(
        `.answer${number - 1}`
      ) as NodeListOf<HTMLElement>;

      divAnswers.forEach((divAnswer: HTMLElement) => {
        divAnswer.style.pointerEvents = "none";
      });
    } else {
    }
  }, [number, moduleNow, slideNow, sendButtonNumber, correctAnswer, userAnswer]);

  // useEffect(() => {
  //   const auxNumber = number;
  //   if (useEffectFlag.current === 0) LocalStorageLoad(auxNumber);

  //   useEffectFlag.current = 1;

  //   let auxShowResult = false;
  //   let auxErrors = localStorage.getItem(
  //     `errorsPR_M${moduleNow - 1}_S${slideNow}_${sendButtonNumber}`
  //   );

  //   if (auxErrors != null) {
  //     if (JSON.parse(auxErrors) >= 3) {
  //       auxShowResult = true;
  //     }
  //   }

  //   if (
  //     (showResult[sendButtonNumber] === true &&
  //       showResultQuestionsNumber.find((item) => item === number) !==
  //         undefined) ||
  //     (auxShowResult === true &&
  //       showResultQuestionsNumber.find((item) => item === number) !== undefined)
  //   ) {
  //     const answer = document.querySelector(
  //       `#answerBackground${number - 1}${userAnswer}`
  //     ) as HTMLElement;

  //     const inputAnswer = document.querySelector(
  //       `#answer${number - 1}${userAnswer}`
  //     ) as HTMLElement;

  //     if (answer && inputAnswer) {
  //       if (userAnswer === correctAnswer) {
  //         answer.classList.remove("iddleAnswer");
  //         answer.classList.add("correctAnswer");

  //         inputAnswer.classList.add("correctInputAnswer");
  //         inputAnswer.classList.add("noPointerEvents");
  //       } else {
  //         answer.classList.remove("iddleAnswer");
  //         answer.classList.add("incorrectAnswer");

  //         inputAnswer.classList.add("incorrectInputAnswer");
  //         inputAnswer.classList.add("noPointerEvents");
  //       }
  //     }

  //     const inputAnswers = document.querySelectorAll(
  //       `.answerBackground${number - 1}`
  //     ) as NodeListOf<HTMLElement>;

  //     inputAnswers.forEach((inputAnswer: HTMLElement) => {
  //       inputAnswer.classList.add("noPointerEvents");
  //     });

  //     const divAnswers = document.querySelectorAll(
  //       `.answer${number - 1}`
  //     ) as NodeListOf<HTMLElement>;

  //     divAnswers.forEach((divAnswer: HTMLElement) => {
  //       divAnswer.style.pointerEvents = "none";
  //     });
  //   } else {
  //     const answers = document.querySelectorAll(
  //       `.answerBackground${number - 1}`
  //     ) as NodeListOf<HTMLElement>;

  //     const inputAnswers = document.querySelectorAll(
  //       `.answer${number - 1}`
  //     ) as NodeListOf<HTMLElement>;

  //     answers.forEach((answer: HTMLElement) => {
  //       answer.classList.remove("correctAnswer");
  //       answer.classList.remove("incorrectAnswer");
  //       answer.classList.add("iddleAnswer");
  //       answer.classList.remove("noPointerEvents");
  //       answer.style.pointerEvents = "auto";
  //     });

  //     inputAnswers.forEach((answer: HTMLElement) => {
  //       answer.classList.remove("correctInputAnswer");
  //       answer.classList.remove("incorrectInputAnswer");
  //       answer.classList.remove("noPointerEvents");
  //       answer.style.pointerEvents = "auto";
  //     });
  //   }
  // }, [showResult[sendButtonNumber], showResultQuestionsNumber]);
  return <div className="question-main">p</div>;

  // Funções de salvamento no LocalStorage

  function LocalStorageLoad(auxNumber: number) {
    setTimeout(() => {
      const storedData = localStorage.getItem(
        `PRQuestionOneAnswerNormalStorageQuestion${moduleNow}${slideNow}${number}`
      );
      const inputClasses = storedData ? JSON.parse(storedData) : [];

      inputClasses.forEach((input: any) => {
        if (input.charAt(input.length - 2) == auxNumber - 1) {
          handleInputChecked(parseInt(input.charAt(input.length - 1)));

          const inputElement = document.querySelector(`#${input}`) as any;
          if (inputElement && inputElement.parentNode) {
            inputElement.checked = true;
          }
        }
      });
    }, 10);
  }

  function LocalStorageSave(classValue: string) {
    const key = `PRQuestionOneAnswerNormalStorageQuestion${moduleNow}${slideNow}${number}`;
    const storedData = localStorage.getItem(key);
    let existingItems = storedData ? JSON.parse(storedData) : [];

    // Filtra para remover o item antigo
    existingItems = existingItems.filter(
      (item: string) => item.slice(0, -1) !== classValue.slice(0, -1)
    );

    // Adiciona o novo item
    const updatedItems = [...existingItems, classValue];

    localStorage.setItem(key, JSON.stringify(updatedItems));
  }
};

interface QuestionOneAnswerNormalProps {
  number: number;
  indicator?: number;
  correctAnswer: number;
  text?: Array<any>;
  answersContent: Array<string>;
  feedback?: string;
  children?: React.ReactNode;
  slideNow: number;
  moduleNow: number;
  sendButtonNumber?: number;
}

export default QuestionOneAnswerNormal;
