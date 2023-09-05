<script setup lang="ts">
import { Ref, inject, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const scrollTop = inject<Ref<number>>('scrollTop') // 接收屏幕滚动高度
const has_scroll = ref<boolean>(false)
watch(scrollTop ,(val) => {
  if(val > 0 && has_scroll.value == false) {
    has_scroll.value = true
  }else if(val <= 0 && has_scroll.value == true) {
    has_scroll.value = false
  }
})

const toWaimaiIndex = () => {
  router.push({ name: 'waimaiIndex' })
}
const toWaimaiShopSearch = () => {
  router.push({ name: 'waimaiIndex' })
}
</script>


<template>
  <div class="shop">

      <div class="shop-bg">
        <img src="@/preview/image/bg.jpg"/>
      </div>
      <div class="shop-search flex" :class="{'shop-search-scroll': has_scroll}">
        <div @click="toWaimaiIndex">
          <svg t="1693901686178" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2506" width="200" height="200"><path d="M405.504 468.992l231.424-210.944c8.192-8.192 8.192-20.48 0-28.672-8.192-8.192-20.48-8.192-28.672 0l-245.76 223.232c-4.096 4.096-6.144 10.24-6.144 16.384 0 6.144 2.048 12.288 6.144 16.384l245.76 223.232c8.192 8.192 20.48 8.192 28.672 0 8.192-8.192 8.192-20.48 0-28.672L405.504 468.992z" p-id="2507"></path></svg>
        </div>
        <div class="search">
          <div class="search-item" :class="{'search-item-scroll': has_scroll}" @click="toWaimaiShopSearch" ref="search">
            <input placeholder="输入"/>
            <img class="icon-xs search-icon" src="@/preview/image/search.png">
          </div>
        </div>
      </div>

    <main>
      <section style="height: 100px;">
        
      </section>
      <section>
        <nav style="height: 60px;background-color: red;"></nav>
        <section style="height: 460px;background-color: rgb(61, 100, 81);"></section>
      </section>
    </main>
  </div>
</template>



<style scoped lang="less">
.shop-bg {
  height: 80px;
  overflow: hidden;
  img {
    width: 100%;
    opacity: 0.8;
  }
}
.shop-search {
  position: absolute;
  width: 100%;
  top: 0;
  transition: all 0.2s linear;
  height: 36px;
  z-index: 10;
  .icon {
    width: 40px;
    height: 40px;
    fill: #fff;
  }
  .search-item {
  position: relative;
  margin: 3px 10px 3px 10px;
  padding: 4px 24px;
  border-radius: 26px;
  background-color: #fff;
  padding: auto;
    input {
      width: 100%;
      outline: none;
      border: none;
      font-size: 8px;
    }
    .search-icon{
      width: 15px;
      height: 15px;
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
}
.shop-search-scroll {
  background-color: #fff;
  .icon {
    fill: #000 !important;
  }
  .search-item-scroll {
    background-color: #d6d6d6;
  
    input {
      background-color: #d6d6d6;
    }
  }
}
main {
  background: #fff;
  position: relative;
  top: -10px;
  padding-top: 10px;
  border-radius: 10px 10px 0 0;
}
</style>