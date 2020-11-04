import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0,
  },
  getters:{
    doubleCount(state){
      return state.count*2
    }
  },
  mutations: {//相当于方法
    add(state){
      state.count++
    },
    decrease(state){
      state.count--
    }
  },
  actions: {
    delayadd(context){
      setTimeout(()=>{
        context.commit('add')
      },1000)
    }
  },
  modules: {
  }
})
