import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { default as Headline } from './Headline.vue';
import i18n from './Headline-i18n.json';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof Headline> = {
  title: 'Components/Headline',
  component: Headline,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: String(`
          The Headline component contains the \`<h1>\` to \`<h6>\` tags and they are used to define HTML headings.
          \`<h1>\` defines the most important heading. \`<h6>\` defines the least important heading.
          <br>
          <br>
          The Headline component has two required attribute:
          <br>
          \`tag\` - Specifies the tag h1, h2, h3, h4, h5, or h6<br>
          \`text\` - Specifies the text that is displayed
          <br>
          <br>
          Note: Only use one \`<h1>\` per page - this should represent the main heading/subject for the whole page. Also, do not skip heading levels - start with \`<h1>\`, then use \`<h2>\`, and so on.
          <br>
          <br>
          <a href="https://www.w3schools.com/tAGS/tag_button.asp" target="_blank">Additional optional attributes</a>
        `)
          .replace(/\s+/g, ' ')
          .trim()
      }
    }
  },
  argTypes: {
    tag: { control: 'select', options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }
  },
  args: {
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  }
};

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  name: 'Headline',
  args: {
    tag: 'h1',
    text: i18n.text
  }
};
