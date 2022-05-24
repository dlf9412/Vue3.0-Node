<template>
  <div class="common-header">
    <slot name="headerLeft">
    </slot>
    <div class="headerMiddle">
      <span v-for="(item,index) in props.tagRoute" :key="index" :class="{'ischecked':pathCheck(item.path)}" @click="goto(item.path)">
      {{item.name}}
    </span>
    </div>
    <div>right</div>
  </div>
</template>
<script setup lang='ts'>
import {defineProps, onMounted} from 'vue'
import {useRoute,useRouter} from 'vue-router'

const route=useRoute()
const router=useRouter()
const props=defineProps({
  tagRoute:{
    type:Array,
    default:[]
  }
})

function pathCheck(path){
  return path.includes(route.path)
}
function goto(path){
   router.push({
     path:path
   })
}

onMounted(()=>{
  console.log(props.tagRoute)
})




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
  }
</style>