import Mock from 'mockjs'
import homeApi from './home'

//设置200-2000ms延时请求到数据
Mock.setup({
  timeout: '200-2000'
})

//首页相关
//拦截 /home/getData  拦截的方法get方法  调用函数是homeApi.getHomeData  这个函数的返回结果返回给我们拦截的ajax方法
Mock.mock(/\/home\/getData/, 'get', homeApi.getHomeData)
