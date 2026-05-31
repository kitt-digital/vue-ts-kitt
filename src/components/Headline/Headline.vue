<template>
  <component :is="tag" :class="['kitt-headline']">{{ text }}</component>
</template>

<script lang="ts" setup>
import type { HTMLAttributes } from 'vue';
import i18n from './Headline-i18n.json';

// Note: All HTML attributes are optional
interface Props extends /* @vue-ignore */ HTMLAttributes {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  text: string;
}

withDefaults(defineProps<Props>(), {
  tag: 'h1',
  text: i18n.text
});
</script>

<style lang="scss">
@use './Headline';
</style>
