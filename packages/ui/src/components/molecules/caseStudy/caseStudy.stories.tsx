import type { Meta, StoryObj } from "@storybook/react";
import { CaseStudy } from "./index";

const meta: Meta<typeof CaseStudy> = {
  title: "Molecules/CaseStudy",
  component: CaseStudy,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CaseStudy>;

export const Default: Story = {
  args: {
    title: "Estudo de Caso 1",
    topBgImg: "https://via.placeholder.com/1200x100/3374C0/FFFFFF?text=Top+Background",
    iconImg: "https://via.placeholder.com/100",
    bottomBgImg: "https://via.placeholder.com/1200x400/E1EFFF/000000?text=Bottom+Background",
    children: (
      <div>
        <p>Este é um exemplo de estudo de caso com conteúdo rico dentro.</p>
        <ul className="list-disc pl-5 mt-4">
          <li>Fato 1 do caso</li>
          <li>Fato 2 do caso</li>
        </ul>
      </div>
    ),
  },
};
