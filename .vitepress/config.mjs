import { defineConfig } from 'vitepress'
// 自动生成侧边栏
import { set_sidebar } from './utils/auto_sidebar.mjs';


export default defineConfig({
  head: [["link", { rel: "icon", href: "/Logo.svg" }]], // 标签页图标
  title: "Welcome to my Site!",
  titleTemplate: ":title | DtZNB's Blog",
  description: "DtZNB's Blog",
  themeConfig: {
    outlineTitle: "目录",
    // `'deep'` 与 `[2, 6]` 相同，将显示从 `<h2>` 到 `<h6>` 的所有标题。
    outline: [2, 6],
    logo: "/Logo.svg", // 导航栏logo
    siteTitle: "DtZNB's 个人知识库",
    nav: [
      { text: "Home", link: "/" },
      { text: "示例", link: "/markdown-examples" },
      { text: "我的GitHub", link: "https://github.com/Dantezhenniubi" },
      { text: "个人记录", link: "/DailyRecord/" },
      {
        text: "更多",
        items: [
          {
            text: "个人博客",
            items: [
              { text: "关于我", link: "/about" },
              { text: "留言板", link: "/message" },
              { text: "友情链接", link: "/friend" },
            ],
          },
          { text: "两边栏演示", link: "/两边栏演示" },
          { text: "关于我", link: "/about" },
          { text: "留言板", link: "/message" },
          { text: "友情链接", link: "/friend" },
        ],
      },
    ],

    // sidebar: [
    //   {
    //     text: "官方示例",
    //     collapsed: true,
    //     items: [
    //       { text: "Markdown示例", link: "/markdown-examples" },
    //       { text: "Runtime API示例", link: "/api-examples" },
    //     ],
    //   },
    //   {
    //     text: "个人日志",
    //     collapsed: true,
    //     items: [
    //       { text: "实习日志", link: "/markdown-examples" },
    //       { text: "开发日志", link: "/api-examples" },
    //     ],
    //   },
    // ],

    // sidebar: {
    //   "/DailyRecord/": set_sidebar("/DailyRecord"),
    //   "/": [
    //     {
    //       text: "官方示例",
    //       collapsed: true, // 折叠
    //       items: [
    //         { text: "Markdown示例", link: "/markdown-examples" },
    //         { text: "Runtime API示", link: "/api-examples" },
    //       ],
    //     },
    //   ],
    // },
    sidebar: false, // 关闭侧边栏
    aside: "left", // 设置右侧文章导航左侧显示

    socialLinks: [
      { icon: "github", link: "https://github.com/Dantezhenniubi" },
      {
        icon: {
          svg: '<svg t="1743266031366" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1392" width="200" height="200"><path d="M0 0h1024v1024H0z" fill="#FFFFFF" p-id="1393"></path><path d="M288 96a192 192 0 1 0 0 384H448a32 32 0 0 0 32-32v-160a192 192 0 0 0-192-192zM448 544h-160a192 192 0 1 0 192 192V576a32 32 0 0 0-32-32zM736 96a192 192 0 0 0-192 192V448a32 32 0 0 0 32 32h160a192 192 0 0 0 0-384z" fill="#111111" p-id="1394"></path><path d="M736 544H576a32 32 0 0 0-32 32v160a192 192 0 1 0 192-192z" fill="#000000" p-id="1395"></path></svg>',
        },
        link: "https://github.com/Dantezhenniubi",
      },
      {
        icon: {
          svg: '<svg t="1743267335753" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1584" width="200" height="200"><path d="M832.093704 527.742313c0-176.643748-143.200078-319.843826-319.843826-319.843826s-319.843826 143.200078-319.843826 319.843826a15.992191 15.992191 0 0 0 15.992191 15.992192h607.70327a15.992191 15.992191 0 0 0 15.992191-15.992192z m-607.263484-15.992191c8.295949-151.546003 133.804666-271.867252 287.419658-271.867252s279.123709 120.321249 287.419658 271.867252z" fill="#979797" p-id="1585"></path><path d="M512.249878 511.750122m-511.750122 0a511.750122 511.750122 0 1 0 1023.500244 0 511.750122 511.750122 0 1 0-1023.500244 0Z" fill="#E6F0FC" p-id="1586"></path><path d="M784.11713 447.781357c0-132.995061-122.160351-239.88287-271.867252-239.88287s-271.867252 106.887809-271.867252 239.88287a15.992191 15.992191 0 0 0 15.992191 15.992191h511.750122a15.992191 15.992191 0 0 0 15.992191-15.992191z" fill="#154E84" p-id="1587"></path><path d="M273.066667 431.789165c9.425398-106.947779 112.515061-191.906296 239.183211-191.906295s229.757814 84.958516 239.183211 191.906295z" fill="#FFFFFF" p-id="1588"></path><path d="M240.382626 591.711079h543.734504v79.960956a143.929722 143.929722 0 0 1-143.929722 143.929722h-255.875061a143.929722 143.929722 0 0 1-143.929721-143.929722z" fill="#154E84" p-id="1589"></path><path d="M272.367008 623.695461v47.976574a111.945339 111.945339 0 0 0 111.945339 111.945339h255.875061a111.945339 111.945339 0 0 0 111.94534-111.945339v-47.976574z" fill="#FFFFFF" p-id="1590"></path><path d="M240.382626 527.742313h543.734504a63.968765 63.968765 0 0 1 0 127.937531h-543.734504a63.968765 63.968765 0 0 1 0-127.937531z" fill="#154E84" p-id="1591"></path><path d="M240.382626 559.726696a31.984383 31.984383 0 0 0 0 63.968765h543.734504a31.984383 31.984383 0 0 0 0-63.968765z" fill="#52ABE2" p-id="1592"></path><path d="M240.382626 559.726696a63.968765 63.968765 0 0 1 0-127.937531h543.734504a63.968765 63.968765 0 0 1 0 127.937531H581.546042l-59.700849 44.778136a15.992191 15.992191 0 0 1-19.19063 0l-59.700849-44.778136z" fill="#154E84" p-id="1593"></path><path d="M566.623328 530.940752a15.992191 15.992191 0 0 1 9.595315-3.198439h207.898487a31.984383 31.984383 0 0 0 0-63.968765h-543.734504a31.984383 31.984383 0 0 0 0 63.968765h207.898487a15.992191 15.992191 0 0 1 9.595315 3.198439l54.37345 40.780087z" fill="#FFC200" p-id="1594"></path></svg>',
        },
        link: "https://github.com/Dantezhenniubi",
      },
    ],

    // 搜索配置
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "取消",
            }
          }
        }
      }
    },


    // 底部配置
    footer: {
      message: "在因果的十字路口再会吧",
      copyright: "Copyright@ 2025 Dantezhenniubi",
    },
  },
});
