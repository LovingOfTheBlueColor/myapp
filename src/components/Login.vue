<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const goHome = () => {
  router.push("/welcome");
};
</script>

<template>
  <div><h1>我是登录成功</h1></div>
  <el-button @click="goHome">回首页</el-button>
</template>

<style scoped>
</style>