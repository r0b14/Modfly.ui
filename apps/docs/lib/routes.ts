// Registro central de rotas do site de docs.
// Fonte para sitemap.xml e metadata por página — manter em sincronia com o Sidebar.

export const GETTING_STARTED_STEPS = [
  { slug: "introduction", title: "Introduction" },
  { slug: "installation", title: "Installation" },
  { slug: "tailwind-setup", title: "Tailwind setup" },
  { slug: "theming", title: "Theming" },
] as const;

export const COMPONENT_SECTIONS = [
  {
    title: "Atoms",
    items: [
      "ButtonLink",
      "ButtonPdfDownload",
      "Tooltip",
      "Postit",
      "Check",
      "ImageFallback",
      "ButtonReference",
      "Exclamation",
      "RangeBlue",
      "RangeGreen",
    ],
  },
  {
    title: "Molecules",
    items: [
      "Cards",
      "CardFlip",
      "QuoteText",
      "Figure",
      "Citation",
      "IndentCitation",
      "ListModule",
      "MiniCards",
      "Embed",
      "ImageList",
      "CaseStudy",
      "QuestionReflect",
      "Quotes",
      "ReferenceModal",
    ],
  },
  {
    title: "Organisms",
    items: [
      "Accordion",
      "StarList",
      "TimelineWithCards",
      "HistoryTopics",
      "LearningBlock",
      "QuestionOptionHeader",
    ],
  },
  {
    title: "Templates",
    items: [
      "Carousel",
      "Slider",
      "Pagination",
      "UnityBanner",
      "Glossary",
      "Container",
      "TextWithImageBox",
      "Minibanner",
    ],
  },
] as const;

export interface ComponentRoute {
  name: string;
  slug: string;
  section: string;
}

export const ALL_COMPONENTS: ComponentRoute[] = COMPONENT_SECTIONS.flatMap(
  (section) =>
    section.items.map((name) => ({
      name,
      slug: name.toLowerCase(),
      section: section.title,
    })),
);

export function findComponentBySlug(slug: string): ComponentRoute | undefined {
  return ALL_COMPONENTS.find((component) => component.slug === slug);
}
