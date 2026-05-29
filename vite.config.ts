import { copyFileSync, readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';
import dts from 'unplugin-dts/vite';

export default defineConfig({
  cacheDir: 'cache/.vite',
  // publicDir is used by storybook => 'src/assets/'
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
         * Note:
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
        // copy global CSS files from src to dist
        copyFileSync(resolve(__dirname, './src/style.css'), resolve(__dirname, './dist/style.css'));
        copyFileSync(resolve(__dirname, './src/vars.css'), resolve(__dirname, './dist/vars.css'));
        /**
         * Handle Mukta font-face.css file
         *
         * Read file content and replace CSS property
         * src: url('./font.woff2 => ./storybook/assets/fornt.woff2') format('woff2')
         */
        const fontFace = readFileSync(resolve(__dirname, './src/assets/font-face.css'), {
          encoding: 'utf8',
          flag: 'r'
        }).replace(/src: url\(\'\.(.*?)\'/g, "src: url('./storybook/assets$1'");
        // write new font-face.css file in dist/ directory
        writeFileSync(resolve(__dirname, './dist/font-face.css'), fontFace, {
          encoding: 'utf8',
          flag: 'w'
        });
        // exit process
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
    target: 'es2016',
    minify: 'terser',
    terserOptions: {
      ecma: 2016,
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
