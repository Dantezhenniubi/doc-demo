import path from "node:path"
// 引入path模块, 用于处理文件路径, 例如获取文件名, 扩展名等
import fs from "node:fs"
// 引入fs模块, 用于处理文件系统, 例如读取文件, 写入文件等

// 自动处理路由
// 文件根目录
const DIR_PATH = path.resolve();
// 白名单，过滤不是文章的文件和文件夹
const WHITE_LIST = [
    "index.md",
    ".vitepress",
    "node_modules",
    ".idea",
    "assets",
];

// 判断是否是文件夹
const isDirectory = (path) => {
    return fs.lstatSync(path).isDirectory();
};

// 取差值
// const intersections = (arr1, arr2) => 
//     Array.from(new Set(
//         arr1.filter((item) => !new Set(arr2).has(item))));
// 优化为
// 取差集（在arr1中但不在arr2中的元素）
const getDifference = (arr1, arr2) => {
    // 对于小型数组，直接使用filter和includes即可
    if (arr2.length < 10) {
        return arr1.filter(item => !arr2.includes(item));
    }
    
    // 对于较大的数组，使用Set提高查找效率
    const set2 = new Set(arr2);
    return arr1.filter(item => !set2.has(item));
};

// 方法导出直接使用
// function geList(params, path1, pathname) {
//    // 存放结果
//    const res = [];
//    // 开始遍历params
//    for (let file in params) {
//      // 拼接目录
//      const dir = path.join(path1, params[file]);
//      // 判断是否是文件夹
//      const isDir = isDirectory(dir);
//      if(isDir) {
//        // 如果是文件夹，读取之后作为下一次递归参数
//        const files = fs.readdirSync(dir);  // readdirSync() 方法用于返回指定目录的文件和子目录的数组。
//        res.push({
//          text: params[file], // 文件夹名称
//          collapsible: true, // 可折叠
//          items: geList(files, dir, `${pathname}/${params[file]}`)
//          // 递归调用，获取子目录下的文件夹和文件
//        });
//      } else {
//        // 获取文件扩展名
//        // 第一种
//        const suffix = path.extname(params[file]);
//        if (suffix !== ".md") {
//          // 不是md文件，跳过
//          continue;
//        }
//        // 直接获取不含扩展名的文件名
//        const name = path.basename(params[file], suffix);

//        // 添加到结果数组
//        res.push({
//          text: name,
//          link: `${pathname}/${name}`
//        });
//      }
//    } 
//    return res;
// }

function geList(params, path1, pathname) {
  // 存放结果
  const res = [];
  // 开始遍历params (改用for...of循环)
  for (const item of params) {
    // 拼接目录
    const dir = path.join(path1, item);
    // 判断是否是文件夹
    const isDir = isDirectory(dir);
    if (isDir) {
      // 如果是文件夹，读取之后作为下一次递归参数
      const files = fs.readdirSync(dir); // readdirSync() 方法用于返回指定目录的文件和子目录的数组。
      res.push({
        text: item, // 文件夹名称
        collapsible: true, // 可折叠
        items: geList(files, dir, `${pathname}/${item}`),
        // 递归调用，获取子目录下的文件夹和文件
      });
    } else {
      // 获取文件扩展名
      const suffix = path.extname(item);
      if (suffix !== ".md") {
        // 不是md文件，跳过
        continue;
      }
      // 直接获取不含扩展名的文件名
      const name = path.basename(item, suffix);

      // 添加到结果数组
      res.push({
        text: name,
        link: `${pathname}/${name}`,
      });
    }
  }
  return res;
}

export const set_sidebar = (pathname) => {
   // 获取pathname的路径
   const dirPath = path.join(DIR_PATH, pathname);
   // 读取pathname下的所有文件和文件夹
   const files = fs.readdirSync(dirPath); // readdirSync() 方法用于返回指定目录的文件和子目录的数组。
   // 过滤掉白名单以外的文件和文件夹
   const filterItems = getDifference(files, WHITE_LIST);
   return geList(filterItems, dirPath, pathname);
}
