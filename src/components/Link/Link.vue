<template>
  <a v-bind="{...htmlAttributes, ...$attrs}" :class="['kitt-link']">
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
  content?: string | Component | undefined;
  htmlAttributes?: AnchorHTMLAttributes;
}

withDefaults(defineProps<Props>(), {
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
