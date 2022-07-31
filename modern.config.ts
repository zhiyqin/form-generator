import { defineConfig } from '@modern-js/app-tools';
// import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

// https://modernjs.dev/docs/apis/config/overview
export default defineConfig({
  plugins: [
    new MonacoWebpackPlugin({
      languages: ['javascript', 'typescript', 'html', 'css', 'json'],
    }),
  ],
});
