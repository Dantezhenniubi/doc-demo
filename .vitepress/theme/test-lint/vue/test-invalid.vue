<template>
  <div>
    <!-- 违反 vue/no-v-html 规则 -->
    <div v-html="rawHtml"></div>

    <!-- 违反 vue/multi-word-component-names 规则 -->
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
export default {
  name: 'Test', // 单字组件名 - 应触发警告（如果规则开启）
  data() {
    return {
      rawHtml: '<span style="color:red">Raw HTML</span>',
    };
  },
  methods: {
    handleClick() {
      console.log('Button clicked');
    },
  },
};
</script>

<style>
/* 缺少 scoped 属性 */
div {
  background-color: #ff0000;
}
</style>
