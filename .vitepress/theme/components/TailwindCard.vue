<template>
  <div class="bg-primary/10 p-6 rounded-xl border border-primary/20">
    <h3 class="text-xl font-bold mb-4 text-primary">
      <slot name="header">Tailwind v4 工作正常！</slot>
    </h3>
    <div class="space-y-3">
      <slot></slot>
    </div>
    <button
      class="mt-4 px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg transition test-button"
      @click="handleClick"
    >
      <slot name="button">测试按钮</slot>
    </button>
  </div>
</template>

<script setup>
const emit = defineEmits(['click']); // 明确声明 click 事件

function handleClick() {
  emit('click'); // 实际使用 emit 变量
}
</script>

<style scoped>
/* 使用 CSS 变量（推荐） */
.text-primary {
  color: rgb(var(--color-primary));
}
.bg-primary\/10 {
  background-color: rgba(var(--color-primary), 0.1);
}
.border-primary\/20 {
  border-color: rgba(var(--color-primary), 0.2);
}
</style>
