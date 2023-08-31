<script setup lang="ts">
  import { useRouter } from 'vue-router';
  import History from './children/history.vue'
  import Find from './children/find.vue'

  const router = useRouter()
  const toIndex = () => {
    router.push({ name: 'waimaiIndex' })
  }
</script>


<template>
  <div>
    <header class="bg-grey">
      <div class="flex flex-ai-midline header-input">
        <img class="icon-xs" src="@/preview/image/back.png" @click="toIndex"/>
        <div class="search-item">
          <input placeholder="输入"/>
          <img class="icon-xs icon" src="@/preview/image/search.png">
          <div class="tips flex">
            <div>|</div>
            <div class="tips-words">搜索</div>
          </div>
        </div>
      </div>
      <div class="header-hr"></div>
    </header>
    <History/>
    <Find/>
  </div>
</template>

<style scoped lang="less">
header {
  .header-input{
    padding: 2px 6px 4px 6px;
  }
  .header-hr {
    background: #fff;
    height: 13px;
    border-radius: 13px 13px 0 0;
  }
}
.search-item {
  position: relative;
  margin: 4px 3px 3px 3px;
  padding: 3px 20px 3px 30px;
  border-radius: 26px;
  background: #fff;
  padding: auto;
  flex: 1;
  input {
    width: 85%;
    outline: none;
    border: none;
    font-size: 6px;
  }
  .icon{
    position: absolute;
    left: 6px;
    top: 3px;
  }
  .tips{
    position: absolute;
    height: 90%;
    right: 1%;
    top: 5%;
    line-height: 200%;
    width: 40px;
    font-size: 3px;
    text-align: center;
    border-radius: 26px;
    &>div {
      margin: 0 3px;
    }
    .tips-words {
      font-weight: 700;
    }
  }
}
</style>