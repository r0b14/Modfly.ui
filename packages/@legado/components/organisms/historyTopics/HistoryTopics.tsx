import img1 from '../../assets/historyTopics/img1.png';
import img2 from '../../assets/historyTopics/img2.png';
import img3 from '../../assets/historyTopics/img3.png';

const HistoryTopics: React.FC<HistoryTopicsProps> = ({
  children,
  text1,
  text11,
  text2,
  text22,
  text3,
  text33,
  text333,
}) => {
  
  return (
    <div className="m-5 flex-col items-center flex max-w-[1250px] ">
      <div className="flex items-center ">
        <div className="sm:border-b-4 border-dashed border-[#6CA3E8] w-[10%]"></div>
        <div className="flex justify-center	items-center ml-8" style={{}}>
          <div></div>
          <img
            src={img1}
            alt="img1"
            className="m-4 before:block before:inline-block ml-[-35px] "
          />
          <p>
            <strong>A primeira geração,</strong> {text1}
          </p>
        </div>
      </div>
      <div
        className="sm:border-l-4 border-dashed	border-[#6CA3E8] 	
      mt-[-75px] max-[1382px]:mt-[-100px] max-[1232px]:mt-[-110px] max-[1117px]:mt-[-135px] max-[1039px]:mt-[-100px] max-[976px]:mt-[-110px] max-[901px]:mt-[-134px] pt-[75px] max-[1382px]:pt-[100px] max-[828px]:mt-[-145px] max-[768px]:mt-[-105px] max-[768px]:mt-[-120px] max-[711px]:mt-[-135px] max-[900px]:pt-[135px]  max-[640px]:mt-[-150px]  max-[607px]:mt-[-125px]  max-[576px]:mt-[-125px] max-[564px]:mt-[-135px] max-[532px]:mt-[-145px] max-[493px]:mt-[-165px] max-[463px]:mt-[-185px] max-[500px]:pt-[185px] max-[426px]:mt-[-210px]  max-[401px]:mt-[-240px] max-[401px]:pt-[260px] max-[376px]:mt-[-270px]
      mb-[-135px] pb-[150px]  max-[1395px]:mb-[-150px] max-[1395px]:pb-[150px] max-[1228px]:mb-[-170px]  max-[1188px]:mb-[-170px] max-[1113px]:mb-[-185px] max-[1039px]:mb-[-150px] max-[1012px]:mb-[-170px] max-[972px]:mb-[-165px] max-[897px]:mb-[-185px] max-[897px]:pb-[185px] max-[801px]:mb-[-200px] max-[801px]:pb-[200px] max-[768px]:mb-[-170px] max-[739px]:mb-[-186px] max-[699px]:mb-[-175px] max-[660px]:mb-[-195px] max-[621px]:mb-[-210px] max-[576px]:mb-[-170px] max-[531px]:mb-[-180px] max-[462px]:mb-[-235px] max-[462px]:pb-[235px]
      max-[400px]:mb-[-280px] max-[400px]:pb-[280px] max-[1395px]:pb-[180px]"
      >
        <div className="flex items-center">
          <div className="sm:border-b-4 border-dashed border-[#6CA3E8] w-[70%] mt-10"></div>
          <div className="flex justify-center	items-center border-2 border-[#FAB641] border-solid  rounded-2xl	p-4 mt-10">
            <span className="w-[64px] min-w-16	 h-16 bg-[#FAB641]	rounded-full mr-4 ml-[-12%]"></span>
            <p className="w-[90%]"> {text11}</p>
          </div>
        </div>

        <div className="flex items-center mt-10">
          <div className="sm:border-b-4 border-dashed border-[#6CA3E8] w-[10%]"></div>
          <div className="flex justify-center	items-center ml-8">
            <img
              src={img2}
              alt="img2"
              className="m-4 before:block before:inline-block ml-[-35px] "
            />
            <p>
              <strong>A segunda geração,</strong> {text2}
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="sm:border-b-4 border-dashed border-[#6CA3E8] w-[69%] mt-10"></div>
          <div className="flex justify-center	items-center border-2 border-[#FA7765] border-solid  rounded-2xl	p-4 mt-10">
            <span className="w-[64px] min-w-16	 h-16 bg-[#FA7765]	rounded-full mr-4 ml-[-12%]"></span>
            <p className="w-[90%]"> {text22}</p>
          </div>
        </div>
        <div className="flex items-center mt-10">
          <div className="sm:border-b-4 border-dashed border-[#6CA3E8] w-[10%]"></div>
          <div className="flex justify-center	items-center ml-8">
            <img
              src={img3}
              alt="img3"
              className="m-4 before:block before:inline-block ml-[-35px] "
            />
            <p>
              <strong>A terceira geração,</strong> {text3}
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="sm:border-b-4 border-dashed border-[#6CA3E8] w-[60%] mt-10"></div>
          <div className="flex justify-center	items-center border-2 border-[#6CA3E8] border-solid  rounded-2xl	p-4 mt-10">
            <span className="w-[64px] min-w-16	 h-16 bg-[#6CA3E8]	rounded-full mr-4 ml-[-12%]"></span>
            <p className="w-[90%]"> {text33}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="sm:border-b-4 border-dashed border-[#6CA3E8] w-[55%] mt-10"></div>
        <div className="flex justify-center	items-center border-2 border-[#6CA3E8] border-solid  rounded-2xl	p-4 mt-10">
          <span className="w-[64px] min-w-16	 h-16 bg-[#6CA3E8]	rounded-full mr-4 ml-[-12%]"></span>
          <p className="w-[90%]"> {text333}</p>
        </div>
      </div>
    </div>
  );
};

