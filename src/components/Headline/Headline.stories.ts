import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { default as Headline } from './Headline.vue';
import i18n from './Headline-i18n.json';

const meta: Meta<typeof Headline> = {
  title: 'Components/Headline',
  component: Headline,
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
          You can also use optional
          <a href="https://www.w3schools.com/tAGS/ref_standardattributes.asp" target="_blank">global standard attributes</a>
          or
          <a href="https://www.w3schools.com/tAGS/ref_eventattributes.asp" target="_blank">event attributes</a>
        `)
          .replace(/\s+/g, ' ')
          .trim()
      }
    }
  },
  argTypes: {
    tag: { control: 'select', options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }
  },
  args: {}
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: 'Headline',
  args: {
    tag: 'h1',
    text: i18n.text
  }
};
