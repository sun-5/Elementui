import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//解决重复点击路由报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    component: () => import('@/views/Main.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home/Home')
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('@/views/VideoManage/VideoManage')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('@/views/UserManage/UserManage')
      },
      {
        path: '/page1',
        name: 'page1',
        component: () => import('@/views/Other/PageOne')
      },
      {
        path: '/page2',
        name: 'page2',
        component: () => import('@/views/Other/PageTwo')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
