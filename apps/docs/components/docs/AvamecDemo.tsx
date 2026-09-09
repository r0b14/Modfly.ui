'use client';
import { useMemo } from 'react';
import { ActivityQuestions, QuestionsProvider, createMemoryAdapter } from '@modfly/ui-avamec';
import demo from '@/generated/activity.json';
import type { ActivityDefinition } from '@modfly/ui-avamec';
export function AvamecDemo() {
  const adapter = useMemo(() => createMemoryAdapter(), []);
  return <QuestionsProvider activity={demo as ActivityDefinition} adapter={adapter}><ActivityQuestions /></QuestionsProvider>;
}
