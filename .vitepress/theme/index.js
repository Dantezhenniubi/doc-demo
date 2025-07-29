// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import DefaultTheme from 'vitepress/theme';
// 确保 Tailwind CSS 在其他样式之前引入
import './css/custom.css'; // tailwindcss 引入
import './style.css';
import TailwindCard from './components/TailwindCard.vue';

// import 'bulma-prefix/css/bulma.prefixed.min.css'
// import 'bulma/versions/bulma-prefixed.scss'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.component('TailwindCard', TailwindCard);
  },
};
