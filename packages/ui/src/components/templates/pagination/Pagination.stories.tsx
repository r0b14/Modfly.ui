import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "./index";

const meta: Meta<typeof Pagination> = {
  title: "Templates/Pagination",
  component: Pagination,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    numberOfPages: 5,
    currentPage: 2,
    onPageChange: (page: number) => console.log("page change", page),
  },
};

export const SemNumeros: Story = {
  name: "Sem números",
  args: {
    numberOfPages: 5,
    currentPage: 2,
    onPageChange: (page: number) => console.log("page change", page),
    showNumbers: false,
    title: "Avance no módulo",
  },
};
