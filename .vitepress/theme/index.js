// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
// import DefaultTheme from 'vitepress/theme';
import DefaultTheme from 'vitepress/theme-without-fonts'; // 避免在构建输出中包含 Inter字体
import './style.css';
import './css/tailwind.css'; //tailwindcss 引入
import TailwindCard from './components/TailwindCard.vue';
import Linkcard from './components/Linkcard.vue';

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
    app.component('Linkcard', Linkcard);
  },
};
