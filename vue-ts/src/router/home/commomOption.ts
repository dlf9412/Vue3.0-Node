import {RouteRecordRaw} from 'vue-router'

export const commonOption:Array<RouteRecordRaw>=[{
  path:'/home/commonOption',
  name:'commonOption',
  component:()=>import('@/view/commonOption/index.vue')
}]