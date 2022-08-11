<template>
    <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
    <el-breadcrumb-item
      ><a href="/">promotion management</a></el-breadcrumb-item
    >
    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
    <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
  </el-breadcrumb>

</template>

<script setup>
import { useRouter , useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

console.log("------------------")
console.log(router)
console.log(router.currentRoute)
console.log(router.getRoutes())


console.log(route.matched)

// const bread = computed(()=> route.matched)
// console.log(bread)
</script>
