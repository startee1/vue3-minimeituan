<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()
const toIndex = () => {
  router.push({ name: 'index' })
}
</script>

<template>
  <header class="bg-mt">
    <div class="flex flex-midline top">
      <img class="icon-sm" src="@/preview/image/back.png" @click="toIndex"/>
      <span>北京</span>
      <img class="icon-sm" src="@/preview/image/location.png"/>
    </div>
    <div class="searchItem">
      <input placeholder="输入"/>
      <img class="icon-sm icon" src="@/preview/image/search.png">
      <div class="tips bg-mt">搜索</div>
    </div>
  </header>
</template>

<style scoped lang="less">
header {
  padding: 0.1rem 0 0.3rem 0;
}
.searchItem {
  position: relative;
  margin: 0.3rem 1rem 0.2rem 1rem;
  padding: 0.2rem 1.5rem;
  border-radius: 2rem;
  background: #fff;
  padding: auto;
  input {
    width: 100%;
    outline: none;
    border: none;
    font-size: 0.5rem;
  }
  .icon{
    position: absolute;
    left: 0.5rem;
    top: 0.4rem;
  }
  .tips{
    position: absolute;
    height: 90%;
    right: 1%;
    top: 5%;
    line-height: 200%;
    width: 2.7rem;
    font-size: 0.2rem;
    text-align: center;
    border-radius: 2rem;
  }
}
</style>