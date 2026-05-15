<template>
  <button
    v-bind="htmlAttributes"
    class="kitt-button"
    :class="[
      'kitt-button',
      primary ? 'kitt-button--primary' : null,
      size ? `kitt-button--${size}` : null
    ]"
  >
    {{ text }}
  </button>
</template>

<script setup lang="ts">
import type { ButtonHTMLAttributes } from 'vue';
import i18n from './Button-i18n.json';

export interface Props {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  text: string;
  htmlAttributes?: ButtonHTMLAttributes;
}

withDefaults(defineProps<Props>(), {
  primary: true,
  size: 'medium',
  text: i18n.text,
  htmlAttributes: () => ({
    name: i18n.htmlAttributes.name,
    type: i18n.htmlAttributes.type as ButtonHTMLAttributes['type'],
    disabled: false
  })
});
</script>

<style lang="scss">
@use './Button';
</style>
