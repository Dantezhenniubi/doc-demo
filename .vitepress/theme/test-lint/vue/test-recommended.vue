<template>
  <!-- 1. 测试 vue/html-self-closing 规则 -->
  <img src="logo.png" />
  <!-- 应该自动闭合 -->

  <!-- 2. 测试 vue/require-prop-types 规则 -->
  <MyComponent :count="5" />
  <!-- 缺少 prop 类型 -->

  <!-- 3. 测试 vue/require-default-prop 规则 -->
  <MyComponent :name="userName" />
  <!-- 缺少默认值 -->

  <!-- 4. 测试 vue/no-mutating-props 规则 -->
  <button @click="updateProp">Update Prop</button>
  <!-- 不应该修改 prop -->

  <!-- 5. 测试 vue/comment-directive 规则 -->
  <!-- eslint-disable-next-line vue/no-unused-vars -->
  <div>{{ unusedVariable }}</div>
  <!-- 禁用了未使用变量检查 -->
  <template></template>
</template>

<script setup>
import { ref } from 'vue';

// 6. 测试 vue/no-ref-as-operand 规则
const count = ref(0);
const double = count.value * 2; // 错误：ref 不能直接作为操作数

// 7. 测试 vue/no-dupe-keys 规则
const items = ref([
  { id: 1, name: 'A' },
  { id: 1, name: 'B' }, // 重复的 key
]);

// 8. 测试 vue/no-side-effects-in-computed-properties 规则
const firstName = ref('John');
const lastName = ref('Doe');
const fullName = computed(() => {
  firstName.value = 'Jane'; // 不应在计算属性中产生副作用
  return `${firstName.value} ${lastName.value}`;
});

// 9. 测试 vue/order-in-components 规则
const props = defineProps({
  /* 属性应该在 setup 前 */
});

// 10. 测试 vue/no-v-text-v-html-on-component 规则
function updateProp() {
  // 不应直接修改 prop
  props.name = 'New Name';
}
</script>
