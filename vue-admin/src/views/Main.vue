<template>
  <el-container style="height:100%">
    <el-aside width="auto"><com-aside></com-aside></el-aside>
    <el-container>
      <el-header><com-header></com-header></el-header>
      <com-tab></com-tab>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import ComHeader from '../components/ComHeader'
import ComAside from '../components/ComAside'
import ComTab from '../components/ComTab'
export default {
  components: {
    ComHeader,
    ComAside,
    ComTab
  }
}
</script>

<style lang="scss" scoped>
.el-header {
  background: #333;
}
.el-main {
  padding-top: 0;
}
</style>
