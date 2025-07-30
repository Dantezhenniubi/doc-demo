import { postcssIsolateStyles } from 'vitepress';

export default {
  plugins: [
    "@tailwindcss/postcss": {},
    postcssIsolateStyles({
      includeFiles: [/vp-doc\.css/, /base\.css/],
    }),
  ],
};
