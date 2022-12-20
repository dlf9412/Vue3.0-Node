<template>
  <div class="common-header">
    <slot name="headerLeft">
    </slot>
    <div class="headerMiddle">
      <span v-for="(item,index) in props.tagRoute" :key="index" :class="{'ischecked':pathCheck(item.path)}" @click="goto(item.path)">
      {{item.name}}
    </span>
    </div>
    <div>
      <div class="user-logo"></div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import {defineProps, onMounted} from 'vue'
import {useRoute,useRouter} from 'vue-router'

const route=useRoute()
const router=useRouter()
const props=defineProps({
  tagRoute:Array as any
})

function pathCheck(path:string){
  return path.includes(route.path)
}
function goto(path:string){
   router.push({
     path:path
   })
}

</script>

<style lang="less">
@import '@/common/css/index.less';
  .common-header{
    .displayFlex(space-between);
    height: 100%;
    font-size: 16px;
    .headerMiddle{
      .displayFlex(space-between);
      span{
        display: inline-block;
        height: 100%;
        padding: 0 20px;
        vertical-align: middle;
        cursor: pointer;
        color: rgba(0,0,0,.65);
      }
      .ischecked{
        border-bottom: .05333rem solid #1890ff;
        color: #1890ff;
        background: #e6f7ff;
      }
    }
    .user-logo{
      background: url('@/assets/user.jpg') no-repeat 50%;
        background-size: 100% 100%;
        width: 44px;
        height: 44px;
        line-height: 40px;
        border-radius: 100%;
    }
  }
</style>