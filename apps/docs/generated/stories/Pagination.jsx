'use client';
// Gerado por pnpm docs:generate a partir da story original.
import { Pagination } from "@modfly/ui";
const meta = {
    title: "Templates/Pagination",
    component: Pagination,
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    args: {
        numberOfPages: 5,
        currentPage: 2,
        onPageChange: (page) => console.log("page change", page),
    },
};
export const SemNumeros = {
    name: "Sem números",
    args: {
        numberOfPages: 5,
        currentPage: 2,
        onPageChange: (page) => console.log("page change", page),
        showNumbers: false,
        title: "Avance no módulo",
    },
};
