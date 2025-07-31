<template>
  <div :class="$style.testComponent">
    <h2>这是一个测试组件</h2>
    <div class="font-comic-mono">使用漫画风格等宽字体abcdef</div>
    <div class="font-kmhai text-3xl">使用昆明海鸥体abcdef</div>
    <p>当前计数：{{ count }}</p>
    <button :class="$style.button" @click="count++">增加</button>
    <button :class="$style.button" @click="count--">减少</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(0);
</script>

<style module>
.testComponent {
  padding: 20px;
  border: 2px solid #f30404;
  border-radius: 8px;
  margin: 20px 0;
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.button {
  margin-right: 10px;
  padding: 8px 16px;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #2563eb;
}
</style>
