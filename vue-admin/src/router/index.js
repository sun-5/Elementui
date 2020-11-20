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
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/Login')
  }
]

const router = new VueRouter({
  routes
})

export default router
