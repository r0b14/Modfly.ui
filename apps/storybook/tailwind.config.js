const path = require("path");
// Reaproveita o tema (cores, fontes) do curso-template — única fonte de
// verdade do design system — só trocando os `content` para os globs que
// o Storybook realmente varre (ver stories em .storybook/main.ts).
const cursoTemplateConfig = require("../curso-template/tailwind.config.js");

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...cursoTemplateConfig,
  content: [
    path.resolve(__dirname, "../../packages/ui/src/**/*.{js,jsx,ts,tsx}"),
    path.resolve(__dirname, "../curso-template/src/components/templates/**/*.{js,jsx,ts,tsx}"),
    path.resolve(__dirname, "../curso-template/src/components/molecules/**/*.{js,jsx,ts,tsx}"),
  ],
};
