'use client';
// Gerado por pnpm docs:generate a partir da story original.
import { Slider } from "@modfly/ui";
const meta = {
    title: "Templates/Slider",
    component: Slider,
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "radio",
            options: ["blue", "orange", "green", "brown"],
        },
    },
};
export default meta;
export const Default = {
    args: {
        variant: "blue",
        bulletColor: "#ccc",
        bulletActiveColor: "#285C93",
        children: [
            <div key="1" style={{ padding: "40px", textAlign: "center" }}>Slide 1</div>,
            <div key="2" style={{ padding: "40px", textAlign: "center" }}>Slide 2</div>,
            <div key="3" style={{ padding: "40px", textAlign: "center" }}>Slide 3</div>,
        ],
    },
};
export const Laranja = {
    args: {
        variant: "orange",
        bulletColor: "#f0d9c0",
        bulletActiveColor: "#C66A4A",
        children: [
            <div key="1" style={{ padding: "40px", textAlign: "center" }}>Slide 1</div>,
            <div key="2" style={{ padding: "40px", textAlign: "center" }}>Slide 2</div>,
        ],
    },
};
