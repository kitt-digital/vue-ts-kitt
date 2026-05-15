<template>
  <a v-bind="htmlAttributes" :class="['kitt-link']">{{ text }}</a>
</template>

<script setup lang="ts">
import i18n from './Link-i18n.json';
import type { LinkHTMLAttributes } from 'vue';

interface Props {
  text: string;
  htmlAttributes?: LinkHTMLAttributes;
}

withDefaults(defineProps<Props>(), {
  text: i18n.text,
  htmlAttributes: () => ({
    href: i18n.htmlAttributes.href,
    target: i18n.htmlAttributes.target,
    rel: i18n.htmlAttributes.rel
  })
});
</script>

<style lang="scss" scoped>
@use './Link';
</style>
