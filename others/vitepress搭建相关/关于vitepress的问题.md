# 我想问一下，如果想自定义布局页面，使用vue写一个页面，vitepress能做到吗？在此基础上还能使用如Bulma这样的CSS库吗？

## VitePress自定义布局与CSS库集成
是的，VitePress完全支持自定义布局页面并使用Vue来编写。VitePress的一个强大特性就是它允许你完全控制页面的布局和设计。

## 自定义布局的方法
1. 创建自定义布局组件 ：
   在 .vitepress/theme 目录下创建你的Vue组件。
2. 注册布局 ：
   在 .vitepress/theme/index.js 中注册你的布局组件：
   ```
    import DefaultTheme from 'vitepress/theme'
    import MyLayout from './MyLayout.vue'

    export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.component('MyLayout', MyLayout)
    }
    }
   ```
3. 在Markdown中使用：在任何Markdown文件的frontmatter中指定你的布局：
   ```
    ---
    layout: MyLayout
    ---
   ```
## 使用CSS库
是的，你可以在VitePress中使用任何CSS库，包括Bulma。有几种方式可以集成：
1. 通过NPM安装:
   ```
    npm install bulma
   ```

然后在`.vitepress/theme/index.js`中导入：
   ```
    import 'bulma/css/bulma.min.css'
   ```

2. 通过CDN引入: 在`.vitepress/theme/index.js`或自定义组件中添加：
   ```
    // 在enhanceApp中
    enhanceApp({ app, router, siteData }) {
    // 添加到head
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css'
    document.head.appendChild(link)
    }
   ```

3. 自定义CSS：在`.vitepress/theme/custom.css`中引入Bulma并添加你的自定义样式。

# vitepress自带vue吗？不需要安装吗？
VitePress 确实自带 Vue，不需要单独安装 Vue。VitePress 是基于 Vite 和 Vue 3 构建的静态站点生成器，它在安装时会自动将 Vue 作为依赖项安装。
- 当你安装 VitePress（通过 npm install -D vitepress 或其他包管理器）时，它会自动安装 Vue 3 作为依赖
- VitePress 允许你在 Markdown 文件中直接使用 Vue 组件和语法
- 你可以在 .vitepress/theme 目录下创建自定义的 Vue 组件
- 对于自定义布局，你可以创建 Vue 组件并在 .vitepress/theme/index.js 中注册它们
所以，你可以直接在 VitePress 项目中使用 Vue 的所有功能，包括创建自定义布局页面，而不需要额外安装 Vue。

# 为什么我按VitePress官方文档复制粘贴的团队页写法的代码会报错呢？
先看看源代码：
```
---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  ...
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      The development of VitePress is guided by an international
      team, some of whom have chosen to be featured below.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members />
</VPTeamPage>
```

你可能注意到了，`members`这一串后面有一个省略号`...`， 这只是教学的代替，把它删掉就行，因为不符合语法。

# 为什么我像`./assets/结城希亚.jpg`这样写之后推送到github pages部署出来，团队成员头像无法正常显示呢？
我一开始以为是像其它图片那样在GitHub Pages上需要考虑仓库名称作为基础路径，在图片路径前面加上仓库名称，就像这样：
```
avatar: '/doc-demo/DailyRecord/assets/结城希亚.jpg',
```
但是我尝试了很多次都不能正常显示，最后试着直接使用仓库图片原始链接，就可以正常显示了。
但是这样做会有很多缺点，比如：
- GitHub有流量限制
- 对图片大小有限制
- 不是专门图床服务，可能加载速度会很慢

建议尝试的是图床服务或者CDN服务。
