import type { Meta, StoryObj } from "@storybook/react";
import { HistoryTopics } from "./index";

const meta: Meta<typeof HistoryTopics> = {
  title: "Organisms/HistoryTopics",
  component: HistoryTopics,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof HistoryTopics>;

export const Default: Story = {
  args: {
    text1: "surgiu no contexto dos direitos humanos, após a Segunda Guerra Mundial.",
    text11: "Trouxe o reconhecimento de direitos civis e políticos como base da cidadania.",
    text2: "ampliou o debate para os direitos sociais, econômicos e culturais.",
    text22: "Incluiu educação, saúde e trabalho como direitos fundamentais.",
    text3: "trouxe os direitos difusos e coletivos, como meio ambiente e consumidor.",
    text33: "Reconheceu interesses que ultrapassam o indivíduo isolado.",
    text333: "Hoje, as três gerações convivem e se complementam na proteção da pessoa.",
  },
};
