import path from "node:path"
// 引入path模块, 用于处理文件路径, 例如获取文件名, 扩展名等
import fs from "node:fs"
// 引入fs模块, 用于处理文件系统, 例如读取文件, 写入文件等

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

// 最大递归深度限制，防止栈溢出
const MAX_RECURSION_DEPTH = 10;

// 判断是否是文件夹
const isDirectory = (path) => {
    try {
        return fs.lstatSync(path).isDirectory();
    } catch (error) {
        return false;
    }
};

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

// 检查路径是否包含中文字符
const containsChinese = (str) => /[\u4e00-\u9fa5]/.test(str);

// 规范化路径，确保中文路径能够正确处理
const normalizePath = (pathStr) => {
    // 检查是否包含中文
    if (containsChinese(pathStr)) {
        // 在Windows系统中，确保路径分隔符统一
        return pathStr.replace(/\//g, path.sep);
    }
    return pathStr;
};

/**
 * 递归获取目录结构
 * @param {Array} files - 文件列表
 * @param {string} dirPath - 目录路径
 * @param {string} pathname - URL路径名
 * @param {number} depth - 当前递归深度
 * @returns {Array} - 目录结构数组
 */
function geList(files, dirPath, pathname, depth = 0) {
    // 递归深度限制
    if (depth > MAX_RECURSION_DEPTH) {
        return [];
    }
    
    // 存放结果
    const res = [];
    
    // 开始遍历files
    for (const item of files) {
        try {
            // 拼接目录
            const itemPath = path.join(dirPath, item);
            
            // 判断是否是文件夹
            const isDir = isDirectory(itemPath);
            if (isDir) {
                // 如果是文件夹，读取之后作为下一次递归参数
                try {
                    const subFiles = fs.readdirSync(itemPath);
                    
                    // 处理子目录路径，确保URL格式正确
                    const subDirPath = `${pathname}/${item}`.replace(/\\/g, '/');
                    
                    res.push({
                        text: item, // 文件夹名称
                        collapsible: true, // 可折叠
                        items: geList(subFiles, itemPath, subDirPath, depth + 1),
                    });
                } catch (error) {
                    // 静默处理子目录读取错误
                }
            } else {
                // 获取文件扩展名
                const suffix = path.extname(item);
                
                if (suffix !== ".md") {
                    // 不是md文件，跳过
                    continue;
                }
                // 直接获取不含扩展名的文件名
                const name = path.basename(item, suffix);

                // 处理链接路径，确保URL格式正确
                const linkPath = `${pathname}/${name}`.replace(/\\/g, '/');
                
                // 添加到结果数组
                res.push({
                    text: name,
                    link: linkPath,
                });
            }
        } catch (error) {
            // 静默处理单个文件/文件夹的错误
        }
    }
    
    return res;
}

/**
 * 生成侧边栏配置
 * @param {string} pathname - 路径名
 * @returns {Array} - 侧边栏配置数组
 */
export const set_sidebar = (pathname) => {
    try {
        // 规范化路径
        const normalizedPath = normalizePath(pathname);
        
        // 获取pathname的路径
        const dirPath = path.join(DIR_PATH, normalizedPath);
        
        // 检查目录是否存在
        if (!fs.existsSync(dirPath)) {
            return [];
        }
        
        // 读取pathname下的所有文件和文件夹
        const files = fs.readdirSync(dirPath);
        
        // 过滤掉白名单以外的文件和文件夹
        const filterItems = getDifference(files, WHITE_LIST);
        
        return geList(filterItems, dirPath, pathname);
    } catch (error) {
        // 发生错误时返回空数组
        return [];
    }
}
