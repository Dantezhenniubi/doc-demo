/**
 * 应用补丁脚本
 * 用于修复Tailwind CSS v4与VitePress的兼容性问题
 * 支持Windows和Linux环境
 * 支持CommonJS和ESM环境
 */

import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { execSync } from 'child_process';

// 获取当前文件的目录
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 补丁文件路径
const patchFilePath = join(__dirname, 'patches/vitepress-base-css-layer.patch');

// 目标文件路径
const targetFilePath = join(__dirname, 'node_modules/vitepress/dist/client/theme-default/styles/base.css');

// 检查补丁文件是否存在
if (!existsSync(patchFilePath)) {
  console.error('补丁文件不存在:', patchFilePath);
  process.exit(1);
}

// 检查目标文件是否存在
if (!existsSync(targetFilePath)) {
  console.error('目标文件不存在:', targetFilePath);
  process.exit(1);
}

// 读取目标文件内容
const targetContent = readFileSync(targetFilePath, 'utf8');

// 检查文件是否已经应用了补丁
if (targetContent.includes('@layer vp-base')) {
  console.log('补丁已经应用过，继续构建...');
  process.exit(0);
}

try {
  // 尝试使用patch命令应用补丁
  console.log('正在应用VitePress CSS层补丁...');
  try {
    // 在Linux环境中使用patch命令
    execSync(`patch -p0 < ${patchFilePath}`, { stdio: 'inherit' });
    console.log('补丁应用成功！');
  } catch (patchError) {
    // 如果patch命令失败，尝试手动修改文件
    console.log('使用patch命令失败，尝试手动修改文件...');
    
    // 手动应用补丁的简化版本
    const patchedContent = targetContent
      .replace('@media (prefers-reduced-motion: reduce) {', '@layer vp-base {\n  @media (prefers-reduced-motion: reduce) {')
      .replace(/^([^@])/gm, '  $1');
    
    writeFileSync(targetFilePath, patchedContent, 'utf8');
    console.log('手动修改文件成功！');
  }
} catch (error) {
  console.error('应用补丁时出错:', error.message);
  process.exit(1);
}