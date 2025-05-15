---
outline: [1,4]
---
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
## VitePress中的图片路径处理机制
### 一、VitePress中的静态资源处理原则
首先我们要明白静态资源在VitePress中不同文件夹下的处理原则：
#### 1. public目录的特殊地位
- 自动复制 : public目录下的文件会被原样复制到构建输出的根目录下
- 无需编译 : 这些文件不会经过编译和打包处理
- 路径保持 : 目录结构会在构建后保持不变
#### 2. 其他目录下的资源处理
- 需要编译 : 非public目录下的资源文件(如assets目录)需要经过编译和打包
- 不会自动复制 : 这些文件不会自动复制到构建输出目录
- 需要特殊引用 : 通常需要使用import语句或其他方式引入

### 二、图片路径引用规则
#### 1. Markdown文件中的图片引用
- 简化路径 : 可以使用不带仓库名的路径，如`/assets/image.jpg`
- 自动处理 : VitePress会自动添加base前缀
- 完整路径 : 也可以使用带仓库名的完整路径，如`/doc-demo/assets/image.jpg`
#### 2. Vue组件中的图片引用
- 特殊情况 : 在Vue组件中(如团队页面)，<u>**路径不会自动添加base前缀**</u>
- 需要完整路径 : <u>**必须手动添加完整路径**</u>，如`/doc-demo/assets/夏娜.jpg`
- 原因 : Vue组件中的静态字符串不会被VitePress的路径处理机制处理

::: tip
这也是为什么`config.mjs`里配置好`base`属性后例如Logo的路径不加仓库前缀`/doc-demo/`也能正常显示，但md文件里自定义page中写组件时，组件里的路径得加上的原因。
:::

### 三、GitHub Pages部署时的特殊考虑
#### 1. base路径设置
- 配置文件 : 在VitePress配置中设置`base: "/doc-demo/"`
- 开发环境 : 自动将`/assets/image.jpg`解析为正确的本地路径
- 生产环境 : 自动将`/assets/image.jpg`转换为`/doc-demo/assets/image.jpg`
#### 2. 路径解析机制
- 不带仓库名 : VitePress会在构建时自动添加base前缀
- 带仓库名 : 已经包含完整路径，也能正确解析

### 四、最佳实践建议
#### 1. 资源存放位置和路径写法选择
- 推荐做法 : 将所有静态资源放在`public/assets`目录下
- 引用方式 : 一般直接通过`/assets/image.jpg`引用,不加仓库名（虽然加也不会报错）,这样在更换`base`路径后不用一个个修改；组件中引用时，如果资源在`public`目录下，引用时得使用`/doc-demo/assets/夏娜.jpg`这样加了仓库前缀的，如果资源不在`public`目录下，引用时可能得使用import语句引入，如`import img from '@/assets/image.jpg'`
- 优势 : 确保在本地开发和GitHub Pages部署中都能正常显示

#### 2. 特殊情况处理
- Vue组件中 : 使用完整路径(`/doc-demo/assets/image.jpg`)
- 替代方案 : 使用相对路径导入图片(在Vue组件中使用 import 语句)
- 避免使用 : GitHub原始链接(有流量限制、大小限制、加载速度慢)

### 五、问题解决方案
如果遇到图片无法显示的问题，可以尝试以下解决方案:

1. 检查图片是否放在正确的目录(public)
2. 确认路径引用方式是否正确
3. 在Vue组件中使用完整路径或import语句
4. 考虑使用专业的图床服务或CDN服务