<template>
  <div>
    <p>{{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 违反 no-explicit-any 规则
let count: any = ref(0);

// 未使用的变量 - 应触发 no-unused-vars 警告
const unusedVar = 'This is unused';

const increment = () => {
  count.value += 1;
};
</script>
