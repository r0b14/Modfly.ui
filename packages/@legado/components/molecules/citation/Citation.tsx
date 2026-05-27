import bookYellow from "../../../assets/citation/bookYellow.png";
import bookGreen from "../../../assets/citation/bookGreen.svg";
import Layout from "../../templates/layout/Layout";

const Citation: React.FC<{
  children?: React.ReactNode;
  backgroundColor?: string;
  title?: string;
  text?: React.ReactNode;
  option?: string;
}> = ({ children, title, text }) => {
  return (
      <div className="max-w-[914px] py-5 flex flex-col items-right ml-auto">
        <p className="w-full text-[#333333]">{title && <h3>{title}</h3>}</p>
        <div className="flex items-start align gap-5 mt-10 max-md:gap-2 max-md:items-start">
          <img src={bookGreen} alt={title || "Image"} className="max-md:max-w-[80px] max-w-[100px]" />
          <p className="max-md:pl-2 max-md:border-l-[3px] max-md:border-[#e9a9c0]">{text}</p>
        </div>
        <div className="text-right">
          <p className="mt-5">{children}</p>
        </div>
      </div>
  );
};

export default Citation;
