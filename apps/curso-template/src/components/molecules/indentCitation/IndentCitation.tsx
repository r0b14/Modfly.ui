import Layout from '../../templates/layout/Layout';

const IndentCitation: React.FC<{
  children?: React.ReactNode;
  borderColor?: string;
  backgroundColor?: string;
}> = ({ children, borderColor = '#0D4490', backgroundColor }) => {
  const backgroundStyle = backgroundColor ? { backgroundColor } : {};

  
  return (
    <div className="py-8 sm:pl-[3rem] md:pl-[5rem]" style={backgroundStyle}>
      <Layout>
        <div
          className="md:w-[85%] self-end max-md:ml-10 px-6"
          style={{ borderLeft: `5px solid ${borderColor}`, ...backgroundStyle }}
        >
          <p>{children}</p>
        </div>
      </Layout>
    </div>
  );
};

export default IndentCitation;
