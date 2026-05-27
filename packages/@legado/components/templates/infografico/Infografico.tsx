import ball from '../../../assets/infografico/ball.png';
import bgText from '../../../assets/infografico/bgText.png';
import block_1_1 from '../../../assets/infografico/block_1_1.png';
import block_1_2 from '../../../assets/infografico/block_1_2.png';
import block_2_1 from '../../../assets/infografico/block_2_1.png';
import block_2_2 from '../../../assets/infografico/block_2_2.png';
import block_3_1 from '../../../assets/infografico/block_3_1.png';
import block_3_2 from '../../../assets/infografico/block_3_2.png';
import block_4_1 from '../../../assets/infografico/block_4_1.png';
import block_5_1 from '../../../assets/infografico/block_5_1.png';
import block_last_1 from '../../../assets/infografico/block_last_1.png';
import block_last_2 from '../../../assets/infografico/block_last_2.png';
import block_last_3 from '../../../assets/infografico/block_last_3.png';
import circle1 from '../../../assets/infografico/circle1.png';
import circle2 from '../../../assets/infografico/circle2.png';
import Pilar from '../../../assets/infografico/pilar.png';
import Pontilhado from '../../../assets/infografico/pontilhado.png';
import Title from '../../../assets/infografico/title.png';
import Title2 from '../../../assets/infografico/title2.png';


