import icon from '../../../assets/exclamation/icon.svg';

const Exclamation: React.FC<ExclamationProps> = ({ title, children, link }) => {
  return (
    <div className="flex flex-col items-center gap-6">
      <h3 className="w-full">{title}</h3>
      <div className="w-full max-w-[1066px] flex items-center justify-start gap-5">
        <img src={icon} alt="" />
        <p>
          {children} <div className="mb-2.5"></div>
          <a className="" href={link} target="_blank" rel="noreferrer">
            Baixe aqui
          </a>
        </p>
      </div>
    </div>
  );
};


interface ExclamationProps {
  title?: string;
  children?: React.ReactNode;
  link?: string;
}

export default Exclamation;
