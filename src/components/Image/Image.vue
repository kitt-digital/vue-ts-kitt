<template>
  <img v-bind="{...htmlAttributes, ...$attrs}" :class="['kitt-img']" :src="src" :alt="alt">
</template>

<script setup lang="ts">
import type { ImgHTMLAttributes } from 'vue';

interface Props {
  src: string;
  alt: string;
  htmlAttributes?: ImgHTMLAttributes;
}

withDefaults(defineProps<Props>(), {
  src: 'path/to/source',
  alt: 'alternate text',
  htmlAttributes: () => ({})
});
</script>

<style lang="scss" scoped>
@use './Image';
</style>
