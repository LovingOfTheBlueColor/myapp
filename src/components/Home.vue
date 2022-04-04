<script >
export default {
  name: "Home",
};
</script>

<template>
  <div>我是首页</div>
  <!-- <el-button >去登陆</el-button> -->
  <router-link to="/login">去登陆</router-link>
  <router-view></router-view>
</template>

<style scoped>
</style>
