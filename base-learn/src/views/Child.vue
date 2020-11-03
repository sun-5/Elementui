<template>
  <div class="c" >
    <h2>Child组件</h2>
    <h3>{{msg}}</h3>
    <button @click="passmsg" ref='childbut'>child传递</button>
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
  data(){
      return{
          childMsg:'child中的数据'
      }
  },
  methods:{
      passmsg(){
          this.$emit('showmsg','来自子组件child传递')
      }
  },
  mounted(){
       console.log('子1',this.$parent.msg2)//当前组件获取上一级父组件的方法或数据
      console.log('子2',this.$parent.showmsg)
      console.log('子3',this.$refs.childbut)//获取refs中ref命名的dom元素
  }
};
</script>
<style scoped>
.c {
  padding: 10px;
  background: rgb(67, 129, 187);
}
</style>