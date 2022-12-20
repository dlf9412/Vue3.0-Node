import {RouteRecordRaw} from 'vue-router'

export const login:Array<RouteRecordRaw>= [{
  path:'/login',
  name:'登录页面',
  component:()=>import('@/view/Login/index.vue'),
}]