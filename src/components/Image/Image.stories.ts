import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { default as Image } from './Image.vue';
import i18n from './Image-i18n.json';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof Image> = {
  title: 'Components/Image',
  component: Image,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: String(`
          Images are not technically inserted into a web page; images are linked to web pages.
          The \`<img>\` tag creates a holding space for the referenced image.
          <br>
          <br>
          The \`<img>\` tag has two required attributes:
          <br>
          \`src\` - Specifies the path to the image<br>
          \`alt\` - Specifies an alternate text for the image, if the image for some reason cannot be displayed
          <br>
          <br>
          <a href="https://www.w3schools.com/tAGS/tag_a.asp" target="_blank">Additional optional attributes</a>
          <br>
        `)
          .replace(/\s+/g, ' ')
          .trim()
      }
    }
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
  name: 'Image',
  args: {
    src: i18n.src,
    alt: i18n.alt
  }
};
