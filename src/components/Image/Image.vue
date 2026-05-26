<template>
  <img :class="['kitt-img']" :src="src" :alt="alt" />
</template>

<script setup lang="ts">
import type { ImgHTMLAttributes } from 'vue';

interface Props extends /* @vue-ignore */ ImgHTMLAttributes {
  /* required attributes */
  src: string;
  alt: string;
  /* optional attributes */
}

withDefaults(defineProps<Props>(), {
  src: 'path/to/source',
  alt: 'alternate text'
});
</script>

<style lang="scss">
@use './Image';
</style>
