import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const router = new VueRouter({
  routes:[
    {
      name:'home',
      path:'/home/:id',
      component:()=>import('../views/Home.vue'),
      children:[
        {
          path:'/child',
          component:()=>import('../views/Child.vue')
        }
      ]
    }
  ]
})

export default router
