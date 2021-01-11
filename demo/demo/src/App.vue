<template>
  <div id="app">
   <m-parent @app='test'></m-parent>
  </div>
</template>

<script>
import MParent from './components/Parent.vue'

export default {
  name: 'App',
  components: {
    MParent
  },
     methods:{
      test(){
        console.log('zi组件')
      }
  },
  mounted(){
    console.log(this.$listeners)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
