'use client';
// Gerado por pnpm docs:generate a partir da story original.
import { RangeBlue } from "@modfly/ui";
const meta = {
    title: "Atoms/RangeBlue",
    component: RangeBlue,
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    args: {
        children: <p style={{ margin: 0 }}>Conteúdo principal dentro da faixa.</p>,
        text: "Texto de apoio ao lado do conteúdo principal.",
    },
};
export const ConteudoCustomizado = {
    name: "Conteúdo customizado",
    args: {
        isCustomContent: true,
        children: (<div style={{ display: "flex", gap: 24, alignItems: "center" }}>
        <p style={{ margin: 0 }}>Layout livre, sem a divisão automática de texto.</p>
      </div>),
    },
};
