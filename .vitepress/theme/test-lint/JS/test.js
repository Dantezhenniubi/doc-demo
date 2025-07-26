// test.js
// 测试 no-unused-vars 规则
const unusedVariable = 'test';

// 测试 prettier 格式化规则
const poorlyFormatted = { a: 1, b: 2 };

// 测试 console 规则
console.log('Development console');

// 测试全局变量访问
console.log(window.location.href);

// 测试 JSX 支持 (jsx)
export const JsxComponent = () => {
  return <div>JSX in JavaScript</div>;
};
