<template>
  <img :class="['kitt-img']" :src="src" :alt="alt" />
</template>

<script setup lang="ts">
import type { ImgHTMLAttributes } from 'vue';

interface Props extends /* @vue-ignore */ ImgHTMLAttributes {}

withDefaults(defineProps<Props>(), {
  src: 'path/to/source',
  alt: 'alternate text',
  htmlAttributes: () => ({})
});
</script>

<style lang="scss">
@use './Image';
</style>
