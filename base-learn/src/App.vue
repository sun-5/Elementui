<template>
  <div>
    <router-link to="/home">Home</router-link>
    <router-view></router-view>
    <button @click="toHome">跳转APP主页</button>
    <div id="app" style="display:none">
      <h1>App组件</h1>
      <h3>{{ appmsg }}</h3>
      <button @click="passapp">app——child传递</button>
      <hr />
      <m-parent :apc1="a" :apc2="b" :apc3="c"></m-parent>
    </div>
  </div>
</template>
<script>
import MParent from "./views/Parent";
import bus from "./util/bus";

export default {
  data() {
    return {
      appmsg: "app初始",
      a: "msga",
      b: "msgb",
      c: "msgc",
    };
  },
  components: {
    MParent,
  },
  methods: {
    passapp() {
      //bus传递事件和值
      bus.$emit("busmsg", "来自APP通过bus传递的消息！");
    },
    toHome(){
      // this.$router.push('/')
       //  this.$router.push({path:'/home',query:{name:'jack'}})
      this.$router.push({name:'home',params:{id:3333}})
    }
  },
  mounted() {
    bus.$on("buschild", (val) => {
      this.appmsg = val;
    });
  },
};
</script>
<style scoped>
#app {
  padding: 10px;
  background: rgb(226, 79, 79);
}
</style>
