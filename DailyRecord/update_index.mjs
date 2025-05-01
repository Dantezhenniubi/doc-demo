// 运行自动更新DailyRecord/index.md文件，列出该目录下所有md文件
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 获取当前文件的路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 文件夹路径 - 使用当前文件所在目录
const dirPath = __dirname;

// 读取文件夹下的所有文件
function getMarkdownFiles(dirPath) {
  const files = fs.readdirSync(dirPath);
  
  // 过滤出.md文件，并排除index.md
  return files.filter(file => {
    return file.endsWith('.md') && file !== 'index.md';
  });
}

// 生成markdown列表
function generateMarkdownList(files) {
  return files.map(file => {
    // 获取不含扩展名的文件名作为显示文本
    const name = path.basename(file, '.md');
    return `- [${name}](./${file})`;
  }).join('\n');
}

// 更新index.md文件
function updateIndexFile() {
  const files = getMarkdownFiles(dirPath);
  const listContent = generateMarkdownList(files);
  
  // 构建新的文件内容
  const content = `# 开发日志

### 三级标题
### 三级标题2
#### 四级标题

这里记录了我的日常开发和学习记录。

## 记录列表

${listContent}`;
  
  // 写入文件
  fs.writeFileSync(path.join(dirPath, 'index.md'), content);
  console.log('index.md 已更新');
}

// 执行更新
updateIndexFile();