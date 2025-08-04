<script setup lang="ts">
import { useCounterStore } from '@/stores/counter.ts'

const counterStore = useCounterStore()

// 控制台调试（可选）
console.log(counterStore.web)
console.log(counterStore.users)
</script>

<template>
  <div class="container">
    <h2>网站信息</h2>
    <p>标题：{{ counterStore.web.title }}</p>
    <p>网址：{{ counterStore.web.url }}</p>

    <h2>用户信息</h2>
    <p>用户总数：{{ counterStore.users }}</p>

    <button @click="counterStore.addUser">
      添加用户
    </button>
  </div>
</template>

<style scoped>
.container {
  padding: 20px;
  font-family: sans-serif;
}
button {
  margin-top: 10px;
  padding: 6px 12px;
  font-size: 16px;
}
</style>
