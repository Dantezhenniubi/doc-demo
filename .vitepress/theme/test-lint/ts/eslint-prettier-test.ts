// .vitepress/theme/testcomponent/ts/typescript-test.ts

// 类型注解测试
const typedVariable = 'Hello World';
const mismatchedType: number = '123'; // 类型错误

// 未使用变量测试
const unusedVar = 'This variable is unused';

// any 类型测试
function acceptAny(value: any) {
  console.log(value);
}

// 空函数测试
function emptyFunction() {}

// 接口定义测试
interface User {
  id: number;
  name: string;
  email: string;
  age?: number;
}

// 类型别名测试
type UserID = number | string;

// 泛型函数测试
function identity<T>(arg: T): T {
  return arg;
}

// 类定义测试
class Person {
  constructor(
    public name: string,
    private age: number
  ) {}

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

// TS 注释测试
// @ts-expect-error - 测试注释规则
const problematic: any = 'this will cause an error';

// 格式化测试
const poorlyFormattedObject = {
  a: 1,
  b: 2,
  c: 3,
};

const longArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function poorlyFormattedFunction(param1: string, param2: number) {
  return param1 + param2;
}

// 导出测试
export { Person, User, identity };
