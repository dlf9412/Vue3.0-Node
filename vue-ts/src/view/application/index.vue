<template>
  <div class="app-entry">
    <!-- 头部 -->
    <div class="app-entry-header">
      <a-input v-model:value="appName" class="app-entry-header-l" placeholder="搜索应用" >
        <template #suffix>
            <search-outlined style="color: rgba(0, 0, 0, 0.45)" @click="searchApp"/>
        </template>
      </a-input>
      <div class="app-entry-header-r">
        <a-button type="primary" >新增自定义应用</a-button>
        <a-button>导入应用</a-button>
        <a-button>
          <template #icon>
            <setting-outlined />
          </template>
        </a-button>
      </div>
    </div>
    <!-- 卡片 -->
    <card :appName="appName" :cardList='cardList' ref="childCard"/>
    
    
  </div>
</template>
<script setup lang='ts'>
import { reactive, ref, toRefs } from '@vue/reactivity'
import { onMounted, watchEffect } from '@vue/runtime-core'
import {Input as aInput,Button as aButton }  from 'ant-design-vue'
import {SearchOutlined,SettingOutlined} from '@ant-design/icons-vue'
import card from './card.vue'
import {selectAppliction} from '@/serve/application'

//子组件
const childCard=ref(null)

const appName=ref('')
const cardList=reactive([])


const searchApp=function(){
  // console.log(appName.value,cardList,data,childCard.value)
  childCard.value?.sendData()
}

async function initData(){
  let res=await selectAppliction()
  let {code,data}=res.data
  if(code===0) {
    // cardList=data.records
    data.records.forEach(item=>{
      cardList.push(item)
    })
  }
}

onMounted(()=>{
  initData()
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