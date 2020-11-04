<template>
  <div>
    <h1>Home页面</h1>
    <h2>{{ $route.params.id }}</h2>
    <h4>Vuex</h4>
    <h3>{{ count }}</h3>
      <h3>{{ doubleCount }}</h3>
    <button @click="add">增加</button>
  </div>
</template>

<script>
import { mapState,mapGetters } from "vuex";
export default {
  // computed:{
  //     count(){
  //         return this.$store.state.count
  //     }
  // }
  computed: {
    ...mapState({
      count: "count",
      a: "a",
    }),
    // doubleCount(){
    //     return this.$store.getters.doubleCount
    // }
    ...mapGetters([
        'doubleCount',
    ])
  },
  methods:{
      add(){
        //   this.$store.commit('add')
          this.$store.dispatch('delayadd')
      }
  }
};
</script>

<style  scoped>
h3 {
  color: red;
}
</style>