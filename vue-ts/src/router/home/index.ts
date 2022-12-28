import {RouteRecordRaw} from 'vue-router'
import {commonOption} from './commomOption'


export const home:Array<RouteRecordRaw>=[{
  path:'/home',
  name:'Home',
  component:()=>import('@/view/Home/index.vue'),
  redirect:'/home/application',
  meta:{
    title:'首页'
  },
  children:[{
    path:'/home/application',
    name:'application',
    component:()=>import('@/view/Home/Application/index.vue'),
    meta:{
      title:'应用中心'
    },
  },{
    path:'/home/business',
    name:'business',
    component:()=>import('@/view/business/index.vue'),
  },
  ...commonOption
]
}]