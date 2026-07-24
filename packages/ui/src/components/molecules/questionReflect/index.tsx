import React from "react";
import Cloud from "./assets/cloud.svg";
import CabecaSetas from "./assets/cabeca-setas.svg";

export interface QuestionReflectProps {
  children?: React.ReactNode;
  title: string;
  variant?: "default" | "cloud";
}

export const QuestionReflect: React.FC<QuestionReflectProps> = ({
  children,
  title,
  variant = "default",
}) => {
  const isCloudVariant = variant === "cloud";
  const Icon = isCloudVariant ? Cloud : CabecaSetas;
  const titleBg = isCloudVariant ? "bg-[#54C8CA]" : "bg-[#FCD49C]";
  const contentBg = isCloudVariant ? "bg-[#E4FEFF]" : "bg-[#FFEDB8]";

  return (
    <div className="relative max-w-[375px] sm:max-w-[1200px] mx-auto rounded-3xl overflow-hidden">
      <Icon
        aria-hidden="true"
        className="absolute max-w-[70px] right-[-3px] top-1 sm:right-[-10px] sm:top-1 sm:max-w-[168px] pointer-events-none select-none"
      />
      <div className={`${titleBg} h-10 sm:h-16 flex items-center px-5 sm:px-10`}>
        <h5 className="text-sm sm:text-2xl">{title}</h5>
      </div>
      <div className={`${contentBg} px-5 sm:pr-40 py-5`}>{children}</div>
    </div>
  );
};
