<template>
  <div>
    <div v-for="(item,key) in cardList" :key="key" class="app-symbol">
      <div class="app-symbol-title">{{item.label}}</div>
      <div class="app-symbol-content">
        <div v-for="(card,index) in item.appList" :key="key+'-'+index" class="app-symbol-single-card">
          <div class="icon-item" >
            <i class="iconfont" :class="`icon-${card.icon}`"></i>
            <!-- <svg class="icon svgIcon" aria-hidden="true"> -->
              <!-- <use :xlink:href="`#icon-${card.icon}`" /> -->
              <!-- <use :xlink:href="`#icon-tixing`" />
            </svg>  -->
                
          </div>
          {{card.label}}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup >

import { reactive, toRef, toRefs } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import {cardListObj} from './type'
import {} from 'ant-design-vue'

const props=defineProps({
  appName:String,
  cardList:Object
})

console.log(props.appName,props.cardList,props)

function sendData(){
  console.log(props.appName,props.cardList,props)
  console.log(props.cardList)
}

//父组件要使用子组件的方法，必须通过defineExpose暴露给父组件
defineExpose({
  sendData
})

</script>
<style lang="less">
@import '@/common/css/index.less';
@import '@/common/icon/icons/iconfont.css';
  .app-symbol-title{
    text-align: left;
    border-left: 5px solid #00aeff;
    line-height: 14px;
    padding-left: 5px;
  }
  .app-symbol-content{
    margin-top: 12px;
    .displayFlex(space-between,center);
    flex-flow: wrap;
    .app-symbol-single-card{
      width:15.2%;
      height:150px;
      background: white;
      margin-bottom: 25px;
      padding: 30px 10px 10px;
      border-radius: 5px;
      cursor: pointer;
      
    }
    .app-symbol-single-card:hover{
        background: rgba(0, 174, 255, 0.1);
        border: 0.02667rem solid #00AEFF
      }
    .icon-item {
        .displayFlex(center,center);
        .svgIcon{
          width: 50px;
          height: 50px;
          vertical-align: middle;
          fill:currentColor;
          overflow:hidden;
        }
        .classicon {
          /* 可以自定义icon的颜色与大小 */
          font-size: 55px;
          color: rgba(0, 0, 0, 0.3);
        }
        .iconfont{
          width: 50px;
          height: 50px;
        }
      }
  }
  
</style>
