import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { default as Button } from './Button.vue';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
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
  args: {}
};

export default meta;
type Story = StoryObj<typeof meta>;

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
