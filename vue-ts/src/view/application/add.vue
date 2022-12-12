<template>
  <div>
    <a-modal :visible='visible' title="新增自定义应用" @cancel='close'>
      <a-form :model="formState" name="formState">
        <form-item v-for="(item, i) in addFromItem" :key="i" v-bind="item.attr">
          <component :is='item.type' v-model:value="formState[item.componentBind.model]" @change="changeVal"
            autocomplete="off"></component>
        </form-item>
      </a-form>
    </a-modal>

  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from '@vue/reactivity'
import { Modal as aModal, Form as aForm, FormItem, Input as aInput } from 'ant-design-vue'
import { FormState } from './type'
import { addFromItem } from './initData'


const props = defineProps({
  visible: Boolean
})
const Emits = defineEmits(['close'])

const formState = reactive<FormState>({
  appCode: '',
  appName: '',
  appIcon: '',
  appClass: '',
  appDescription: '',
  appGroup: ''
})
const changeVal = (val: any) => {
  console.log(formState.appCode)
}
// 关闭弹窗
const close = () => {
  Emits('close', false)
}


</script>