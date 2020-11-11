<template>
  <el-container style="height:100%">
    <el-aside width="200px"><com-aside></com-aside></el-aside>
    <el-container>
      <el-header><com-header></com-header></el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import ComHeader from "../components/ComHeader";
import ComAside from "../components/ComAside";
export default {
  components: {
    ComHeader,
    ComAside,
  },
};
</script>

<style></style>
