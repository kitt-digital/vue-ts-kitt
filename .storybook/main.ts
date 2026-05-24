import type { StorybookConfig } from '@storybook/vue3-vite';
import { UserConfig, PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
// Use process.env.NODE_ENV to check if we are in development or production mode
const config: StorybookConfig = {
  stories: ['../src/docs/**/*.mdx', '../src/components/**/*.stories.ts'],
  addons: ['@storybook/addon-links', '@storybook/addon-docs'],
  staticDirs: [{ from: '../src/assets', to: '/assets' }],
  framework: {
    name: '@storybook/vue3-vite',
    options: {
      docgen: false
    }
  },
  core: {
    builder: {
      name: '@storybook/builder-vite',
      options: {
        viteConfigPath: 'vite.config.js'
      }
    }
  },
  viteFinal: (config: UserConfig) => {
    /**
     * Remove the dts plugin to avoid that
     * Storybook creates TS types. Otherwise
     * the dts plugin runs twice with two different
     * configurations in the GitHub CI/CD pipeline.
     *
     * Remove the Vue plugin to set custom options for Storybook.
     * Remove the ClosePlugin to prevent running twice in the GitHub CI/CD pipeline.
     */
    config.plugins = (config.plugins as PluginOption[])?.filter((plugin: PluginOption) => {
      const name = (plugin as any)?.name;
      return name !== 'unplugin-dts' && name !== 'vite:vue' && name !== 'ClosePlugin';
    });
    // reconfigure plugins
    config.plugins = [vue(), ...config.plugins];
    /**
     * Set publicDir to false in the vite config
     * to avoid that storybook creates another copy
     * of the public directory in the dist folder.
     * All public files will be already copied to the
     * dist/storybook/assets directory by storybook itself.
     */
    config.publicDir = false;
    // reconfigure build options for storybook
    config.build = {
      ...config.build,
      copyPublicDir: false,
      target: 'esnext',
      // minify: false for debugging purposes
      minify: true,
      // disable css code splitting to avoid that storybook creates multiple css files in the dist folder
      cssCodeSplit: false,
      rolldownOptions: {
        ...config?.build?.rolldownOptions,
        output: {
          entryFileNames: `[name].js`,
          chunkFileNames: `[name].js`,
          assetFileNames: `[name].[ext]`,
          globals: {
            vue: 'Vue'
          },
          manualChunks: moduleId => {
            if (moduleId.includes('node_modules')) {
              return `vendor/${moduleId.substring(moduleId.lastIndexOf('/') + 1).replace(/\.js/g, '')}`;
            }
            if (moduleId.includes('stories')) {
              return `stories/${moduleId.substring(moduleId.lastIndexOf('/') + 1).replace(/\.stories|\.js|\.ts/g, '')}`;
            }
            return null;
          }
        }
      }
    };

    return config;
  }
};

export default config;
