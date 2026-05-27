import Layout from "../../templates/layout/Layout";

const IndentCitationImg: React.FC<{
  children?: React.ReactNode;
  backgroundColor?: string;
  title?: string;
  imageSrc?: string;
  text?: React.ReactNode;
  align?: string;
  borderColor?: string;
}> = ({
  children,
  backgroundColor = "#BAE3F3",
  title,
  imageSrc,
  borderColor = "#549d90",
  text,
  align = "items-center",
}) => {
  return (
    <div className="mb-10 py-5" style={{ backgroundColor }}>
      <Layout>
        <span className="w-full text-[#333333] mb-6">{title && <h3>{title}</h3>}</span>
        <div className={`flex flex-row gap-5 max-md:gap-2 max-md:items-start ${align}`}>
          {imageSrc && (
            <img
              src={imageSrc}
              alt={title || "Image"}
              className="max-md:max-w-[80px] max-w-[100px]"
            />
          )}
          <p className="max-md:border-l-[3px] max-md:pl-2" style={{ borderLeftColor: borderColor }}>
            {text}
          </p>
        </div>
        <p className="mt-5">{children}</p>
      </Layout>
    </div>
  );
};

export default IndentCitationImg;
