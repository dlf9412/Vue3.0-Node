<template>
  <div class="home-index">
    <Layout>
      <!--  -->
      <LayoutHeader>
        <Header >
          <template v-slot>
             <div class="main-header-left">
                <div id="menu-logo"></div>
                <div class="menu-saas">{{saasConfig.title}}</div>
                <div>{{company.name}}</div>
             </div>
          </template>
        </Header>
      </LayoutHeader>
      <!--  -->
      <LayoutContent>Content</LayoutContent>
    </Layout>
  </div>
</template>
<script setup lang='ts'>
import axios from 'axios'
import {useRouter} from 'vue-router'
import {Layout,LayoutHeader,LayoutContent} from 'ant-design-vue'
import Header from './header.vue'
import { onMounted, reactive } from '@vue/runtime-core'
const router=useRouter()

const saasConfig=reactive({
    title:'SaaS平台',
    url:''
  })
const company=reactive({
    name:'tony'
  })

const routeClick=()=>{
  router.push('/app')
}

axios.get('/api').then((res)=>{
  console.log(res)
})
onMounted(()=>{
  // console.log(1111)
})


</script>
<style lang="less" scoped>
@import '@/common/css/index.less';
.ant-layout-header, .ant-layout-footer {
  color: black;
  background: #fff;
}
.ant-layout-header{
  padding-left: 10px;
  padding-right: 30px;
}
.home-index{
  height: 100%;
  /deep/ .ant-layout{
    height: 100%;
  }
  .main-header-left{
      .displayFlex(flex-start);
      #menu-logo{
        background: url('@/assets/menu-logo.png') no-repeat 50%;
        background-size: 100% 100%;
        width: 44px;
        height: 40px;
        line-height: 40px;
        color: #fff;
        text-align: center;
        cursor: auto;
      }
      .menu-saas:hover{
        color: #00aeff;
      }
      div{
        margin-right: 20px;
        cursor: pointer;
      }
    }
}
  
</style>