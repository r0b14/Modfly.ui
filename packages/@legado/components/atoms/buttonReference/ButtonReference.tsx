import plus from '../../../assets/buttons/plus.png';
import minus from '../../../assets/buttons/minus.png';

interface ButtonReferenceProps {
  moreReferences: boolean;
  setMoreReferences: (value: boolean) => void;
}

const ButtonReference: React.FC<ButtonReferenceProps> = ({
  moreReferences,
  setMoreReferences,
}) => {
  return (
    <button
      className="flex items-center justify-center mt-5 cursor-pointer shadow-md text-[20px] text-[#111] bg-[#FFAB00] hover:bg-[#EC9E00] transition-all py-3 px-8 rounded-[20px] w-full max-w-[200px]"
      onClick={() => setMoreReferences(!moreReferences)}
    > 
    
      <img
        src={moreReferences ? minus : plus}
        alt="+"
        className="mr-2 ml-[-8px] w-[24px] "
      />
      {moreReferences ? 'Ver menos' : 'Ver mais'}
    </button>
  );
};

export default ButtonReference;
