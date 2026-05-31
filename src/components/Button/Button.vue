<template>
  <button
    :class="[
      'kitt-button',
      secondary ? 'kitt-button--secondary' : 'kitt-button--primary',
      size ? `kitt-button--${size}` : null,
      pill ? `kitt-button--pill` : null,
      outlineStyle ? `kitt-button--outline-style` : null
    ]"
  >
    {{ text }}
  </button>
</template>

<script lang="ts" setup>
import type { ButtonHTMLAttributes } from 'vue';
import i18n from './Button-i18n.json';

// Note: All HTML attributes are optional
interface Props extends /* @vue-ignore */ ButtonHTMLAttributes {
  secondary?: boolean;
  pill?: boolean;
  outlineStyle?: boolean;
  size?: 'small' | 'medium' | 'large';
  text: string;
}

withDefaults(defineProps<Props>(), {
  text: i18n.text
});
</script>

<style lang="scss">
@use './Button';
</style>
