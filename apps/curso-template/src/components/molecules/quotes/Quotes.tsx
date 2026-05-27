import icon_blue from "../../../assets/quotes/quotesBlue.svg";
import icon_green from "../../../assets/quotes/quotesGreen.svg";
import icon_orange from "../../../assets/quotes/quotesOrange.svg";
import icon_pink from "../../../assets/quotes/quotesPink.svg";

interface QuotesProps {
  children?: React.ReactNode;
  type?: "blue" | "green" | "orange" | "pink";
  width?: number;
}

const quotesType: Record<"blue" | "green" | "orange" | "pink", string> = {
  blue: icon_blue,
  green: icon_green,
  orange: icon_orange,
  pink: icon_pink,
};

const Quotes: React.FC<QuotesProps> = ({ children, type = "blue", width }) => {
  const selectedIcon = quotesType[type];

  return (
    <div className="flex flex-col items-end gap-6 mx-auto">
      <div
        className="pl-10 text-[22px] flex items-start gap-5"
        style={{ width: width ? `${width}%` : "100%" }}
      >
        <img src={selectedIcon} alt="" className="object-contain" width={100} />
        <div className="w-full text-left">{children}</div>
      </div>
    </div>
  );
};

export default Quotes;
