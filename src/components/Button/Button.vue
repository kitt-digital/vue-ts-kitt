<template>
  <button
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

// Note: All HTML attributes are optional
interface Props extends /* @vue-ignore */ ButtonHTMLAttributes {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  text: string;
}

withDefaults(defineProps<Props>(), {
  primary: true,
  size: 'medium',
  text: i18n.text
});
</script>

<style lang="scss">
@use './Button';
</style>
