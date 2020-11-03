<template>
  <div id="app">
    <h1>App组件</h1>
    <hr>
    <m-parent></m-parent>
  </div>
</template>
<script>
import MParent from "./views/Parent"

export default {
    components:{
      MParent
    }
}
</script>
<style scoped>
 #app{
   padding: 10px;
   background: rgb(226, 79, 79);
 }
</style>
