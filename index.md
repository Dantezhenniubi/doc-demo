---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'Welcome to my Site!'
  text: "欢迎来到 DtZNB's 的开发记录！"
  tagline: 这是我的开发随笔~
  image:
    src: /assets/background.png
    alt: 背景图片
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples

features:
  - title: 力扣刷题
    # feature的详情
    details: 哎~找工作，还是找工作
    # feature的图标
    icon:
      src: /assets/leetcode.svg
    # 点击feature组件时的链接，可以是内部链接，也可以是外部链接
    link: https://leetcode.cn/

  - title: 一纸简历
    details: (必须使用Chrome浏览器)一款在线简历制作工具，支持多种简历模板，可根据需求进行自定义
    icon:
      src: /assets/一纸简历.svg
    link: https://cv.devtool.tech/

  - title: 开发者武器库
    details: 一款开发者工具合集网站，提供多种开发者工具。
    icon:
      src: /assets/开发者武器库.svg
    link: https://devtool.tech/

  - title: 宝塔服务器面板
    details: 一款轻量级的服务器面板软件，支持Linux、Windows、MacOS等操作系统
    icon:
      src: /assets/宝塔.svg
    link: https://www.bt.cn/new/index.html

  - title: Apifox
    details: 一款API文档管理工具，支持API管理、API测试、API文档生成等功能
    icon:
      src: /assets/apifox.svg
    link: https://apifox.com/?utm_source=shanyue-blog

  - title: 青云
    details: 一款云服务提供商，提供多种云服务，如云服务器、云数据库、云存储等
    icon:
      src: /assets/青云.svg
    link: https://www.qingcloud.com/
---

## 感觉不够看？
:::raw
<div class="bg-blue-500 text-white p-4 rounded-lg">
  This is a block styled with Tailwind CSS
</div>
:::

:::raw
<div class="tw:bg-blue-500 tw:text-white tw:p-4 tw:rounded-lg">
  This is a block styled with Tailwind CSS
</div>
:::

<div class="demo1 test-pulse ml-29 shadow-xs">正在努力添加新内容!</div>

<div class="max-w-sm mx-auto my-6 rounded-xl shadow-md overflow-hidden">
  <div class="p-8">
    <div class="text-lg font-medium text-gray-900 mb-2 bg-red-500">卡片标题</div>
    <p class="text-neon-blue interactive-card">
      这是一个使用Tailwind CSS创建的漂亮卡片组件。
    </p>
    <div class="mt-6 flex space-x-4 ">
      <button class="px-4 py-2 !bg-gradient-to-r !from-red-500 !to-gray-400 !dark:from-blue-500">
        点击按钮
      </button>
      <br />
      <button class="!bg-red-500">
        自定义按钮
      </button>
      <br />
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ring-3 ring-blue-500">
        一个按钮
      </button>
      <br />
      <br />
      <button class="cs-button text-shadow-lg text-6xl ">
      测试按钮
      </button>
    </div>
  </div>
</div>

<style>
  .demo1 {
    padding: 5rem 2rem;
    background-color: rgb(var(--color-primary));
    color: white;
    font-weight: bold;
    border-radius: 1.5rem;
    text-align: center;
    cursor: pointer;
    transition: all 3.3s ease;
    position: relative;
    overflow: hidden;
  }

  .cs-button {
    background-color: rgb(var(--color-primary));
  }
</style>
