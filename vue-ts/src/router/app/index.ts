import { RouteRecordRaw } from "vue-router"
export const app:Array<RouteRecordRaw>=[{
  path:'/app',
  name:'App',
  component:()=>import('@/view/App/index.vue')
}]