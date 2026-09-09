import React, { useMemo } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ActivityQuestions, QuestionsProvider, createMemoryAdapter } from '@modfly/ui-avamec';
import { demoActivity } from './demo';
function ActivityDemo() {
  const adapter = useMemo(() => createMemoryAdapter(), []);
  return <QuestionsProvider activity={demoActivity} adapter={adapter}><ActivityQuestions /></QuestionsProvider>;
}
const meta: Meta<typeof ActivityDemo> = { title:'AVAMEC/Atividade completa', component:ActivityDemo, tags:['autodocs'] };
export default meta;
export const Completa: StoryObj<typeof ActivityDemo> = {};
