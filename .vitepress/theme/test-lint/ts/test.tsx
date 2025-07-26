// .vitepress/theme/testcomponent/ts/jsx-test.tsx
import { h } from 'vue'; // Vue 3 JSX 需要

// JSX 测试
const TestComponent = () => {
  return (
    <div class="container">
      <h1>JSX Syntax Test</h1>
      <button onClick={() => console.log('Clicked')}>Click Me</button>

      {/* 混合 TS 功能 */}
      {longArray.map((num) => (
        <span key={num}>{num}</span>
      ))}
    </div>
  );
};

// 类型混合测试
interface Props {
  title: string;
  count: number;
}

const TypedComponent = (props: Props) => (
  <div>
    <h2>{props.title}</h2>
    <p>Count: {props.count}</p>
  </div>
);

// 复杂 JSX 结构
const ComplexComponent = () => (
  <section>
    <TestComponent />
    <TypedComponent
      title="Type Checking in JSX"
      count={42}
      // extraProp="should error" // 应触发类型错误
    />
  </section>
);

export default ComplexComponent;
