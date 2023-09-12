<script setup lang="ts">
import GoodsLists from '@/components/GoodsLists.vue';
import ShopCart from '@/components/ShopCart.vue';
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue';
const input1 = ref<string>('')
const emit = defineEmits<{
  close: []
  openGoods: [id: number]
  openSettle: []
}>()
</script>

<template>
  <div class="search">
    <div class="top flex flex-ai-midline">
      <div class="close" @click="emit('close')">
        <el-icon :size="13"><ArrowLeft /></el-icon>
      </div>
      <div class="search">
        <el-input
          v-model="input1"
          clearable 
          placeholder="请输入商品名称"
          :suffix-icon="Search"
        />
      </div>
      <div>搜索</div>
    </div>
    <ShopCart  @open-settle="emit('openSettle')"/>
    <main>
      <GoodsLists @open-goods="(id) => emit('openGoods', id)"/>
    </main>
  </div>
</template>

<style scoped lang="less">
.search {
  height: 100%;
}
.top {
  padding: 10px;
  height: 60px;
  position: absolute;
  top: 0;
  width: 100%;
  left: 0;
  border-bottom: 1px solid var(--color-background-grey);
  & > div {
    margin: 0 10px;
  }
  .search {
    flex: 1;
  }

}
main {
  padding: 80px 10px 120px 10px;
}
</style>