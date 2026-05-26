<template>
  <a :class="['kitt-link']" :href="href" :target="target">
    <slot v-if="$slots.default"></slot>
    <span v-else-if="typeof content === 'string'" v-html="content"></span>
    <template v-else>
      <component :is="content" v-bind="content?.bind" />
    </template>
  </a>
</template>

<script setup lang="ts">
import type { Component, AnchorHTMLAttributes } from 'vue';

interface Props extends /* @vue-ignore */ AnchorHTMLAttributes {
  /* required attributes */
  href: string;
  target: string;
  /* optional attributes */
  content?: string | Component | undefined;
}

withDefaults(defineProps<Props>(), {
  href: '#',
  target: '_blank',
  content: undefined
});
</script>

<style lang="scss">
@use './Link';
</style>
