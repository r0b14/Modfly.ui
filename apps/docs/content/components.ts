import { type Locale } from '@/lib/i18n';
// Editorial content stays separate from generated types and runnable stories.
// Each entry: purpose (pt/en), practical guidance (pt/en).
export const componentContent: Record<string, [string, string, string, string]> = {
  buttonlink: [
    'Uma chamada para ação com fundo ilustrado e ícone de clique, documento ou vídeo.',
    'An illustrated call to action with a click, document or video icon.',
    'Use um rótulo que explique o destino. href cria um link; onClick executa uma ação.',
    'Use a label that describes the destination. href creates a link; onClick performs an action.',
  ],
  buttonpdfdownload: [
    'Acesso a materiais de aula em PDF.',
    'Access to PDF course materials.',
    'Forneça um endereço de PDF válido em pdfile e informe o contexto do arquivo no texto da aula.',
    'Supply a valid PDF URL through pdfile and describe the resource in the surrounding lesson.',
  ],
  buttonreference: [
    'Controle para expandir ou recolher referências.',
    'A control for expanding and collapsing references.',
    'Mantenha isOpen no componente pai e atualize-o em onToggle. O conteúdo expandido pertence à aplicação.',
    'Keep isOpen in the parent and update it with onToggle. The expanded content belongs to your application.',
  ],
  check: [
    'Lista ilustrada para objetivos e pontos-chave.',
    'An illustrated list of learning objectives and key points.',
    'Escreva itens curtos e paralelos. A decoração não deve substituir o texto dos objetivos.',
    'Write short, parallel items. Decoration should not replace the objective text.',
  ],
  exclamation: [
    'Aviso com título e acesso opcional a um recurso.',
    'A notice with a heading and an optional resource link.',
    'Use para uma instrução que merece atenção. Identifique o recurso com linkLabel.',
    'Use for an instruction that needs attention. Identify the resource using linkLabel.',
  ],
  imagefallback: [
    'Imagem que usa uma alternativa quando o carregamento principal falha.',
    'An image that loads an alternative when the primary source fails.',
    'Informe src, fallback e alt. O fallback responde a falhas de carregamento, não apenas a formatos de imagem.',
    'Provide src, fallback and alt. Fallback handles loading failures, not only unsupported image formats.',
  ],
  pagerendererror: [
    'Mensagem de falha com uma ação para tentar novamente.',
    'An error message with a retry action.',
    'Conecte onRetry à recuperação real da página. Explique no contexto o que poderá ser recarregado.',
    'Connect onRetry to actual page recovery. Explain what will be reloaded in the surrounding context.',
  ],
  postit: [
    'Uma nota visual para observações no fluxo da aula.',
    'A visual note for observations within a lesson.',
    'Reserve o destaque para uma ideia. Conteúdo longo é mais legível em um bloco de leitura.',
    'Reserve the highlight for a single idea. Longer content is easier to read in a reading block.',
  ],
  rangeblue: [
    'Faixa azul decorativa para destacar uma seção.',
    'A decorative blue band that highlights a section.',
    'Componha o conteúdo em children e confira o contraste dos elementos inseridos.',
    'Compose content through children and check the contrast of inserted elements.',
  ],
  rangegreen: [
    'Faixa verde com opções de borda para separar conteúdos.',
    'A green band with border options for separating content.',
    'Escolha a variante de acordo com a seção e teste o conteúdo em telas estreitas.',
    'Choose a variant for the section and test its content on narrow screens.',
  ],
  tooltip: [
    'Explicação breve junto a um termo da leitura.',
    'A brief explanation attached to a term in the text.',
    'Use definições curtas. O termo aceita foco e a explicação pode ser fechada com Escape.',
    'Keep definitions short. The term accepts focus and Escape dismisses the explanation.',
  ],
  cardflip: [
    'Cartão com frente e verso para apresentar e aprofundar uma ideia.',
    'A two-sided card for introducing and exploring an idea.',
    'Use uma frente descritiva e um verso conciso. Sanitize HTML antes de incluí-lo no conteúdo.',
    'Use a descriptive front and a concise reverse. Sanitize HTML before including it in the content.',
  ],
  cards: [
    'Cartões com imagem, resumo e detalhe expansível.',
    'Cards with an image, summary and expandable detail.',
    'Agrupe conceitos comparáveis. Garanta descrições nas imagens e sanitize conteúdo HTML.',
    'Group comparable concepts. Provide image descriptions and sanitize HTML content.',
  ],
  casestudy: [
    'Bloco ilustrado para uma situação-problema ou estudo de caso.',
    'An illustrated block for a scenario or case study.',
    'Apresente contexto, pergunta e orientação em uma sequência de leitura clara.',
    'Present context, a question and guidance in a clear reading sequence.',
  ],
  citation: [
    'Citação editorial para destacar uma ideia e sua referência.',
    'An editorial quotation for highlighting an idea and its source.',
    'Inclua a atribuição em reference quando houver fonte. Use a variante para combinar com a seção.',
    'Include attribution through reference when there is a source. Choose a variant that suits the section.',
  ],
  embed: [
    'Conteúdo de mídia incorporado a partir de um endereço.',
    'Embedded media provided through a URL.',
    'Teste o endereço real, as permissões e as legendas no provedor. O player externo mantém seu próprio comportamento.',
    'Test the real URL, permissions and captions with the provider. The external player controls its own behavior.',
  ],
  figure: [
    'Imagem editorial com legenda, numeração e referência.',
    'An editorial image with a caption, number and attribution.',
    'Forneça alt descritivo e uma fonte legível. Use imgSrcMobile quando a leitura exigir outro enquadramento.',
    'Provide descriptive alt text and a readable attribution. Use imgSrcMobile when a different crop improves mobile reading.',
  ],
  imagelist: [
    'Sequência de imagens com detalhes expansíveis.',
    'A sequence of images with expandable details.',
    'Organize imagens na ordem de leitura e mantenha suas fontes junto a cada item.',
    'Arrange images in reading order and keep attribution with each item.',
  ],
  indentcitation: [
    'Quatro apresentações de citação com recuo e destaque visual.',
    'Four indented quotation styles with visual emphasis.',
    'Compare IndentCitation, IndentCitationBg, IndentCitationImg e IndentCitationTitle. Cada exportação tem suas próprias propriedades abaixo.',
    'Compare IndentCitation, IndentCitationBg, IndentCitationImg and IndentCitationTitle. Each export has its own properties below.',
  ],
  listmodule: [
    'Lista de apresentação dos assuntos de um módulo.',
    'An introductory list of module topics.',
    'Use título, subtítulo e itens para antecipar a jornada da unidade.',
    'Use a title, subtitle and items to introduce the unit’s learning journey.',
  ],
  minicards: [
    'Cartões compactos com detalhes de texto.',
    'Compact cards with text details.',
    'Prefira frases curtas para preservar a leitura na grade e em dispositivos móveis.',
    'Prefer short sentences to preserve readability in the grid and on mobile devices.',
  ],
  questionreflect: [
    'Pergunta visual para estimular reflexão durante a leitura.',
    'A visual question that encourages reflection while reading.',
    'Este bloco apresenta uma pergunta; não avalia nem salva respostas. Para avaliação, consulte AVAMEC.',
    'This block presents a question; it does not grade or save answers. For assessment, see AVAMEC.',
  ],
  quotetext: [
    'Trecho destacado com aspas e sombra suave.',
    'A highlighted excerpt with quotation marks and a subtle shadow.',
    'Use para uma passagem curta. Acrescente a fonte no texto ao redor quando necessário.',
    'Use for a short passage. Add the source in surrounding text when needed.',
  ],
  quotes: [
    'Citação com aspas coloridas e alinhamento editorial.',
    'A quotation with colored quotation marks and editorial alignment.',
    'Confira o comprimento das linhas e o contraste da variante com o fundo da página.',
    'Check line lengths and the contrast between the variant and the page background.',
  ],
  referencemodal: [
    'Referência bibliográfica apresentada em uma janela de diálogo.',
    'A bibliographic reference presented in a dialog.',
    'Use um acionador descritivo. Escape fecha a janela e devolve o foco ao acionador.',
    'Use a descriptive trigger. Escape closes the dialog and restores focus to the trigger.',
  ],
  accordion: [
    'Conteúdo que se expande a partir de um cabeçalho ilustrado.',
    'Content that expands from an illustrated heading.',
    'Dê um título claro a cada seção. Confira cabeçalhos longos, contraste e navegação com Enter e Espaço.',
    'Give each section a clear heading. Check long headings, contrast and navigation with Enter and Space.',
  ],
  historytopics: [
    'Três grupos de informações conectados visualmente.',
    'Three groups of information connected visually.',
    'Use a sequência para etapas ou gerações relacionadas. A ordem do texto deve fazer sentido sem a linha decorativa.',
    'Use the sequence for related stages or generations. Text order should make sense without the decorative line.',
  ],
  learningblock: [
    'Bloco de leitura com dez variantes ilustradas.',
    'A reading block with ten illustrated variants.',
    'Escolha a variante pelo papel pedagógico e mantenha a hierarquia dos títulos dentro do bloco.',
    'Choose the variant for its learning purpose and preserve the heading hierarchy inside the block.',
  ],
  questionoptionheader: [
    'Apresentação estática do enunciado e das alternativas de uma questão.',
    'A static presentation of a question and its alternatives.',
    'Use para exibir conteúdo. O cabeçalho não captura respostas; questões interativas ficam em @modfly/ui-avamec.',
    'Use to display content. This header does not collect answers; interactive questions live in @modfly/ui-avamec.',
  ],
  starlist: [
    'Lista de tópicos com estrelas e linha de conexão.',
    'A topic list with stars and a connecting line.',
    'Destaque uma expressão por item e mantenha uma ordem de leitura coerente.',
    'Highlight one expression per item and preserve a coherent reading order.',
  ],
  timelinewithcards: [
    'Linha do tempo com cartões para eventos e marcos.',
    'A timeline with cards for events and milestones.',
    'Ordene os dados cronologicamente e forneça datas ou rótulos compreensíveis em cada cartão.',
    'Order data chronologically and provide understandable dates or labels in each card.',
  ],
  carousel: [
    'Sequência navegável de itens com controles e fundo opcional.',
    'A navigable sequence of items with controls and an optional background.',
    'Mantenha a ordem dos itens e confira cada slide. Evite conteúdo essencial acessível apenas por indicação visual.',
    'Preserve item order and check each slide. Avoid essential content accessible only through visual cues.',
  ],
  container: [
    'Limite de largura e centralização para compor uma página.',
    'A width boundary and centering wrapper for composing a page.',
    'Use como base estrutural. O conteúdo interno continua responsável por sua própria semântica.',
    'Use as a structural foundation. Inner content remains responsible for its own semantics.',
  ],
  glossary: [
    'Definição junto à palavra, disponível por foco, toque ou clique.',
    'An inline definition available through focus, touch or click.',
    'Informe word e definition. Evite inserir tarefas complexas em uma definição curta.',
    'Provide word and definition. Avoid placing complex tasks inside a short definition.',
  ],
  minibanner: [
    'Faixa ilustrada para identificar momentos da aula.',
    'An illustrated banner identifying stages of a lesson.',
    'Escolha a variante e um título que indiquem o propósito da seção, como leitura ou prática.',
    'Choose a variant and a title that communicate the section’s purpose, such as reading or practice.',
  ],
  pagination: [
    'Navegação controlada entre páginas de um curso.',
    'Controlled navigation between course pages.',
    'Atualize currentPage em onPageChange. O componente emite ações; a aplicação decide que conteúdo carregar.',
    'Update currentPage through onPageChange. The component emits actions; your application decides what to load.',
  ],
  slider: [
    'Slides compostos com children e controles de navegação.',
    'Slides composed through children with navigation controls.',
    'Forneça um elemento por slide e teste a leitura no menor tamanho de tela esperado.',
    'Provide one element per slide and test readability at the smallest expected screen size.',
  ],
  textwithimagebox: [
    'Texto e imagens em um bloco com orientação configurável.',
    'Text and images in a block with configurable orientation.',
    'Use imagens que complementem a explicação. Confira a ordem do conteúdo quando isReverse estiver ativo.',
    'Use images that complement the explanation. Check content order when isReverse is enabled.',
  ],
  unitybanner: [
    'Abertura ilustrada de unidade com variantes por módulo.',
    'An illustrated unit opening with module variants.',
    'Defina module de acordo com as opções da API e mantenha o título legível em dispositivos móveis.',
    'Set module using an API-supported option and keep the title readable on mobile devices.',
  ],
};
export function editorial(slug: string, lang: Locale) {
  const entry = componentContent[slug];
  if (!entry) throw new Error(`Missing editorial content: ${slug}`);
  return { description: entry[lang === 'pt' ? 0 : 1], guidance: entry[lang === 'pt' ? 2 : 3] };
}
