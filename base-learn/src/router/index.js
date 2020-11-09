import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const router = new VueRouter({
  routes:[
    {
      path:'/',
      component:()=>import('../views/element/Pop.vue'),
      redirect:'/pop'
    },
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
    },
    {
      path:'/layout',
      component:()=>import('../views/element/Layout.vue')
    },
    {
      path:'/pop',
      component:()=>import('../views/element/Pop.vue')
    }
  ]
})

export default router
