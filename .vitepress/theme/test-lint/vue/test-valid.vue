<template>
  <div class="valid-component">
    <h2>Valid Component</h2>
    <p>{{ message }}</p>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const message = ref('This is a valid Vue component');

const handleClick = () => {
  console.log('Button clicked');
};
</script>

<style scoped>
.valid-component {
  padding: 1rem;
  background-color: #f0f9ff;
}
</style>
