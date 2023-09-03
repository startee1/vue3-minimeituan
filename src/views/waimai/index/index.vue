<script setup lang="ts">
import { useRouter } from 'vue-router';
import Category from './children/category.vue'
import MyNav from './children/nav.vue'
import ShopList from './children/shopList.vue'
import MyFilter from './children/myFilter.vue'
import { inject, watch, ref, Ref } from 'vue';

const search = ref<HTMLElement>() // 搜索框
const searchVisible = ref(false) // 默认搜索框是否被遮挡
const scrollTop = inject<Ref<string>>('scrollTop') // 接收屏幕滚动高度
const reachBottom = inject<Ref<boolean>>('reachBottom') // 接收屏幕到底时刻
const filterShow = ref(false)

// 变相监听全局滚动事件
watch(scrollTop , () => {
  let searchLocation = search.value.getBoundingClientRect()
  if( searchLocation.top < searchLocation.height && searchVisible.value === false ){
    searchVisible.value = true
  }else if( searchLocation.top >= searchLocation.height && searchVisible.value === true ){
    searchVisible.value = false
  }
})
watch(reachBottom, (value) => {
  console.log(value)
  if(reachBottom.value == true){
    console.log('加载中...')
  }
})

const router = useRouter()
const toIndex = () => {
  router.push({ name: 'index' })
}
const toSearch = () => {
  router.push({ name: 'waimaiSearch' })
}
const hideFilter = () => {
  filterShow.value = false
}
const showFilter = () => {
  filterShow.value = true
}
</script>


<template>
  <div>
    <div v-if="searchVisible">
      <div class="search-lock">
        <div class="search-item" @click="toSearch">
          <input placeholder="输入"/>
          <img class="icon-xs icon" src="@/preview/image/search.png">
          <div class="tips bg-mt">搜索</div>
        </div>
      </div>
    </div>
    <header class="bg-mt">
      <div class="flex flex-ai-midline top">
        <img class="icon-xs" src="@/preview/image/back.png" @click="toIndex"/>
        <span class="location">北京</span>
        <img class="icon-xs" src="@/preview/image/location.png"/>
      </div>
      <div class="search">
        <div class="search-item" @click="toSearch" ref="search">
          <input placeholder="输入"/>
          <img class="icon-xs icon" src="@/preview/image/search.png">
          <div class="tips bg-mt">搜索</div>
        </div>
      </div>
    </header>
    <section>
      <Category/>
      <MyNav @onShowFilter="showFilter"/>
      <ShopList/>
      <MyFilter v-if="filterShow" @onHide="hideFilter"/>
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
  background-color: #fff;
  border-radius: 16px 16px 0 0;
  margin-top: 8px;
  padding: 8px;
}
.search-lock{
  position: absolute;
  padding: 8px;
  top: 0;
  background-color: #fff;
  width: 100%;
  z-index: 10;
  background-color: var(--color-background-meituan);

}
.search-item {
  position: relative;
  margin: 3px 10px 3px 10px;
  padding: 4px 24px;
  border-radius: 26px;
  border: 1px solid var(--color-background-meituan);
  background-color: #fff;
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
    height: 25px;
    right: 2px;
    top: 2px;
    line-height: 25px;
    width: 60px;
    font-size: 8px;
    text-align: center;
    border-radius: 26px;
  }
}
</style>