<template>
  <div class="home-index">
    <Layout>
      <!--  -->
      <LayoutHeader>
        <Header >
          <template v-slot>
             <div class="main-header-left">
                <div id="menu-logo"></div>
                <div>{{saasConfig.title}}</div>
                <div></div>
             </div>
          </template>
        </Header>
      </LayoutHeader>
      <!--  -->
      <LayoutContent>Content</LayoutContent>
    </Layout>
  </div>
</template>
<script setup='props,{emit}' lang='ts'>
import axios from 'axios'
import {useRouter} from 'vue-router'
import {Layout,LayoutHeader,LayoutContent} from 'ant-design-vue'
import Header from './header.vue'
import { onMounted, reactive } from '@vue/runtime-core'
const router=useRouter()
const routeClick=()=>{
  router.push('/app')
}
axios.get('/api').then((res)=>{
  console.log(res)
})
onMounted(()=>{
  console.log(1111)
})
const saasConfig=reactive({
    title:'SaaS平台',
    url:''
  })
const company=reactive({
    name:'tony'
  })

</script>
<style lang="less">
@import '@/common/css/index.less';
.ant-layout-header, .ant-layout-footer {
  color: black;
  background: #fff;
  padding: 0 15px;
}
.home-index{
  .main-header-left{
      .displayFlex(flex-start);
      div{
        margin-right: 10px;
      }
      #menu-logo{
        background: url('@/assets/menu-logo.png') no-repeat 50%;
        background-size: 100% 100%;
        width: 44px;
        height: 40px;
        margin: 0 auto;
        line-height: 40px;
        color: #fff;
        text-align: center;
      }
    }
}
  
</style>