import mec from '../../../assets/logos/logo2.png';
import ufpe from '../../../assets/logos/logo3.png';
import usp from '../../../assets/logos/logo5.png';

export const Logos: React.FC = () => {
  return (
    <div className="h-max-[188px] bg-detailsFooter flex flex-col items-center py-10">
      <p className="text-white text-[20px] lg:mb-5 mb-10 font-light">Realização</p>
      <div
        className="flex xl:flex-row flex-col items-center justify-center px-4"
        style={{ gap: '33px' }}
      >
        <div
          className="flex md:flex-row flex-col items-center justify-center flex-wrap"
          style={{ gap: '33px' }}
        >
          <img src={usp} alt="" className="w-[120px] h-auto md:w-[135px] lg:w-[152px]" />

          <img src={ufpe} alt="" className="w-[130px] h-auto md:w-[160px] lg:w-[182px]" />

          <img src={mec} alt="" className="w-[130px] h-auto md:w-[150px] lg:w-[222.77px]" />
        </div>
        <div
          className="flex md:flex-row flex-col items-center justify-center"
          style={{ gap: '33px' }}
        ></div>
      </div>
    </div>
  );
};
