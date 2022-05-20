<template>
  <div class="common-header">
    <slot>
    </slot>
    <div>middle</div>
    <div>right</div>
  </div>
</template>
<script setup lang='ts'>
import {defineProps} from 'vue'
const props=defineProps({
  tagRoute:{
    type:Array,
    default:[]
  }
})


</script>
<style lang="less">
@import '@/common/css/index.less';
  .common-header{
    .displayFlex(space-between);
    
  }
</style>