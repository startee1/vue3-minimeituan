<script setup lang="ts">
import { useRouter } from 'vue-router';
import Category from './children/category.vue'
import MyNav from './children/nav.vue'
import Business from './children/business.vue'

const router = useRouter()
const toIndex = () => {
  router.push({ name: 'index' })
}
const toSearch = () => {
  router.push({ name: 'waimaiSearch' })
}
</script>


<template>
  <div>
    <header class="bg-mt">
      <div class="flex flex-ai-midline top">
        <img class="icon-xs" src="@/preview/image/back.png" @click="toIndex"/>
        <span class="location">北京</span>
        <img class="icon-xs" src="@/preview/image/location.png"/>
      </div>
      <div class="search">
        <div class="search-item" @click="toSearch">
          <input placeholder="输入"/>
          <img class="icon-xs icon" src="@/preview/image/search.png">
          <div class="tips bg-mt">搜索</div>
        </div>
      </div>
    </header>
    <section>
      <Category/>
      <MyNav/>
      <Business/>
    </section>
  </div>
</template>



<style scoped lang="less">
header {
  padding: 2px 0 0 0;
}
section {
  background-color: var(--color-background-grey);
  min-height: 100vh;
}
.location {
  font-size: 16px;
}
.search {
  background-color: white;
  border-radius: 16px 16px 0 0;
  margin-top: 8px;
  padding: 8px;
}
.search-item {
  position: relative;
  margin: 3px 10px 3px 10px;
  padding: 4px 24px;
  border-radius: 26px;
  border: 1px solid var(--color-background-meituan);
  padding: auto;
  input {
    width: 100%;
    outline: none;
    border: none;
    font-size: 8px;
  }
  .icon{
    position: absolute;
    left: 8px;
    top: 8px;
  }
  .tips{
    position: absolute;
    height: 100%;
    right: 0;
    top: 0;
    line-height: 30px;
    width: 60px;
    font-size: 8px;
    text-align: center;
    border-radius: 26px;
  }
}
</style>