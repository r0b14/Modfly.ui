import type { Preview } from '@storybook/react';
import '@modfly/ui/styles.css';
import '@modfly/ui-avamec/styles.css';
const preview: Preview = { parameters: { options: { storySort: { order: ['Welcome', ['Portugues', 'English']] } }, controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } } } };
export default preview;
