import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { default as Link } from './Link.vue';
import i18n from './Link-i18n.json';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: String(`
          The Link component is based on an \`<a>\` tag, which defines a hyperlink used to link from one page to another.
          The most important attribute of the \`<a>\` element is the \`href\` attribute, which indicates the link\'s
          destination. Serveral elements can be used as \`content\` for an \`<a>\` element, such as \`text\`, \`images\`,
          or other \`HTML elements\` or \`Vue components/modules\`.
          <br>
          <br>
          The Link component has one required attribute:
          <br>
          \`href\` - Specifies the URL of the page the link goes to
          <br>
          <br>
          <a href="https://www.w3schools.com/tAGS/tag_a.asp" target="_blank">Additional optional attributes</a>
          <br>
          <br>
          <b>Passing a component to the Link (two options)</b>
          <br>
          <code><br>
          \`<script setup lang="ts">\`<br>
          &nbsp;&nbsp;import { Link } from 'vue-ts-kitt'<br>
          &nbsp;&nbsp;import { Image } from 'vue-ts-kitt'<br>
          \`</script>\`<br>
          <br>
          \`<template>\`<br>
          <b class="kitt-info">// #1</b><br>
          \`<Link :href="'#'" :target="'_blank'">\`<br>
          &nbsp;&nbsp;\`<Image :src="'images/ai-generated-600x343.jpg'" :alt="'alt text'" />\`<br>
          \`</Link>\`<br>
          <b class="kitt-info">// Or #2</b><br>
          \`<Link\`<br>
          &nbsp;&nbsp;:href="'#'"<br>
          &nbsp;&nbsp;:target="'_blank'"<br>
          &nbsp;&nbsp;:content="{ ...Image, bind: { src: 'images/ai-generated-600x343.jpg', alt: 'alt text' } }"<br>
          &nbsp;&nbsp;:html-attributes="{ rel: "alternate" }"
          \`></Link>\`<br>
          \`</template>\`<br><br>
          </code>
          <br>
          <br>
          Note: If you include a component as content object, you have to use the \`content.bind\` key to pass \`Props\` to the component.
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
  name: 'Text',
  args: {
    href: i18n.href,
    target: i18n.target,
    content: i18n.content
  }
};

import { default as Image } from '@/components/Image/Image.vue';
import ImageI18n from '@/components/Image/Image-i18n.json';
export const Secondary: Story = {
  name: 'Image',
  args: {
    href: i18n.href,
    target: i18n.target,
    content: {
      ...Image,
      bind: {
        src: ImageI18n.src,
        alt: ImageI18n.alt
      }
    }
  }
};
