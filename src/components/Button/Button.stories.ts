import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { default as Button } from './Button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: String(`
          The Button component is based on the \`<button>\` tag, which defines a clickable button.
          Specify the \`type\` attribute for the Button component, to tell browsers what type of button it is (button, reset, submit)
          <br>
          <br>
          The Button component has one required attribute:
          <br>
          \`text\` - Specifies the text that is displayed
          <br>
          <br>
          <a href="https://www.w3schools.com/tAGS/tag_button.asp" target="_blank">Additional optional attributes</a>
          <br>
        `)
          .replace(/\s+/g, ' ')
          .trim()
      }
    }
  },
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] }
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
  name: 'Button',
  args: {
    text: 'Button',
    secondary: false,
    size: 'medium',
    pill: false,
    outlineStyle: false
  }
};

export const Pill: Story = {
  args: {
    text: 'Button',
    secondary: true,
    size: 'small',
    pill: true,
    outlineStyle: false
  }
};

export const OutlineStyle: Story = {
  args: {
    text: 'Button',
    secondary: true,
    size: 'large',
    pill: true,
    outlineStyle: true
  }
};
