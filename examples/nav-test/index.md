# 导航测试（有index.md）

这是一个测试文件，用于演示导航栏自动生成功能。

## 说明

当文件夹中存在 `index.md` 文件时，导航栏将直接链接到该文件夹，自动加载 `index.md` 作为主页。

例如，当前文件夹 `nav-test` 包含 `index.md` 文件，因此在导航栏中会显示为直接链接：

```js
{
  text: "nav-test",
  link: "/examples/nav-test/"
}
```

这样用户点击导航项后，会直接加载当前页面。
