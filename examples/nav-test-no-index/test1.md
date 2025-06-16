# 测试文件1（无index.md目录）

这是一个测试文件，用于演示导航栏自动生成功能。

## 说明

当文件夹中**不存在** `index.md` 文件时，导航栏会将该文件夹下的所有 `.md` 文件作为下拉菜单项展示。

例如，当前文件夹 `nav-test-no-index` 不包含 `index.md` 文件，因此在导航栏中会显示为下拉菜单：

```js
{
  text: "nav-test-no-index",
  items: [
    { text: "test1", link: "/examples/nav-test-no-index/test1" },
    // 其他.md文件...
  ]
}
```

这样用户可以从下拉菜单中选择要访问的具体页面。