import {RouteRecordRaw} from 'vue-router'
import {commonOption} from './commomOption'


export const home:Array<RouteRecordRaw>=[{
  path:'/',
  name:'Home',
  component:()=>import('@/view/Home/index.vue'),
  redirect:'/home/application',
  children:[{
    path:'/home/application',
    name:'application',
    component:()=>import('@/view/application/index.vue'),
  },{
    path:'/home/business',
    name:'business',
    component:()=>import('@/view/business/index.vue'),
  },
  ...commonOption
]
}]