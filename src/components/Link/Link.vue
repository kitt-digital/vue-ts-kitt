<template>
  <a v-bind="{...htmlAttributes, ...$attrs}" :class="['kitt-link']" :href="href" :target="target">
    <slot v-if="$slots.default"></slot>
    <span v-else-if="typeof content === 'string'" v-html="content"></span>
    <template v-else>
      <component :is="content" v-bind="content?.bind" />
    </template>
  </a>
</template>

<script setup lang="ts">
import type { Component, AnchorHTMLAttributes } from 'vue';

interface Props {
  href: string;
  target: string;
  content?: string | Component | undefined;
  htmlAttributes?: AnchorHTMLAttributes;
}

withDefaults(defineProps<Props>(), {
  href: '#',
  target: '_blank',
  content: undefined,
  htmlAttributes: () => ({
    href: '#',
    target: '_blank'
  })
});
</script>

<style lang="scss">
@use './Link';
</style>