interface HistoryTopicsProps {
  children?: React.ReactNode;
  text1: string;
  text11: string;
  text2: string;
  text22: string;
  text3: string;
  text33: string;
  text333: string;
}

export default HistoryTopics;
// O exemplo já no formato do slide 3 do mod 2 ( só importar e colar no slide)

// <HistoryTopics text1="contemporânea das revoluções do final do século XVIII e de todo o século XIX, incluindo a Revolução Americana, de 1776. e a Revoluação Francesa, de 1789 tem como marco histórico a Declaração dos Direitos do Homem e do Cidadão, de 1789, e como elemento principal a ideia de liberdade individual; concentrada nos direitos civis e políticos inerentes ao ser humano e oponíveis ao Estado, visto na época das monarquias absolutas como grande opressor das liberdades individuais."
//     text11="Direitos civis ou individuais são prerrogativas que protegem a integridade humana (proteção à integridade física, psíquica e moral) contra o abuso de poder ou qualquer outra forma de arbitrariedade estatal. Exemplos de direitos civis são: direito à vida, segurança, presunção de inocência, liberdade de locomoção, entre outros. Ao passo que os denominados direitos políticos são aqueles que garantem a participação dos indivíduos na sociedade, passando pelo direito ao voto, a ser votado, a ocupar cargos ou funções políticas e, por fim, a permanecer nesses cargos."
//     text2="A segunda geração, seguindo a lógica em que os direitos foram se estendendo, passa a não abranger mais somente os indivíduos, mas os grupos sociais. Surge no início do século XX, na esteira das lutas operárias, da Revolução Industrial e do pensamento socialista na Europa Ocidental, consolidando-se ao longo do século nas formas do Estado de Bem-Estar Social."
//     text22="Ligado ao conceito de igualdade, parte da necessidade do Estado garantir direitos e oportunidades iguais a todos os cidadãos, podendo se exigir uma atuação estatal a fim de garantir a todos os indivíduos os chamados direitos sociais, econômicos e culturais. Referem-se a esse conjunto os direitos de caráter trabalhista, como salário justo, férias, previdência e seguridade social; e os de caráter social mais geral, independentemente de vínculo empregatício, como saúde, educação, habitação, lazer, repouso, saneamento básico, entre outros."
//     text3="seguindo o caráter de complementaridade às duas primeiras, surgiu após as atrocidades provocadas pelo homem no século XX, como a passagem por duas Guerras Mundiais e a catástrofe da desumanização perpetrada por regimes totalitários, bem como o horror do Holocausto e dos campos de concentração."
//     text33="Em resposta a esses eventos, surgem os também chamados direitos dos povos e os direitos da humanidade, como o direito à paz, à comunicação, ao desenvolvimento, à autodeterminação dos povos, ao patrimônio científico, tecnológico e cultural da humanidade, ao meio ambiente ecologicamente preservado. Norteados pelo ideal de fraternidade ou solidariedade, são considerados direitos coletivos por excelência, pois estão voltados à humanidade como um todo."
//     text333="Embora os direitos humanos sejam assim comumente divididos, não podemos deixar de salientar outras características a eles inerentes, como a naturalidade e universalidade, por estarem profundamente ligados à essência do ser humano, independentemente de qualquer fator, e valerem para todos, além da independência e indivisibilidade, por não poderem jamais serem separados, aceitando um em detrimento de outros."
//     ></HistoryTopics>
