import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { default as Image } from './Image.vue';
import i18n from './Image-i18n.json';

const meta: Meta<typeof Image> = {
  title: 'Components/Image',
  component: Image,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: String(`
          The Image component is based on an \`<img>\` tag, which creates a holding space for the referenced image.
          Images are not technically inserted into a web page; images are linked to web pages.
          <br>
          <br>
          The Image component has two required attributes:
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

export const Primary: Story = {
  name: 'Image',
  args: {
    src: i18n.src,
    alt: i18n.alt
  }
};
