import star from '../../assets/starList/star.png';


const textList1 = [
  {
    textBold: '1. Amplia o reconhecimento do valor da educação.',
    text: 'Um/a estudante que tem opinião e direitos respeitados e que assume responsabilidades perante colegas e comunidade escolar passa a se sentir acolhido/a dentro da escola e valoriza a educação.',
  },
  {
    textBold: '2. Promove aproximação entre o conhecimento e o/a estudante.',
    text: 'Ao se tornar ativo na construção de seu conhecimento e influenciar a maneira como aprende, o/a estudante tende a se identificar mais com o conteúdo, que ganha novos sentidos e contextos que respondem aos seus interesses e seu projeto de vida.',
  },
  {
    textBold: '3. Desenvolve habilidades para a vida.',
    text: 'A participação coloca o/a estudante em situações que envolvem trabalho em grupo, planejamento, construção de acordos e autoria de projetos. Durante o processo, que deve acontecer de maneira autêntica para resolver problemas da escola ou comunidade, os/as estudantes desenvolvem habilidades como resolução de problemas, colaboração e empatia.',
  },
  {
    textBold: '4. Melhora a autoestima e a autoconfiança.',
    text: 'A participação positiva nas instâncias de decisão dentro da escola proporciona o reconhecimento pelos/as colegas e pela equipe gestora, o que impacta na autoestima e dá autoconfiança.',
  },
  {
    textBold: '5. Amplia o respeito a individualidades.',
    text: 'A abertura ao diálogo ajuda professores/as e gestores/as a entender como os/as estudantes aprendem, bem como ter um retorno sobre suas práticas. Quando escutam e interagem com os/as estudantes, educadores/as conseguem oferecer oportunidades educativas conectadas com seu potencial, suas limitações, seus interesses e suas necessidades.',
  },
  {
    textBold: '6. Facilita a resolução de problemas.',
    text: 'Um/a estudante que tem opinião e direitos respeitados e que assume responsabilidades perante colegas e comunidade escolar passa a se sentir acolhido/a dentro da escola e valoriza a educação.',
  },
  {
    textBold: '7. Contribui para um clima escolar positivo.',
    text: 'Quando a equipe gestora compartilha com os/as estudantes a mediação de conflitos e a discussão de soluções, criam-se alternativas ao punitivismo e um ambiente propício ao bom relacionamento entre estudantes, professores/as, funcionários/as e gestores/as potencial, suas limitações, seus interesses e suas necessidades.',
  },
  {
    textBold: '8. Fortalece a democracia.',
    text: 'Ao se envolverem em processos democráticos dentro das escolas, jovens desenvolvem a cultura da participação e também se engajam em ações de transformação da sociedade.',
  },
];

const StarList: React.FC<{
  textList?: { textBold: string; text: string }[];
}> = ({ textList = textList1 }) => {
  return (
    <div className="m-5 flex-col items-center flex max-w-[1250px]">
      <div className="flex items-center mb-[-50px]  ">
        <div className="sm:sm:border-b-4 border-dashed border-[#6CA3E8] w-[12%]"></div>
        <div className="flex justify-center	items-center ml-8">
          <img
            src={star}
            alt="star"
            className="m-4 before:inline-block ml-[-35px] "
          />
          <p>
            <strong>{textList[0].textBold}</strong> {textList[0].text}
          </p>
        </div>
      </div>
      <div className="sm:border-l-4 border-dashed	border-[#6CA3E8] pt-10 pb-20">
        <div>
          <div className="flex items-center mt-10">
            <div className="flex items-center">
              <div className="sm:border-b-4 border-dashed border-[#6CA3E8] w-[14%]"></div>
              <div className="flex justify-center	items-center ml-8">
                <img
                  src={star}
                  alt="star"
                  className="m-4 before:inline-block ml-[-35px] "
                />
                <p>
                  <strong>{textList[1].textBold}</strong> {textList[1].text}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center "></div>
          <div className="flex items-center mt-10">
            <div className="sm:border-b-4 border-dashed border-[#6CA3E8] w-[17%]"></div>
            <div className="flex justify-center	items-center ml-8">
              <img
                src={star}
                alt="star"
                className="m-4 before:inline-block ml-[-35px] "
              />
              <p>
                <strong>{textList[2].textBold}</strong> {textList[2].text}
              </p>
            </div>
          </div>
          <div className="flex items-center mt-10">
            <div className="sm:border-b-4 border-dashed border-[#6CA3E8] w-[10%]"></div>
            <div className="flex justify-center	items-center ml-8">
              <img
                src={star}
                alt="star"
                className="m-4 before:inline-block ml-[-35px] "
              />
              <p>
                <strong>{textList[3].textBold}</strong> {textList[3].text}
              </p>
            </div>
          </div>
          <div className="flex items-center mt-10">
            <div className="sm:border-b-4 border-dashed border-[#6CA3E8] w-[17%]"></div>
            <div className="flex justify-center	items-center ml-8">
              <img
                src={star}
                alt="star"
                className="m-4 before:inline-block ml-[-35px] "
              />
              <p>
                <strong>{textList[4].textBold}</strong> {textList[4].text}
              </p>
            </div>
          </div>
          <div className="flex items-center mt-10">
            <div className="sm:border-b-4 border-dashed border-[#6CA3E8] w-[10%]"></div>
            <div className="flex justify-center	items-center ml-8">
              <img
                src={star}
                alt="star"
                className="m-4 before:inline-block ml-[-35px] "
              />
              <p>
                <strong>{textList[5].textBold}</strong> {textList[5].text}
              </p>
            </div>
          </div>
          <div className="flex items-center mt-10">
            <div className="sm:border-b-4 border-dashed border-[#6CA3E8] w-[15%]"></div>
            <div className="flex justify-center	items-center ml-8">
              <img
                src={star}
                alt="star"
                className="m-4 before:inline-block ml-[-35px] "
              />
              <p>
                <strong>{textList[6].textBold}</strong> {textList[6].text}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-[-52px]">
        <div className="sm:border-b-4 border-dashed border-[#6CA3E8] w-[9%] "></div>
        <div className="flex justify-center	items-center ml-8">
          <img
            src={star}
            alt="star"
            className="m-4 before:inline-block ml-[-35px] "
          />
          <p>
            <strong>{textList[7].textBold}</strong> {textList[7].text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StarList;
