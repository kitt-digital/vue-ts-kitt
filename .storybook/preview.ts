import type { Preview } from '@storybook/vue3-vite';
// @ts-ignore
import './style.css';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    options: {
      storySort: {
        order: ['Introduction', 'Components & Modules', 'CSS Declarations', 'Components']
      }
    }
  }
};

export default preview;
