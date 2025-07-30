# Tailwind CSS V4 与 VitePress 兼容性修复

## 问题描述

Tailwind CSS V4 在 VitePress 项目中本地开发时正常工作，但在 GitHub Pages 部署后样式丢失。这是因为 Tailwind CSS V4 使用了原生 CSS 层（`@layer`），而 VitePress 的默认样式没有使用层，导致样式优先级冲突。

根据 [VitePress Issue #4425](https://github.com/vuejs/vitepress/issues/4425) 的讨论，这个问题是由于未分层的样式（VitePress）比分层样式（Tailwind CSS V4）具有更高的优先级。

## 解决方案

本项目实现了一个自动化修复方案，通过以下步骤解决问题：

1. 创建一个补丁文件，将 VitePress 的默认样式包装在 `@layer vp-base` 中
2. 开发一个补丁应用脚本，在构建前自动应用补丁
3. 修改构建脚本，确保在构建前应用补丁
4. 更新 GitHub Actions 工作流，确保在 CI/CD 环境中正确应用补丁

## 文件说明

- `patches/vitepress-base-css-layer.patch`: 补丁文件，将 VitePress 的 base.css 包装在 CSS 层中
- `apply-patches.js`: 补丁应用脚本，支持 Windows 和 Linux 环境
- `.vitepress/theme/css/vitepress-layer-fix.css`: CSS 层顺序定义文件
- `.vitepress/theme/css/custom.css`: 修改后的 Tailwind CSS 引入文件

## 使用方法

### 本地开发

正常使用 `pnpm run docs:dev` 命令启动开发服务器，补丁会自动应用。

### 手动应用补丁

如果需要手动应用补丁，可以运行：

```bash
pnpm run apply-patches
```

### 部署到 GitHub Pages

GitHub Actions 工作流已经更新，会在构建过程中自动应用补丁。

## 技术细节

### CSS 层顺序

Tailwind CSS V4 使用以下层顺序：

```css
@layer theme, base, components, utilities;
```

我们添加了一个额外的层 `vp-base`，并确保它在 Tailwind 的层之后应用：

```css
@layer theme, base, components, utilities, vp-base;
```

### 补丁实现

补丁将 VitePress 的 base.css 文件中的所有样式包装在 `@layer vp-base { ... }` 中，并适当调整缩进。

### 兼容性

此修复方案已在以下环境中测试：

- 本地开发环境（Windows）
- GitHub Pages 部署环境（Ubuntu）

## 参考资料

- [VitePress Issue #4425: Support native CSS layers](https://github.com/vuejs/vitepress/issues/4425)
- [Tailwind CSS V4 文档：CSS 层](https://tailwindcss.com/docs/layers)
- [MDN: CSS @layer](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer)