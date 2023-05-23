<template>
  <div class="app-entry">
    <!-- 头部 -->
    <div class="app-entry-header">
      <a-input v-model:value="appName" class="app-entry-header-l" placeholder="搜索应用" allow-clear @change="changeAppName">
        <template #suffix>
            <search-outlined style="color: rgba(0, 0, 0, 0.45)" @click="selectApp"/>
        </template>
      </a-input>
      <div class="app-entry-header-r">
        <a-button type="primary" @click="addVisible=true">新增自定义应用</a-button>
        <a-button>
          <template #icon>
            <setting-outlined @click=""/>
          </template>
        </a-button>
      </div>
    </div>
    <!-- 卡片 -->
    <card :appName="appName" :cardList='cardList' ref="childCard"/>
    <!-- 新增 -->
    <add :visible='addVisible' @close='(val)=>addVisible=val'/>
    
  </div>
</template>
<script setup lang='ts'>
import { reactive, ref, toRefs,toRef,computed } from '@vue/reactivity'
import { onMounted, watchEffect } from '@vue/runtime-core'
import {Input as aInput,Button as aButton,Popover }  from 'ant-design-vue'
import {SearchOutlined,SettingOutlined} from '@ant-design/icons-vue'
import card from './card.vue'
import {selectAppliction} from '@/serve/application'
import add from './add.vue'
import {cardListObj} from './type'
import type { Ref } from 'vue'

const appName:Ref<string>=ref('')
const addVisible:Ref<boolean>=ref(false)
let cardList:Array<cardListObj>=reactive([])
// 子组件事件触发
const childCard=ref(null)
const reactiveVar=reactive({
  value1:1
})

// 数据初始化
async function selectApp(){
  cardList.length=0
  let res=await selectAppliction({
    appName:appName.value||''
  })
  let {code,data}=res.data
  if(code===0) {
    data.records.forEach((item:cardListObj)=>{
      cardList.push(item)
    })
  }
}
// 搜索
function changeAppName(){
  if(!appName.value)selectApp()
}


onMounted(()=>{
  selectApp()
})

</script>
<style lang="less">
@import '@/common/css/index.less';
.app-entry{
  padding: 32px 36px;
}
.app-entry-header{
  .displayFlex(space-between,center);
  .app-entry-header-l{
    width: 360px;
    height: 40px;
  }
  .app-entry-header-r{
    .displayFlex();
    button{
      margin-right: 10px;
    }
  }
}
  
</style>