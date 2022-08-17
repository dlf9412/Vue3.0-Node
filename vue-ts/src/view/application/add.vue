<template>
  <div>
    <a-modal :visible='visible' title="新增自定义应用" @cancel='close'></a-modal>
  </div>
</template>
<script lang="ts" setup>
import {Modal as aModal} from 'ant-design-vue'
const props=defineProps({
  visible:Boolean
})
const Emits=defineEmits(['close'])

// 关闭弹窗
const close=()=>{
   Emits('close',false)
}


</script>