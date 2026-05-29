<template>
  <img :class="['kitt-img']" :src="src" :alt="alt" />
</template>

<script lang="ts" setup>
import type { ImgHTMLAttributes } from 'vue';

// Note: All HTML attributes are optional
interface Props extends /* @vue-ignore */ ImgHTMLAttributes {
  src: string;
  alt: string;
}

withDefaults(defineProps<Props>(), {
  src: 'path/to/source',
  alt: 'alternate text'
});
</script>

<style lang="scss">
@use './Image';
</style>
