<script setup lang="ts">
  import { useRouter } from 'vue-router';
  import History from './children/History.vue'
  import Find from './children/Find.vue'

  const router = useRouter()
  const toIndex = () => {
    router.push({ name: 'waimaiIndex' })
  }
  const search = () => {
    alert('搜索结果为空')
  }
</script>


<template>
  <div style="height: 100%;">
    <header class="bg-grey">
      <div class="flex flex-ai-midline header-input">
        <img class="icon-xs" src="@/preview/image/back.png" @click="toIndex"/>
        <div class="search-item">
          <input placeholder="输入"/>
          <img class="icon-xs icon" src="@/preview/image/search.png">
          <div class="tips flex">
            <div>|</div>
            <div class="tips-words" @click="search">搜索</div>
          </div>
        </div>
      </div>
    </header>
    <section>
      <History/>
      <Find/>
    </section>
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
section {
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  height: 100%;
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
    font-size: 12px;
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
    font-size: 12px;
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