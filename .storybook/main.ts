import type { StorybookConfig } from '@storybook/vue3-vite';
import { UserConfig, PluginOption } from 'vite';

const config: StorybookConfig = {
  stories: ['../src/docs/**/*.mdx', '../src/components/**/*.stories.ts'],
  addons: [
    '@storybook/addon-links',
    '@chromatic-com/storybook',
    '@storybook/addon-docs'
  ],
  framework: {
    name: '@storybook/vue3-vite'
  },
  viteFinal: (config: UserConfig) => {
    /**
     * Remove the vite-plugin-dts to prevent
     * that Storybook creates TS types. Otherwise
     * the dts plugin runs twice with two different
     * configurations in the GitHub CI/CD pipeline.
     */
    config.plugins = (config.plugins as PluginOption[])?.filter(
      (plugin: PluginOption) => (plugin as any)?.name !== 'vite:dts'
    );

    return config;
  }
};

export default config;
