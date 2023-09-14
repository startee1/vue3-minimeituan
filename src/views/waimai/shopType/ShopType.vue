<script setup lang="ts">
import { useRouter } from 'vue-router'
import MyNav from './children/MyNav.vue';
import MyFilter from './children/MyFilter.vue';
import ShopList from './children/ShopList.vue';
import SortFilter from './children/SortFilter.vue';
import SpeedFilter from './children/SpeedFilter.vue';
import ALLFilter from './children/ALLFilter.vue';
import { ref } from 'vue';

enum EFilterType {
  SORT = 'sort',
  SPEED = 'speed',
  ALL = 'all'
}

type FilterTypeStrings = keyof typeof EFilterType;

const sort = ref<boolean>(false)
const sort_type = ref<string>('')
const openFilter = (type:FilterTypeStrings) => {
  sort.value = true
  sort_type.value = EFilterType[type]
}

const router = useRouter()
const onReturnRoute = () => {
  router.push({ name:'waimaiIndex' })
}
const onSearchRoute = () => {
  router.push({ name:'waimaiSearch' })
}
</script>

<template>
  <div class="shop-type">
    <main style="flex">
      <section class="title flex">
        <div @click="onReturnRoute">
          <el-icon :size="20"><ArrowLeft /></el-icon>
        </div>
        <div class="type-name">name</div>
      </section>
      <section class="shop-type-item flex flex-dir-col">
        <section>
          <div class="search">
            <div class="search-item" @click.stop="onSearchRoute">
              <input placeholder="输入"/>
              <img class="icon-xs icon" src="@/preview/image/search.png">
            </div>
          </div>
        </section>
        <section><MyNav /></section>
        <section class="flex-main flex flex-dir-col">
          <MyFilter @open="openFilter" />
          <ShopList class="flex-main"/>
          <el-drawer :append-to-body="false" :show-close="false" top="300" :with-header="false" v-model="sort" direction="ttb" title="I am the title" >
            <SortFilter v-if="sort_type == 'sort'"/>
            <SpeedFilter v-else-if="sort_type == 'speed'"/>
            <ALLFilter v-else-if="sort_type == 'all'"/>
          </el-drawer>
        </section>
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
  overflow: hidden;
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
    flex: 1;
    overflow: hidden;
  }
  .nav {
    overflow: hidden;
    & > div {
      margin: 0 10px;
      white-space: nowrap;
    }
  }
  .flex-main {
    overflow: scroll;
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
:deep(.el-overlay) {
  top: 180px;
}
</style>