const Infografico: React.FC = () => {
  return (
    <div className="mx-5 max-[1000px]:w-[338px]  min-[1001px]:mt-[200px] mt-[70px] relative  ">
      <div className="flex flex-col max-[1000px]:hidden max-w-[1200px]  w-full">
        <img
          src={Pilar}
          alt=""
          className="h-[3700px]  z-[-99999] w-[22px]"
          style={{ maxWidth: 'initial' }}
        />

        {/* bloco 1 */}
        <div className="absolute top-[20px]  left-[20px]">
          <div className="relative">
            <div className="absolute " style={{ top: '-91px', left: '-133px' }}>
              <img src={block_1_1} alt="" />
            </div>

            <div
              className="absolute z-[-200] "
              style={{ top: '-148px', right: '38px' }}
            >
              <img src={block_1_2} alt="" />
            </div>

            <div className="absolute top-[0px] left-[-13px]">
              <img src={circle1} alt="" />
            </div>

            <div
              style={{
                backgroundImage: `url(${Title})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
              className="h-[62px] pl-10 w-[414px] flex items-center absolute top-[-50px] left-[-30px] z-[-100]"
            >
              <p className="font-bold text-[32px] text-[#3A3276]">Passo 1</p>
            </div>

            <div
              className="flex bg-[#3A3276]   z-[-999999] w-[450px] h-[90px] text-[#FFFFFF] px-10 py-5"
              style={{ borderRadius: '0 50px 50px 0' }}
            >
              <p className="font-bold pl-5 text-[22px]">
                Construir Compreensão e Comprometimento
              </p>
              <img
                src={Pontilhado}
                alt=""
                className="w-[110px] h-[35px] mt-2.5"
              />
            </div>
          </div>
        </div>

        <p className="absolute " style={{ top: '160px', left: '37px' }}>
          <div>
            <p
              className="text-[#3A3276] font-bold text-[24px] flex items-center justify-center mb-5 w-[424px] h-[85px]"
              style={{
                backgroundImage: `url(${bgText})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
              Educação e Sensibilização:
            </p>

            <div className="mb-2.5 flex items-baseline">
              <span className=" mt-5 w-[6%]">
                <img src={ball} alt="" />
              </span>
              <span className="w-[95%]">
                Inicie com sessões informativas para educar os membros da
                comunidade escolar sobre os princípios e benefícios da Justiça
                Restaurativa. Explique como a abordagem restaurativa difere dos
                métodos tradicionais de disciplina e resolução de conflitos.
              </span>
            </div>
            <div className="mb-2.5 flex items-baseline">
              <span className=" mt-5 w-[6%]">
                <img src={ball} alt="" />
              </span>
              <span className="w-[95%]">
                Compartilhe o material do curso, com vistas à construção do
                acervo da escola.
              </span>
            </div>
          </div>

          <div>
            <p
              className="text-[#3A3276] font-bold text-[24px] flex items-center justify-center mb-5 w-[424px] h-[85px]"
              style={{
                backgroundImage: `url(${bgText})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
              Engajamento e Diálogo:
            </p>

            <div className="mb-2.5 flex items-baseline">
              <span className=" mt-5 w-[6%]">
                <img src={ball} alt="" />
              </span>
              <span className="w-[95%]">
                Facilite discussões abertas e inclusivas com alunos,
                professores, funcionários, pais e membros da comunidade para
                compartilhar ideias e preocupações.
              </span>
            </div>
            <div className="mb-2.5 flex items-baseline">
              <span className=" mt-5 w-[6%]">
                <img src={ball} alt="" />
              </span>
              <span className="w-[95%]">
                Compartilhe o material do curso, com vistas à construção do
                acervo da escola.Estabeleça um compromisso coletivo com os
                valores de equidade, responsabilidade e reconciliação.
              </span>
            </div>
          </div>
        </p>
        {/* bloco 2 */}
        <div className="absolute top-[400px]  right-[15px]">
          <div className="relative">
            <div className="absolute " style={{ top: '-145px', left: '-46px' }}>
              <img src={block_2_1} alt="" />
            </div>

            <div
              className="absolute z-[200] "
              style={{ top: '-25px', left: '15px' }}
            >
              <img src={block_2_2} alt="" />
            </div>

            <div className="absolute top-[0px] right-[-15px]">
              <img className="h-[122px]" src={circle2} alt="" />
            </div>

            <div
              style={{
                backgroundImage: `url(${Title2})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
              className="h-[62px] pr-10 w-[414px]  flex items-center justify-end absolute top-[-50px] left-[60px] z-[-100]"
            >
              <p className="font-bold text-[32px]  text-[#3A3276]">Passo 2</p>
            </div>

            <div
              className="flex bg-[#3A3276] gap-[8rem]  z-[-999999] w-[450px] h-[100px] text-[#FFFFFF] px-10 py-5"
              style={{ borderRadius: ' 50px 0 0 50px ' }}
            >
              <img
                src={Pontilhado}
                alt=""
                className="w-[110px] h-[35px] mt-2.5"
              />
              <p className="font-bold pl-5 text-[22px]">
                Formação e Capacitação
              </p>
            </div>
          </div>
        </div>

        <p className="absolute " style={{ top: '560px', right: '37px' }}>
          <div>
            <p
              className="text-[#3A3276] font-bold text-[24px] flex items-center justify-center mb-5 w-[450px] h-[90px]"
              style={{
                backgroundImage: `url(${bgText})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
              Treinamento para Equipes Escolares:
            </p>

            <div className="mb-5 flex">
              <span className=" mt-5 w-[6%]">
                <img src={ball} alt="" />
              </span>
              <span className="w-[95%]">
                Proporcione treinamento em Justiça Restaurativa para todos,
                incluindo administradores, professores, conselheiros e equipe de
                apoio.
              </span>
            </div>
            <div className="mb-5 flex">
              <span className=" mt-5 w-[6%]">
                <img src={ball} alt="" />
              </span>
              <span className="w-[95%]">
                Certifique-se de que todos entendam os papéis e
                responsabilidades dentro de um sistema restaurativo.
              </span>
            </div>
          </div>

          <div>
            <p
              className="text-[#3A3276] text-[24px] font-bold  flex items-center justify-center mb-5 w-[450px] h-[90px]"
              style={{
                backgroundImage: `url(${bgText})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
              Capacitação em Habilidades Práticas:
            </p>

            <div className="mb-2.5 flex items-baseline">
              <span className=" mt-5 w-[6%]">
                <img src={ball} alt="" />
              </span>
              <span className="w-[95%]">
                Ofereça workshops sobre técnicas de facilitação de círculos
                restaurativos, escuta ativa, comunicação não violenta e
                mediação.
              </span>
            </div>
            <div className="mb-2.5 flex items-baseline">
              <span className=" mt-5 w-[6%]">
                <img src={ball} alt="" />
              </span>
              <span className="w-[95%]">
                Promova o desenvolvimento de habilidades de empatia, resolução
                de conflitos e tomada de decisões colaborativas.
              </span>
            </div>
          </div>
        </p>
        {/* bloco 3 */}
        <div className="absolute top-[1500px]  left-[20px]">
          <div className="relative">
            <div
              className="absolute min-[1001px]:w-[100px]"
              style={{ top: '0px', right: '-40px' }}
            >
              <img src={block_3_1} alt="" />
            </div>

            <div
              className="absolute z-[-200] "
              style={{ top: '-100px', right: '38px' }}
            >
              <img src={block_3_2} alt="" />
            </div>

            <div className="absolute top-[0px] left-[-20px]">
              <img src={circle1} alt="" />
            </div>

            <div
              style={{
                backgroundImage: `url(${Title})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
              className="h-[62px] pl-10 w-[414px] flex items-center absolute top-[-50px] left-[-30px] z-[-100]"
            >
              <p className="font-bold text-[32px] text-[#3A3276]">Passo 3</p>
            </div>

            <div
              className="flex bg-[#3A3276]  z-[-999999] w-[450px] h-[90px] text-[#FFFFFF] px-10 py-5"
              style={{ borderRadius: '0 50px 50px 0' }}
            >
              <p className="font-bold pl-5 text-[22px]">
                Estruturação e Implementação
              </p>
              <img
                src={Pontilhado}
                alt=""
                className="w-[110px] h-[35px] mt-2.5"
              />
            </div>
          </div>
        </div>

        <p className="absolute " style={{ top: '1650px', left: '37px' }}>
          <div>
            <p
              className="text-[#3A3276] font-bold text-[24px] flex items-center justify-center mb-5 w-[450px] h-[90px] pl-10 pt-5"
              style={{
                backgroundImage: `url(${bgText})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
              Desenvolvimento de Políticas e Procedimentos:
            </p>

            <div className="mb-2.5 flex items-baseline">
              <span className=" mt-5 w-[6%]">
                <img src={ball} alt="" />
              </span>
              <span className="w-[95%]">
                Colabore com a comunidade escolar para desenvolver políticas
                claras e procedimentos consistentes baseados em princípios
                restaurativos.
              </span>
            </div>
            <div className="mb-2.5 flex items-baseline">
              <span className=" mt-5 w-[6%]">
                <img src={ball} alt="" />
              </span>
              <span className="w-[95%]">
                Integre práticas de Justiça Restaurativa nos códigos de conduta
                e no planejamento curricular da escola.
              </span>
            </div>
          </div>

          <div>
            <p
              className="text-[#3A3276] font-bold text-[26px] flex items-center justify-center pl-10 pt-5 mb-5 w-[450px] h-[90px]"
              style={{
                backgroundImage: `url(${bgText})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
              Design de Programas Restaurativos:
            </p>

            <div className="mb-2.5 flex items-baseline">
              <span className=" mt-5 w-[6%]">
                <img src={ball} alt="" />
              </span>
              <span className="w-[95%]">
                Identifique áreas prioritárias para implementar os programas
                restaurativos, como a resolução de conflitos entre alunos,
                suporte emocional e reintegração após incidentes.
              </span>
            </div>
            <div className="mb-2.5 flex items-baseline">
              <span className=" mt-5 w-[6%]">
                <img src={ball} alt="" />
              </span>
              <span className="w-[95%]">
                Personalize os programas de acordo com as necessidades
                específicas e culturais da comunidade escolar.
              </span>
            </div>
          </div>
        </p>
        {/* bloco 4 */}
        <div className="absolute top-[1800px]  right-[15px]">
          <div className="relative">
            <div
              className="absolute z-[-200]"
              style={{ top: '-145px', left: '-40px' }}
            >
              <img src={block_4_1} alt="" />
            </div>

            <div className="absolute top-[0px] right-[-15px]">
              <img className="h-[122px]" src={circle2} alt="" />
            </div>

            <div
              style={{
                backgroundImage: `url(${Title2})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
              className="h-[62px] pr-10 w-[414px]  flex items-center justify-end absolute top-[-50px] left-[60px] z-[-100]"
            >
              <p className="font-bold text-[32px]  text-[#3A3276]">Passo 4</p>
            </div>

            <div
              className="flex bg-[#3A3276] gap-[3rem]  z-[-999999] w-[450px] h-[100px] text-[#FFFFFF] px-10 py-5"
              style={{ borderRadius: ' 50px 0 0 50px ' }}
            >
              <img
                src={Pontilhado}
                alt=""
                className="w-[110px] h-[35px] mt-2.5"
              />
              <p className="font-bold  text-[22px]">
                Implementação e Avaliação Contínua
              </p>
            </div>
          </div>
        </div>

        <p className="absolute " style={{ top: '1950px', right: '37px' }}>
          <div>
            <p
              className="text-[#3A3276] font-bold text-[24px] flex items-center justify-center mb-5 w-[450px] h-[90px]"
              style={{
                backgroundImage: `url(${bgText})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
              Fase Piloto e Avaliação Inicial:
            </p>

            <div className="mb-5 flex items-baseline">
              <span className=" mt-5 w-[6%]">
                <img src={ball} alt="" />
              </span>
              <span className="w-[95%]">
                Inicie com uma fase piloto para testar os programas
                restaurativos em um ambiente controlado.
              </span>
            </div>
            <div className="mb-5 flex items-baseline">
              <span className=" mt-5 w-[6%]">
                <img src={ball} alt="" />
              </span>
              <span className="w-[95%]">
                Coleta de feedback e dados para avaliar a eficácia, a aceitação
                e os impactos dos programas.
              </span>
            </div>
          </div>

          <div>
            <p
              className="text-[#3A3276] text-[26px] font-bold  flex items-center justify-center mb-5 w-[450px] h-[90px]"
              style={{
                backgroundImage: `url(${bgText})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
              Monitoramento e Ajustes:
            </p>

            <div className="mb-2.5 flex items-baseline">
              <span className=" mt-5 w-[6%]">
                <img src={ball} alt="" />
              </span>
              <span className="w-[95%]">
                Estabeleça um sistema de monitoramento contínuo para acompanhar
                a implementação e o progresso dos programas.
              </span>
            </div>
            <div className="mb-2.5 flex items-baseline">
              <span className=" mt-5 w-[6%]">
                <img src={ball} alt="" />
              </span>
              <span className="w-[95%]">
                Faça ajustes conforme necessário com base nos resultados da
                avaliação e nas necessidades emergentes da comunidade escolar.
              </span>
            </div>
          </div>
        </p>
        {/* bloco 5 */}
        <div className="absolute top-[2750px]  left-[20px]">
          <div className="relative">
            <div
              className="absolute z-[-200] "
              style={{ top: '-130px', right: '-37px' }}
            >
              <img src={block_5_1} alt="" />
            </div>

            <div className="absolute top-[0px] left-[-20px]">
              <img src={circle1} alt="" />
            </div>

            <div
              style={{
                backgroundImage: `url(${Title})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
              className="h-[62px] pl-10 w-[414px] flex items-center absolute top-[-50px] left-[-30px] z-[-100]"
            >
              <p className="font-bold text-[32px] text-[#3A3276]">Passo 5</p>
            </div>

            <div
              className="flex bg-[#3A3276]   z-[-999999] w-[450px] h-[90px] text-[#FFFFFF] px-10 py-5"
              style={{ borderRadius: '0 50px 50px 0' }}
            >
              <p className="font-bold pl-5 text-[22px]">
                Integração e Sustentabilidade
              </p>
              <img
                src={Pontilhado}
                alt=""
                className="w-[110px] h-[35px] mt-2.5"
              />
            </div>
          </div>
        </div>

        <p className="absolute " style={{ top: '2900px', left: '37px' }}>
          <div>
            <p
              className="text-[#3A3276] font-bold text-[24px] flex items-center justify-center mb-5 w-[450px] h-[90px] pl-10 pt-5"
              style={{
                backgroundImage: `url(${bgText})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
              Incorporação à Cultura Escolar:
            </p>

            <div className="mb-2.5 flex items-baseline">
              <span className=" mt-5 w-[6%]">
                <img src={ball} alt="" />
              </span>
              <span className="w-[95%]">
                Promova uma cultura escolar baseada em valores de justiça,
                respeito mútuo e responsabilidade compartilhada.
              </span>
            </div>
            <div className="mb-2.5 flex items-baseline">
              <span className=" mt-5 w-[6%]">
                <img src={ball} alt="" />
              </span>
              <span className="w-[95%]">
                Integre práticas restaurativas em atividades cotidianas, eventos
                escolares e no currículo acadêmico.
              </span>
            </div>
          </div>

          <div>
            <p
              className="text-[#3A3276] font-bold text-[26px] flex items-center justify-center pl-10 pt-5 mb-5 w-[450px] h-[90px]"
              style={{
                backgroundImage: `url(${bgText})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
              Desenvolvimento de Liderança e Engajamento Contínuo:
            </p>

            <div className="mb-2.5 flex items-baseline">
              <span className=" mt-5 w-[6%]">
                <img src={ball} alt="" />
              </span>
              <span className="w-[95%]">
                Capacite líderes estudantis e comunitários para apoiar e
                promover iniciativas restaurativas.
              </span>
            </div>
            <div className="mb-2.5 flex items-baseline">
              <span className=" mt-5 w-[6%]">
                <img src={ball} alt="" />
              </span>
              <span className="w-[95%]">
                Mantenha o engajamento da comunidade escolar através de reuniões
                regulares, grupos de trabalho e eventos educativos.
              </span>
            </div>
          </div>
        </p>
        {/* bloco last */}
        <div>
          <div
            className="absolute w-[100px] "
            style={{ top: '3694px', right: '-21px', left: '-40px' }}
          >
            <img src={block_last_1} alt="" />
          </div>
          <div
            className="bg-[#3A3276] z-[-200] left-[-200px] w-[454px] h-[90px] absolute top-[3735px] flex justify-center items-center"
            style={{ borderRadius: '50px' }}
          >
            <div className="text-[#FFFFFF] relative text-[32px]">
              <img
                src={block_last_2}
                alt=""
                className="absolute top-[-28px] left-[-80px]"
              />
              <strong> Conclusão </strong>
            </div>
          </div>
          <div
            className="w-[900px] z-[-400] flex items-center px-5 gap-10 py-[50px] rounded-[50px]  bg-[#EFC9CD] absolute"
            style={{ top: '3800px', left: '-420px' }}
          >
            <img src={block_last_3} alt="" />

            <p className="">
              Implementar a Justiça Restaurativa na escola requer um compromisso
              individual e coletivo a longo prazo, objetivando a mudança
              cultural e estrutural. Ao seguir este passo-a-passo e adaptar as
              etapas às necessidades específicas da sua escola, vocês poderão
              criar um ambiente mais positivo, inclusivo e propício ao
              desenvolvimento integral dos alunos e ao fortalecimento da
              comunidade escolar como um todo.
            </p>

            <img src={block_last_3} alt="" />
          </div>
        </div>

        {/* fim */}
      </div>

      {/* ------------------- mobile */}
      {/* -----------------------------------------------------  */}
      {/* -----------------------------------------------------  */}
      {/* -----------------------------------------------------  */}
      {/* -----------------------------------------------------  */}
      {/* -----------------------------------------------------  */}
      {/* -----------------------------------------------------  */}

      <div className="flex flex-col min-[1001px]:hidden max-w-[1200px] w-full">
        <img
          src={Pilar}
          alt=""
          className="h-[4000px] ml-[45px]  z-[-99999] w-[12px]"
          style={{ maxWidth: 'initial' }}
        />

        {/* bloco 1 */}
        <div className="absolute top-[20px]  left-[60px]">
          <div className="relative">
            <div
              className="absolute w-[58px] z-[-999999]"
              style={{ top: '-55px', left: '-73px' }}
            >
              <img src={block_1_1} alt="" />
            </div>

            <div
              className="absolute z-[-200] w-[90px]"
              style={{ top: '-76px', right: '52px' }}
            >
              <img src={block_1_2} alt="" />
            </div>

            <div className="absolute top-[0px] left-[-13px] w-[27px]">
              <img src={circle1} alt="" />
            </div>

            <div
              style={{
                backgroundImage: `url(${Title})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
              className="h-[30px] pl-10 w-[214px] flex items-center absolute top-[-27px] left-[-30px] z-[-100]"
            >
              <p className="font-bold text-[18px] text-[#3A3276]">Passo 1</p>
            </div>

            <div
              className="flex bg-[#3A3276]   z-[-999999] w-[293px] h-[45px] text-[#FFFFFF] px-2.5 "
              style={{ borderRadius: '0 50px 50px 0' }}
            >
              <span className="font-bold pl-5 text-[14px]">
                Construir Compreensão e Comprometimento
              </span>
              <img
                src={Pontilhado}
                alt=""
                className="w-[50px] h-[20px] mt-2.5 mr-2.5 "
              />
            </div>
          </div>
        </div>

        <span className="absolute " style={{ top: '90px', left: '60px' }}>
          <div>
            <p
              className="text-[#3A3276] font-bold text-[20px] flex items-center justify-center mb-5 w-[300px] h-[60px]"
              style={{
                backgroundImage: `url(${bgText})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
              Educação e Sensibilização:
            </p>

            <div className="mb-2.5 flex items-baseline">
              <span className=" mt-5 w-[30px]">
                <img src={ball} alt="" />
              </span>
              <span className="w-[270px]">
                Inicie com sessões informativas para educar os membros da
                comunidade escolar sobre os princípios e benefícios da Justiça
                Restaurativa. Explique como a abordagem restaurativa difere dos
                métodos tradicionais de disciplina e resolução de conflitos.
              </span>
            </div>
            <div className="mb-2.5 flex items-baseline">
              <span className=" mt-5 w-[30px]">
                <img src={ball} alt="" />
              </span>
              <span className="w-[270px]">
                Compartilhe o material do curso, com vistas à construção do
                acervo da escola.
              </span>
            </div>
          </div>

          <div>
            <p
              className="text-[#3A3276] font-bold text-[20px] flex items-center justify-center mb-5 w-[300px] h-[60px]"
              style={{
                backgroundImage: `url(${bgText})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
              Engajamento e Diálogo:
            </p>

            <div className="mb-2.5 flex items-baseline">
              <span className=" mt-5 w-[30px]">
                <img src={ball} alt="" />
              </span>
              <span className="w-[270px]">
                Facilite discussões abertas e inclusivas com alunos,
                professores, funcionários, pais e membros da comunidade para
                compartilhar ideias e preocupações.
              </span>
            </div>
            <div className="mb-2.5 flex items-baseline">
              <span className=" mt-5 w-[30px]">
                <img src={ball} alt="" />
              </span>
              <span className="w-[270px]">
                Estabeleça um compromisso coletivo com os valores de equidade,
                responsabilidade e reconciliação.
              </span>
            </div>
          </div>
        </span>
        {/* bloco 2 */}
        <div className="absolute top-[850px] left-[60px]">
          <div className="relative">
            <div
              className="absolute w-[100px]"
              style={{ top: '-74px', left: '190px', transform: 'scaleX(-1)' }}
            >
              <img src={block_2_1} alt="" />
            </div>

            <div
              className="absolute  w-[28px]"
              style={{ top: '-14px', right: '32px', transform: 'scaleX(-1)' }}
            >
              <img src={block_2_2} alt="" />
            </div>

            <div className="absolute top-[0px] left-[-13px] w-[27px]">
              <img src={circle1} alt="" />
            </div>

            <div
              style={{
                backgroundImage: `url(${Title})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
              className="h-[30px] pl-10 w-[214px] flex items-center absolute top-[-27px] left-[-30px] z-[-100]"
            >
              <p className="font-bold text-[18px] text-[#3A3276]">Passo 2</p>
            </div>

            <div
              className="flex bg-[#3A3276]  z-[-999999] w-[293px] h-[45px] text-[#FFFFFF] px-2.5 gap-5 mt-[10%] "
              style={{ borderRadius: '0 50px 50px 0' }}
            >
              <span className="font-bold pl-5 mt-2.5 text-[14px]">
                Formação e Capacitação
              </span>
              <img
                src={Pontilhado}
                alt=""
                className="w-[50px] h-[20px] mt-2.5 mr-2.5 "
              />
            </div>
          </div>
        </div>

        <span className="absolute " style={{ top: '950px', left: '60px' }}>
          <div>
            <p
              className="text-[#3A3276] font-bold text-[16px] flex items-center justify-center mb-5 w-[300px] h-[60px]"
              style={{
                backgroundImage: `url(${bgText})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
              Treinamento para Equipes Escolares:
            </p>

            <div className="mb-2.5 flex items-baseline">
              <span className=" mt-5 w-[30px]">
                <img src={ball} alt="" />
              </span>
              <span className="w-[270px]">
                Proporcione treinamento em Justiça Restaurativa para todos,
                incluindo administradores, professores, conselheiros e equipe de
                apoio.
              </span>
            </div>
            <div className="mb-2.5 flex items-baseline">
              <span className=" mt-5 w-[30px]">
                <img src={ball} alt="" />
              </span>
              <span className="w-[270px]">
                Certifique-se de que todos entendam os papéis e
                responsabilidades dentro de um sistema restaurativo.
              </span>
            </div>
          </div>

          <div>
            <p
              className="text-[#3A3276] font-bold text-[16px] flex items-center justify-center mb-5 w-[300px] h-[60px]"
              style={{
                backgroundImage: `url(${bgText})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
              Capacitação em Habilidades Práticas:
            </p>

            <div className="mb-2.5 flex items-baseline">
              <span className=" mt-5 w-[30px]">
                <img src={ball} alt="" />
              </span>
              <span className="w-[270px] ">
                Ofereça workshops sobre técnicas de facilitação de círculos
                restaurativos, escuta ativa, comunicação não violenta e
                mediação.
              </span>
            </div>
            <div className="mb-2.5 flex items-baseline">
              <span className=" mt-5 w-[30px]">
                <img src={ball} alt="" />
              </span>
              <span className="w-[270px]">
                Promova o desenvolvimento de habilidades de empatia, resolução
                de conflitos e tomada de decisões colaborativas.
              </span>
            </div>
          </div>
        </span>
        {/* bloco 3 */}

        <div className="absolute top-[1560px]  left-[60px]">
          <div className="relative">
            <div
              className="absolute w-[70px]"
              style={{ top: '-37px', left: '215px' }}
            >
              <img src={block_3_1} alt="" />
            </div>

            <div
              className="absolute  w-[60px] z-[-99999]"
              style={{ top: '-48px', right: '80px' }}
            >
              <img src={block_3_2} alt="" />
            </div>

            <div className="absolute top-[0px] left-[-13px] w-[27px]">
              <img src={circle1} alt="" />
            </div>

            <div
              style={{
                backgroundImage: `url(${Title})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
              className="h-[30px] pl-10 w-[214px] flex items-center absolute top-[-27px] left-[-30px] z-[-100]"
            >
              <p className="font-bold text-[18px] text-[#3A3276]">Passo 3</p>
            </div>

            <div
              className="flex bg-[#3A3276] z-[-999999] w-[293px] gap-[1px] h-[45px] text-[#FFFFFF] px-2.5 mt-[15%]"
              style={{ borderRadius: '0 50px 50px 0' }}
            >
              <span className="font-bold pl-5 text-[14px]">
                Estruturação e Implementação
              </span>
              <img
                src={Pontilhado}
                alt=""
                className="w-[50px] h-[20px] mt-2.5 mr-2.5 "
              />
            </div>
          </div>
        </div>

        <span className="absolute " style={{ top: '1660px', left: '60px' }}>
          <div>
            <p
              className="text-[#3A3276] font-bold text-[16px] pl-10 pt-3  flex items-center justify-center mb-5 w-[300px] h-[60px]"
              style={{
                backgroundImage: `url(${bgText})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                lineHeight: 'initial',
              }}
            >
              Desenvolvimento de Políticas e Procedimentos:
            </p>

            <div className="mb-2.5 flex items-baseline">
              <span className=" mt-5 w-[30px]">
                <img src={ball} alt="" />
              </span>
              <span className="w-[270px]">
                Colabore com a comunidade escolar para desenvolver políticas
                claras e procedimentos consistentes baseados em princípios
                restaurativos.
              </span>
            </div>
            <div className="mb-2.5 flex items-baseline">
              <span className=" mt-5 w-[30px]">
                <img src={ball} alt="" />
              </span>
              <span className="w-[270px]">
                Integre práticas de Justiça Restaurativa nos códigos de conduta
                e no planejamento curricular da escola.
              </span>
            </div>
          </div>

          <div>
            <p
              className="text-[#3A3276] font-bold text-[16px] flex items-center justify-center mb-5 w-[300px] h-[60px]"
              style={{
                backgroundImage: `url(${bgText})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
              Design de Programas Restaurativos:
            </p>

            <div className="mb-2.5 flex items-baseline">
              <span className=" w-[30px]">
                <img src={ball} alt="" />
              </span>
              <span className="w-[270px] ">
                Identifique áreas prioritárias para implementar os programas
                restaurativos, como a resolução de conflitos entre alunos,
                suporte emocional e reintegração após incidentes.
              </span>
            </div>
            <div className="mb-2.5 flex items-baseline">
              <span className=" mt-5 w-[30px]">
                <img src={ball} alt="" />
              </span>
              <span className="w-[270px]">
                Personalize os programas de acordo com as necessidades
                específicas e culturais da comunidade escolar.
              </span>
            </div>
          </div>
        </span>
        {/* bloco 4 */}
        <div className="absolute top-[2390px]  left-[60px]">
          <div className="relative">
            <div
              className="absolute w-[70px] z-[-999999]"
              style={{ top: '-60px', left: '175px', transform: 'scaleX(-1)' }}
            >
              <img src={block_4_1} alt="" />
            </div>

            <div className="absolute top-[0px] left-[-13px] w-[27px]">
              <img src={circle1} alt="" />
            </div>

            <div
              style={{
                backgroundImage: `url(${Title})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
              className="h-[30px] pl-10 w-[214px] flex items-center absolute top-[-27px] left-[-30px] z-[-100]"
            >
              <p className="font-bold text-[18px] text-[#3A3276]">Passo 4</p>
            </div>

            <div
              className="flex bg-[#3A3276]   z-[-999999] w-[293px] h-[45px] text-[#FFFFFF] px-2.5 "
              style={{ borderRadius: '0 50px 50px 0' }}
            >
              <span className="font-bold pl-5 text-[14px]">
                Implementação e Avaliação Contínua
              </span>
              <img
                src={Pontilhado}
                alt=""
                className="w-[50px] h-[20px] mt-2.5 mr-2.5 "
              />
            </div>
          </div>
        </div>

        <span className="absolute " style={{ top: '2450px', left: '60px' }}>
          <div>
            <p
              className="text-[#3A3276] font-bold text-[16px] pl-10 pt-3  flex items-center justify-center mb-5 w-[300px] h-[60px]"
              style={{
                backgroundImage: `url(${bgText})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                lineHeight: 'initial',
              }}
            >
              Fase Piloto e Avaliação Inicial:
            </p>

            <div className="mb-2.5 flex items-baseline">
              <span className=" mt-5 w-[30px]">
                <img src={ball} alt="" />
              </span>
              <span className="w-[270px]">
                Inicie com uma fase piloto para testar os programas
                restaurativos em um ambiente controlado
              </span>
            </div>
            <div className="mb-2.5 flex items-baseline">
              <span className=" mt-5 w-[30px]">
                <img src={ball} alt="" />
              </span>
              <span className="w-[270px]">
                Coleta de feedback e dados para avaliar a eficácia, a aceitação
                e os impactos dos programas.
              </span>
            </div>
          </div>

          <div>
            <p
              className="text-[#3A3276] font-bold text-[16px] flex items-center justify-center mb-5 w-[300px] h-[60px] "
              style={{
                backgroundImage: `url(${bgText})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
              Monitoramento e Ajustes:
            </p>

            <div className="mb-2.5 flex items-baseline">
              <span className=" mt-2 w-[30px]">
                <img src={ball} alt="" />
              </span>
              <span className="w-[270px] ">
                Estabeleça um sistema de monitoramento contínuo para acompanhar
                a implementação e o progresso dos programas.
              </span>
            </div>
            <div className="mb-2.5 flex items-baseline">
              <span className=" w-[30px]">
                <img src={ball} alt="" />
              </span>
              <span className="w-[270px]">
                Faça ajustes conforme necessário com base nos resultados da
                avaliação e nas necessidades emergentes da comunidade escolar.
              </span>
            </div>
          </div>
        </span>
        {/* bloco 5 */}
        <div className="absolute top-[3070px]  left-[60px]">
          <div className="relative">
            <div
              className="absolute w-[84px] z-[-999999]"
              style={{ top: '-55px', left: '171px' }}
            >
              <img src={block_5_1} alt="" />
            </div>

            <div className="absolute top-[0px] left-[-13px] w-[27px]">
              <img src={circle1} alt="" />
            </div>

            <div
              style={{
                backgroundImage: `url(${Title})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
              className="h-[30px] pl-10 w-[214px] flex items-center absolute top-[-27px] left-[-30px] z-[-100]"
            >
              <p className="font-bold text-[18px] text-[#3A3276]">Passo 5</p>
            </div>

            <div
              className="flex bg-[#3A3276] gap-2.5  z-[-999999] w-[293px] h-[45px] text-[#FFFFFF] px-2.5 "
              style={{ borderRadius: '0 50px 50px 0' }}
            >
              <span className="font-bold pl-5 text-[14px]">
                Integração e Sustentabilidade
              </span>
              <img
                src={Pontilhado}
                alt=""
                className="w-[50px] h-[20px] mt-2.5 mr-2.5 "
              />
            </div>
          </div>
        </div>

        <span className="absolute " style={{ top: '3150px', left: '60px' }}>
          <div>
            <p
              className="text-[#3A3276] font-bold text-[16px]  pt-3  flex items-center justify-center mb-5 w-[300px] h-[60px]"
              style={{
                backgroundImage: `url(${bgText})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                lineHeight: 'initial',
              }}
            >
              Incorporação à Cultura Escolar:
            </p>

            <div className="mb-2.5 flex items-baseline">
              <span className=" mt-5 w-[30px]">
                <img src={ball} alt="" />
              </span>
              <span className="w-[270px]">
                Promova uma cultura escolar baseada em valores de justiça,
                respeito mútuo e responsabilidade compartilhada.
              </span>
            </div>
            <div className="mb-2.5 flex items-baseline">
              <span className=" mt-5 w-[30px]">
                <img src={ball} alt="" />
              </span>
              <span className="w-[270px]">
                Integre práticas restaurativas em atividades cotidianas, eventos
                escolares e no currículo acadêmico.
              </span>
            </div>
          </div>

          <div>
            <p
              className="text-[#3A3276] font-bold text-[16px] pl-10 pt-2.5 flex items-center justify-center mb-5 w-[300px] h-[60px]"
              style={{
                backgroundImage: `url(${bgText})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
              Desenvolvimento de Liderança e Engajamento Contínuo:
            </p>

            <div className="mb-2.5 flex items-baseline">
              <span className=" w-[30px]">
                <img src={ball} alt="" />
              </span>
              <span className="w-[270px] ">
                Capacite líderes estudantis e comunitários para apoiar e
                promover iniciativas restaurativas.
              </span>
            </div>
            <div className="mb-2.5 flex items-baseline">
              <span className=" w-[30px]">
                <img src={ball} alt="" />
              </span>
              <span className="w-[270px]">
                Mantenha o engajamento da comunidade escolar através de reuniões
                regulares, grupos de trabalho e eventos educativos.
              </span>
            </div>
          </div>
        </span>
        {/* bloco 6 */}
        {/* bloco last */}
        <div>
          <div
            className="absolute w-[50px] "
            style={{
              transform: 'rotate(-90deg)',
              top: '3741px',
              right: '-21px',
              left: '32px',
            }}
          >
            <img src={block_last_1} alt="" />
          </div>
          <div
            className="bg-[#3A3276] z-[-200] left-[45px] w-[200px] h-[45px] absolute top-[3732px] flex justify-center items-center"
            style={{ borderRadius: ' 0 50px 50px 0' }}
          >
            <div className="text-[#FFFFFF] relative text-[18px]">
              <img
                src={block_last_2}
                alt=""
                className="absolute top-[-28px] left-[-40px]"
              />
              <strong> Conclusão </strong>
            </div>
          </div>
          <div
            className="w-[300px] z-[-400] flex items-center px-5 gap-[2px] py-[50px]  bg-[#EFC9CD] absolute"
            style={{
              top: '3750px',
              left: '42px',
              borderRadius: '0px 50px 50px 50px',
            }}
          >
            <img className="w-[10%]" src={block_last_3} alt="" />

            <p className="text-[14px] w-[90%]">
              Implementar a Justiça Restaurativa na escola requer um compromisso
              individual e coletivo a longo prazo, objetivando a mudança
              cultural e estrutural. Ao seguir este passo-a-passo e adaptar as
              etapas às necessidades específicas da sua escola, vocês poderão
              criar um ambiente mais positivo, inclusivo e propício ao
              desenvolvimento integral dos alunos e ao fortalecimento da
              comunidade escolar como um todo.
            </p>

            <img className="w-[10%]" src={block_last_3} alt="" />
          </div>
        </div>

        {/* fim */}

        <div className="mb-[-600px]"></div>
      </div>
    </div>
  );
};

export default Infografico;
