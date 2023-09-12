<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const onReturnRoute = () => {
  router.push({ name:'waimaiIndex' })
}
</script>

<template>
  <div class="shop-type">
    <main>
      <section class="title flex">
        <div @click="onReturnRoute">r</div>
        <div class="type-name">name</div>
      </section>
      <section class="shop-type-item">
        <section>
          <div class="search">
            <div class="search-item" ref="search">
              <input placeholder="输入"/>
              <img class="icon-xs icon" src="@/preview/image/search.png">
            </div>
          </div>
        </section>
        <section></section>
        <section></section>
      </section>
    </main>
  </div>
</template>

<style scoped lang="less">
.shop-type {
  height: 100%;
}
main {
  height: 100%;
  .title {
    background-color: #789;
    padding: 10px 10px 20px 10px;
    .type-name {
      flex: 1;
      text-align: center;
    }
    
  }
  .shop-type-item {
    background-color:#fff;
    position: relative;
    padding: 10px;
    height: 100%;
    top: -10px;
    border-radius: 10px 10px 0 0;
    overflow: hidden;
  }
}
.search-item {
  position: relative;
  margin: 3px 10px 3px 10px;
  padding: 4px 24px;
  border-radius: 26px;
  background-color: var(--color-background-grey);
  padding: auto;
  input {
    width: 100%;
    outline: none;
    border: none;
    font-size: 8px;
    background-color: var(--color-background-grey);
  }
  .icon{
    position: absolute;
    left: 8px;
    top: 8px;
  }
}
</style>