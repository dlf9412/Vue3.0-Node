import {createRouter,createWebHistory,RouteRecordRaw,Router} from 'vue-router'
import {home} from './home/index'
import {login} from './login/index'
import {app} from './app/index'

// 定义一些路由
// 每个路由都需要映射到一个组件。
const routes:Array<RouteRecordRaw>=[
  ...home,
  ...login,
  {
    path:'/',
    name:'/',
    redirect:'/login'
  }]

// 创建路由实例并传递 `routes` 配置
const router:Router=createRouter({
  //  内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history:createWebHistory(import.meta.env.BASE_URL),
  routes:routes
})

router.beforeEach((to:any,from,next)=>{
  window.document.title = to.meta.title||''
  next()
})

export default router