<template>
  <div>
    <Layout>
      <LayoutHeader>Header</LayoutHeader>
    </Layout>
  </div>
</template>
<script setup='props,{emit}' lang='ts'>
import axios from 'axios'
import {useRouter} from 'vue-router'
import {Layout,LayoutHeader} from 'ant-design-vue'
const router=useRouter()
const routeClick=()=>{
  router.push('/app')
}
axios.get('http://localhost:3001').then((res)=>{
  console.log(res)
})
</script>
<style lang="less">
.ant-layout-header, .ant-layout-footer {
  color: #fff;
  background: #7dbcea;
}
  
</style>