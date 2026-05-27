import cloud from "../../../assets/questionreflect/cloud.svg";
import cabeca from "../../../assets/questionreflect/cabeca-setas.svg";

const QuestionReflect: React.FC<{
  children?: React.ReactNode;
  title: string;
  model?: string;
}> = ({ children, title, model }) => {
  const isCloudModel = model === "cloud";
  const imageSrc = isCloudModel ? cloud : cabeca;
  const titleBg = isCloudModel ? "bg-[#54C8CA]" : "bg-[#FCD49C]";
  const contentBg = isCloudModel ? "bg-[#E4FEFF]" : "bg-[#FFEDB8]";

  return (
  <div className="relative max-w-[375px] sm:max-w-[1200px] mx-auto rounded-3xl overflow-hidden">
  <img
    src={imageSrc}
    alt=""
    className="absolute max-w-[70px] right-[-3px] top-1 sm:right-[-10px] sm:top-1 sm:max-w-[168px] pointer-events-none select-none"
  />
  <div className={`${titleBg} h-10 sm:h-16 flex items-center px-5 sm:px-10`}>
    <h5 className="text-sm sm:text-2xl">{title}</h5>
  </div>
  <div className={`${contentBg} px-5 sm:pr-40 py-5`}>{children}</div>
</div>
  );
};

export default QuestionReflect;
