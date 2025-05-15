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

总的来说，如下所述：

## 如果把图片放在public下，是可以访问到并正常显示的，但是为什么像之前那样放在别的文件夹下的assets文件夹下就不能正常访问并显示呢？
这是因为VitePress默认情况下会将public文件夹下的文件作为静态资源进行处理，而不会对其进行编译和打包。而assets文件夹下的文件是需要经过编译和打包的，所以无法直接访问。
## 为什么public目录下的图片可以正常显示
public 目录在VitePress中有特殊地位：

1. public目录的特殊处理 ： public 目录下的文件会被原样复制到构建输出的根目录下
2. 路径解析方式 ：引用时使用根路径（以 / 开头），如 /assets/image.jpg
3. 无需base前缀 ：VitePress会自动处理base路径前缀（如 /doc-demo/ ）
## 为什么其他目录下的图片无法显示
当图片放在其他目录（如`DailyRecord/assets/`）时：

1. 不会自动复制 ：这些文件不会自动复制到构建输出目录
2. 路径解析问题 ：VitePress不会自动处理这些路径
3. base路径问题 ：在GitHub Pages上，还需要考虑仓库名称作为base路径
## 解决方案
1. 推荐做法 ：将所有静态资源放在`public`目录下，通过`/assets/image.jpg`引用
2. 替代方案 ：使用相对路径导入图片（在Vue组件中使用`import`语句）
3. GitHub原始链接 ：使用`https://github.com/username/repo/blob/master/path/to/image.jpg?raw=true`格式的链接
最佳实践是将所有静态资源集中放在`public/assets`目录下，这样可以确保在本地开发和GitHub Pages部署中都能正常显示。

#  为什么/assets/image.jpg和/doc-demo/assets/image.jpg的图片路径都可以正常显示呢？
## VitePress中的图片路径解析机制
在VitePress中， /assets/image.jpg 和 /doc-demo/assets/image.jpg 这两种路径都能正常显示的原因与VitePress的基础路径（base path）处理机制有关。

## 自动处理base路径
VitePress会自动处理基础路径前缀。当你在配置文件中设置了 base: "/doc-demo/" 后：

1. 开发环境 ：VitePress会自动将 /assets/image.jpg 解析为正确的本地路径
2. 生产环境 ：VitePress会自动将 /assets/image.jpg 转换为 /doc-demo/assets/image.jpg
## 为什么两种写法都可以
- 不带仓库名的路径 （ /assets/image.jpg ）：VitePress会在构建时自动添加base前缀
- 带仓库名的路径 （ /doc-demo/assets/image.jpg ）：已经包含了完整路径，也能正确解析
## 最佳实践
推荐使用不带仓库名的写法（ /assets/image.jpg ），因为：

1. 代码更简洁
2. 如果仓库名变更，不需要修改所有图片路径
3. 在本地开发和生产环境都能正常工作
这种自动处理机制是VitePress的一个便利特性，让你不必担心基础路径的问题。