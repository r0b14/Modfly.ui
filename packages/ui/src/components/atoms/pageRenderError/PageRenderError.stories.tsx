import type { Meta, StoryObj } from '@storybook/react';
import { PageRenderError } from "@modfly/ui";
const meta: Meta<typeof PageRenderError> = { title: 'Atoms/PageRenderError', component: PageRenderError, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof PageRenderError>;
export const Default: Story = { args: { title: 'Conteúdo indisponível', children: 'Confira o endereço da aula e tente novamente.' } };
