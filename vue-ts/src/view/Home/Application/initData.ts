
import {FromItem} from './type'
import { Input as aInput } from 'ant-design-vue'
import type { Rule } from 'ant-design-vue/es/form';
export  const addFromItem:Array<FromItem>=[{
  attr:{
    label:'应用编码',
    name:'appCode',
    rules:[{required:true,message:'应用编码必填'}]
  },
  type:aInput,
  componentBind:{
    model:'appCode',
    attr:{}
  }
},{
  attr:{
    label:'应用名称',
    name:'appName',
    rules:[{required:true,message:'应用名称必填'}]
  },
  type:aInput,
  componentBind:{
    model:'appName',
    attr:{}
  }
}]