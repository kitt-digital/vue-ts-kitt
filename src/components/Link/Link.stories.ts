import { shallowRef } from 'vue';
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
          The \`<a>\` tag defines a hyperlink, which is used to link from one page to another. The most
          important attribute of the \`<a>\` element is the \`href\` attribute, which indicates the link\'s
          destination. Serveral elements can be used as the \`content\` of the \`<a>\` element, such as
          \`text\`, \`images\`, or other \`HTML elements\` or \`Vue components/modules\`.
          <br>
          <br>
          <strong>Passing a component to the Link</strong>
          <br>
          <code><br>
          \`<script setup lang="ts">\`<br>
          &nbsp;&nbsp;import { Link } from 'vue-ts-kitt'<br>
          &nbsp;&nbsp;import { Image } from 'vue-ts-kitt'<br>
          \`</script>\`<br>
          <br>
          \`<template>\`<br>
          &nbsp;&nbsp;\`<div class="greetings">\`<br>
          &nbsp;&nbsp;&nbsp;&nbsp;\`<h1>\`You’ve successfully created a project with\`</h1>\`<br>
          &nbsp;&nbsp;&nbsp;&nbsp;\`<Link :content="{ ...Image, bind: { src: '/src/assets/ai-generated-600x343.jpg', alt: 'alt text' } }"></Link>\`<br>
          &nbsp;&nbsp;\`</div>\`<br>
          \`</template>\`<br>
          </code><br>
          <br>
          More attributes can be added with the \`htmlAttributes\` object.
          <br>
          <a href="https://www.w3schools.com/tAGS/tag_a.asp" target="_blank">more information</a>
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
  args: {
    content: i18n.content,
    htmlAttributes: {
      href: i18n.htmlAttributes.href,
      target: i18n.htmlAttributes.target
    }
  }
};

import { default as Image } from '@/components/Image/Image.vue';
import ImageI18n from '@/components/Image/Image-i18n.json';
export const Secondary: Story = {
  name: 'Image',
  args: {
    content: shallowRef({
      ...Image,
      bind: {
        src: ImageI18n.src,
        alt: ImageI18n.alt
      }
    }),
    htmlAttributes: {
      href: i18n.htmlAttributes.href,
      target: i18n.htmlAttributes.target
    }
  }
};
