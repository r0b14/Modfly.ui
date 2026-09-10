'use client';
// Gerado por pnpm docs:generate a partir da story original.
import { Carousel } from "@modfly/ui";
const meta = {
    title: "Templates/Carousel",
    component: Carousel,
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    args: {
        items: [
            <div key="1" style={{ padding: "40px", background: "#eee" }}>Slide 1 Content</div>,
            <div key="2" style={{ padding: "40px", background: "#ddd" }}>Slide 2 Content</div>,
            <div key="3" style={{ padding: "40px", background: "#ccc" }}>Slide 3 Content</div>,
        ],
        numberOfItems: 3,
        bgColor: "#f0f0f0",
        bgImages: [],
        bgPosition: [],
    },
};
