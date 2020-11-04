<template>
    <div class="p">
        <h2>Parent组件</h2>
         <h3>{{msg2}}</h3>
        <hr>
        <m-child v-on="$listeners" :msg="'来自父组件parent的传递'" @showmsg="showmsg" ref='child' v-bind='$attrs'></m-child>
    </div>
</template>

<script>
import MChild from "./Child"

export default {
    data(){
        return{
            msg2:'父组件中原数据'
        }
    },
    components:{
      MChild
    },
    methods:{
        showmsg(val){
            this.msg2 = val
        }
    },
    mounted(){
        console.log('父1',this.$children)//获取当前这个组件的所有子组件 数组
         console.log('父2',this.$children[0].childMsg)//获取当前这个子组件数据
         console.log('父3',this.$refs.child) //$refs表示集合 取到对应名称的ref
          console.log('父4',this.$refs.child.childMsg)  //获取子组件中指定数据
    }
}
</script>
<style scoped>
 .p{
   padding: 10px;
   background: rgb(151, 190, 44);
 }
</style>