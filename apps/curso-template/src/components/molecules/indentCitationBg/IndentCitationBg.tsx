import imgbg1 from "../../../assets/citation/indent/ImgBg1.jpg";
import imgbg2 from "../../../assets/citation/indent/ImgBg2.jpg";
import img1 from "../../../assets/citation/indent/img1.png";
import img2 from "../../../assets/citation/indent/img2.png";
import Layout from "../../templates/layout/Layout";

const IndentCitationBg: React.FC<{
  children?: React.ReactNode;
  backgroundColor?: string;
  title?: string;
  text?: any;
  option?: string;
}> = ({ children, backgroundColor = "#BAE3F3", title, text, option = "yellow" }) => {
  let bgImage;
  let mainImage;

  if (option === "yellow") {
    bgImage = imgbg1;
    mainImage = img1;
  } else if (option === "pink") {
    bgImage = imgbg2;
    mainImage = img2;
  }

  const divStyle = {
    backgroundColor,
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="mb-10 py-5" style={divStyle}>
      <Layout>
        <span
          className={`w-full ${option === "yellow" ? "text-[#333333]" : "text-[#742B0B]"} mb-5`}
        >
          {title && <h4>{title}</h4>}
        </span>
        <div className="flex flex-row gap-5 max-md:gap-2 items-center w-full max-md:items-start">
          {mainImage && (
            <img
              className="max-md:max-w-[80px] max-w-[100px]"
              src={mainImage}
              alt={title || "Image"}
            />
          )}
          <p className={`max-md:border-l-2 max-md:border-[#742B0B] max-md:pl-2`}>{text}</p>
        </div>
        <p className="mt-5">{children}</p>
      </Layout>
    </div>
  );
};

export default IndentCitationBg;
