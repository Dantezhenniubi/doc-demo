vue文档中对其的解释：在 SSR 环境下，应用模块通常只在服务器启动时初始化一次。同一个应用模块会在多个服务器请求之间被复用，而我们的单例状态对象也一样。如果我们用单个用户特定的数据对共享的单例状态进行修改，那么这个状态可能会意外地泄露给另一个用户的请求。
比如新建一个文件a.ts 里面写 export const a=ref()，然后分别在两个组件里导入，这两个组件的a就是同步的
