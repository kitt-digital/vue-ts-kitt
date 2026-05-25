import { copyFile } from 'fs';
import { resolve } from 'path';
import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';
import dts from 'unplugin-dts/vite';

export default defineConfig({
  cacheDir: 'cache/.vite',
  // publicDir is used by storybook
  publicDir: false,
  json: {
    stringify: true
  },
  plugins: [
    vue(),
    dts({
      outDirs: ['src/@types', 'dist'],
      exclude: ['**/*.stories.ts'],
      cleanVueFileName: true,
      staticImport: true,
      beforeWriteFile: (filePath, content) => {
        /**
         * Replace multiple whitespaces for
         * single whitespace to reduce the file size
         * 
         * NOTE:
         * filePath order is related to outDirs order,
         * only single content is given for both outDirs
         */
        if (filePath.includes('dist/')) {
          content = content.replace(/\s+/g, ' ');
        }
        return { filePath, content };
      }
    }),
    {
      // custom plugin to call scripts after the build is finished
      name: 'ClosePlugin',
      // use this to catch the end of a build without errors
      closeBundle(id) {
        // copy the styles.css file from src to dist after the build is finished
        copyFile(
          resolve(__dirname, './src/style.css'),
          resolve(__dirname, './dist/style.css'),
          err => {
            if (err) throw err;
            console.log('File was copied to destination');
          }
        );
        process.exit(0);
      }
    }
  ],
  resolve: {
    extensions: ['.md', '.mdx', '.ts', 'tsx', '.js', '.jsx', '.vue', '.json'],
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    commonjsOptions: {
      esmExternals: true
    },
    terserOptions: {
      ecma: 2020,
      format: {
        comments: false
      }
    },
    emptyOutDir: true,
    reportCompressedSize: true,
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      fileName: 'index',
      formats: ['es']
    },
    cssCodeSplit: true,
    rolldownOptions: {
      external: ['vue'],
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: asset => {
          if (asset.name && asset.name.endsWith('.css')) {
            return `${asset.name.replace(/\w+\.css$/, 'style.css')}`;
          }
          return `[name].[ext]`;
        },
        globals: {
          vue: 'Vue'
        },
        manualChunks: moduleId => {
          if (moduleId.includes('components')) {
            const modulePath = moduleId.match(/components\b\/.*?\.vue/g)?.[0];
            return modulePath ? `${modulePath.replace(/\w+\.vue$/g, '')}index` : null;
          }
          return null;
        }
      }
    }
  }
});
