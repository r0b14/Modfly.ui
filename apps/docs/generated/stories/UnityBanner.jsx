'use client';
// Gerado por pnpm docs:generate a partir da story original.
import { UnityBanner } from "@modfly/ui";
const meta = {
    title: "Templates/UnityBanner",
    component: UnityBanner,
    tags: ["autodocs"],
    argTypes: {
        type: {
            control: "radio",
            options: ["main", "secondary"],
        },
    },
};
export default meta;
export const Main = {
    args: {
        type: "main",
        module: 1,
        subtitle: "Conhecimentos Fundamentais",
    },
};
export const Secondary = {
    args: {
        type: "secondary",
        module: 2,
        subtitle: "Módulo Secundário",
    },
};
export const Unidade0 = { args: { ...Main.args, module: 0 } };
export const Unidade1 = { args: { ...Main.args, module: 1 } };
export const Unidade2 = { args: { ...Main.args, module: 2 } };
export const Unidade3 = { args: { ...Main.args, module: 3 } };
export const Unidade4 = { args: { ...Main.args, module: 4 } };
export const Secundario1 = { args: { ...Secondary.args, module: 1 } };
export const Secundario2 = { args: { ...Secondary.args, module: 2 } };
export const Secundario3 = { args: { ...Secondary.args, module: 3 } };
export const Secundario4 = { args: { ...Secondary.args, module: 4 } };
