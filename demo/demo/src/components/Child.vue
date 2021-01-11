<template>
  <div>
      <h3>子组件</h3>
  </div>
</template>

<script>
export default {
    methods:{
      getC(){
        console.log('zi组件')
      }
  },
    mounted(){
    console.log(this.$listeners)
  }
}
</script>

<style>
 h3{
   width: 100%;
   height:100px;
   background: rgb(95, 93, 221);
 }
</style>