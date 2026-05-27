import "./styles.css";

export const QuestionOptionHeader: React.FC<QuestionOptionHeaderProps> = ({
  indicator,
  questionOptionGroup,
  answersContent,
  text,
}) => {
  return (
    <>
   
      <div className="question-titleAndAdvice">
         {/** 
        {indicator && (
          <h2 className="question-title text-title-2">Questão {indicator}</h2>
        )}*/}
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
          id={`noAnswerMarkedAdvice${questionOptionGroup - 1}`}
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
        <div className="flex flex-wrap justify-center gap-4 mb-5 mt-5">
          {answersContent.map((text, index) => {
            return (
              <p
                key={`option${questionOptionGroup}${index + 1}`}
                id={`option${questionOptionGroup}${index + 1}`}
                className="questionOption flex items-center justify-center text-center px-3 py-5 bg-[#fff] border-[1px] border-[#6F310E] rounded-[8px] transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
              >
                {text}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};

interface QuestionOptionHeaderProps {
  indicator: number;
  text: Array<any>;
  answersContent: Array<string>;
  questionOptionGroup: number;
}
