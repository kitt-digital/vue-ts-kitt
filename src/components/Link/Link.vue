<template>
  <a v-bind="{...htmlAttributes, ...$attrs}" :class="['kitt-link']">
    <span v-if="typeof content === 'string'" v-html="content"></span>
    <template v-else>
      <component :is="content" v-bind="content.bind" />
    </template>
  </a>
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import type { AnchorHTMLAttributes } from 'vue';

interface Props {
  content: string | Component;
  htmlAttributes?: AnchorHTMLAttributes;
}

withDefaults(defineProps<Props>(), {
  content: 'text',
  htmlAttributes: () => ({
    href: '#',
    target: '_blank'
  })
});
</script>

<style lang="scss">
@use './Link';
</style>
