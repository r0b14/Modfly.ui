import React from "react";

export interface QuestionOptionHeaderProps {
  questionNumber?: number;
  text: string[];
  answersContent: string[];
  groupIndex: number;
}

export const QuestionOptionHeader: React.FC<QuestionOptionHeaderProps> = ({
  questionNumber,
  text,
  answersContent,
  groupIndex,
}) => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-start gap-5">
        {questionNumber !== undefined && (
          <h2 className="text-[#513a56] text-2xl font-semibold">
            Questão {questionNumber}
          </h2>
        )}
        <div>
          {text.map((paragraph, index) => (
            <p key={index} className="text-black">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <div className="mt-5">
        <div className="flex flex-wrap justify-center gap-4 mb-5 mt-5">
          {answersContent.map((answer, index) => (
            <p
              key={`option${groupIndex}${index + 1}`}
              className="flex items-center justify-center text-center px-3 py-5 bg-white border border-[#6F310E] rounded-lg transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
            >
              {answer}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
