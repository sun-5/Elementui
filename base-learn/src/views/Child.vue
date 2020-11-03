<template>
  <div class="c">
    <h2>Child组件</h2>
    <h3>{{msg}}</h3>
  </div>
</template>

<script>
export default {
  props: {
      msg:{
          type:String,
          default:''
      }
  },
};
</script>
<style scoped>
.c {
  padding: 10px;
  background: rgb(67, 129, 187);
}
</style>