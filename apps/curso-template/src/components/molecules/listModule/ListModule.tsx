import Layout from "../../templates/layout/Layout";

const ListModule: React.FC<{
  borderColor?: string;
  title?: string;
  subtitle?: string;
  textList?: string[];
}> = ({ borderColor = "#0D4490", title, subtitle, textList }) => {
  return (
    <Layout>
      <div
        style={{
          borderColor,
          borderLeftWidth: "3.5px",
          borderLeftStyle: "solid",
          paddingLeft: "0.8rem",
        }}
      >
        <div className="">
          <span className="font-bold">
            {title && (
              <p>
                <span className="text-[#0D4490] font-bold text-md">{title}</span> | {subtitle}
              </p>
            )}
          </span>
        </div>
        <div>
          <ul className="list-[circle] pl-5 marker:text-[#0D4490]">
            {textList &&
              textList.map((text, index) => (
                <li key={index} className="mb-2 col">
                  {text}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default ListModule;
