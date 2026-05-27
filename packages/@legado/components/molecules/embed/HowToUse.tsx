import Embed from './Embed';

// Exemplo de uso no caso de ser um embed do tipo Vimeo
<Embed isVimeo>
  <p>
    Agora, assista ao vídeo com{' '}
    <a
      href="https://vimeo.com/491390138/4609209616"
      target="_blank"
      rel="noreferrer"
    >
      Clara Ramírez Barat
    </a>
    , Diretora do Programa de Políticas Educacionais Warren do Instituto
    Auschwitz, que explica a sequência temática da primeira parte da proposta.
  </p>
</Embed>;


// Exemplo de uso no caso de ser um embed do tipo Youtube
<Embed
  text="Neste vídeo, assista Clara Ramírez-Barat, Diretora do Programa de Políticas Educacionais Warren do Instituto Auschwitz, falando sobre o tema da identidade:"
  link="https://www.youtube.com/embed/dNmwvntMF5A?si=C4mchksTHdLHEUNv"
/>;
