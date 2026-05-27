import Layout from "../../templates/layout/Layout";

const IndentCitationTitle: React.FC<{
  children?: React.ReactNode;
  title?: string;
  borderColor?: string;
  backgroundColor?: string;
}> = ({ children, borderColor = "#0D4490", backgroundColor, title }) => {
  const backgroundStyle = backgroundColor ? { backgroundColor } : {};

  return (
    <div className="py-8" style={backgroundStyle}>
      <Layout>
        <div
          className="md:w-[85%] self-end max-md:ml-10 px-6"
          style={{ borderLeft: `5px solid ${borderColor}`, ...backgroundStyle }}
        >
          <p className="font-bold">{title}</p>
          <p>{children}</p>
        </div>
      </Layout>
    </div>
  );
};

export default IndentCitationTitle;
