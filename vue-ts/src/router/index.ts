import {createRouter,createWebHistory,RouteRecordRaw,Router} from 'vue-router'

const routes:Array<RouteRecordRaw>=[{
  path:'/',
  name:'Home',
  component:()=>import('@/view/Home/index.vue')
},{
  path:'/app',
  name:'App',
  component:()=>import('@/view/App/index.vue')
}]

const router:Router=createRouter({
  history:createWebHistory(import.meta.env.BASE_URL),
  routes:routes
})

export default router