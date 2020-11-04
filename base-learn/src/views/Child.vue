<template>
  <div class="c" >
    <h2>Child组件</h2>
    <h3>{{msg}}</h3>
    <button @click="passmsg" ref='childbut'>child传递</button>
    <h4>{{childMsg}}</h4>
    <button @click="passchild" >child-APP用bus传递</button>
  </div>
</template>

<script>
import bus from '../util/bus'

export default {
  props: {
      msg:{
          type:String,
          default:''
      }
  },
  data(){
      return{
          childMsg:'child中的数据',
         
      }
  },
  methods:{
      passmsg(){
          this.$emit('showmsg','来自子组件child传递')
      },
      passchild(){
        bus.$emit('buschild','child通过bus传递来的消息！')
      }
  },
  mounted(){
      console.log('子1',this.$parent.msg2)//当前组件获取上一级父组件的方法或数据
      console.log('子2',this.$parent.showmsg)
      console.log('子3',this.$refs.childbut)//获取refs中ref命名的dom元素
        // bus事务总线监听busmsg传递事件 获取值
      bus.$on('busmsg',(val)=>{
        this.childMsg = val
      })
      console.log('attrs',this.$attrs)//所有父组件中传递的数据
      console.log(this.$listeners);
 }
};
</script>
<style scoped>
.c {
  padding: 10px;
  background: rgb(67, 129, 187);
}
</style>