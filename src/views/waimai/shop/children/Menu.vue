<script setup lang="ts">
import GoodsLists from '@/components/GoodsLists.vue';
import ShopCart from '@/components/ShopCart.vue';
import { ref } from 'vue';

const menu_type = ref<string>('') // 菜单目录类型

const emit = defineEmits<{
  openGoods: [id: number]
}>()

const onTypeChange = (type:string) => {
  menu_type.value = type
  window.location = `#${type}`
}
</script>

<template>
  <div class="menu flex">
    <div class="type">
      <div class="type-list" :class="{'type-this': menu_type == '手机'}" @click="onTypeChange('手机')">手机</div>
      <div class="type-list" :class="{'type-this': menu_type == '零食'}" @click="onTypeChange('零食')">零食</div>
      <div class="type-list" :class="{'type-this': menu_type == '外卖'}" @click="onTypeChange('外卖')">外卖</div>
    </div>
    <div class="goods">
      <div id="手机">
        <div class="title">手机</div>
        <div class="goods-list">
          <GoodsLists @open-goods="(id) => emit('openGoods', id)"/>
          <GoodsLists />
        </div>
      </div>
      <div id="零食">
        <div class="title">零食</div>
        <div class="goods-list">
          <GoodsLists @open-goods="(id) => emit('openGoods', id)"/>
          <GoodsLists />
          <GoodsLists />
          <GoodsLists />
          <GoodsLists />
          <GoodsLists />
          <GoodsLists />
        </div>
      </div>
      <div id="外卖">
        <div class="title">外卖</div>
        <div class="goods-list">
          <GoodsLists @open-goods="(id) => emit('openGoods', id)"/>
          <GoodsLists />
        </div>
      </div>
    </div>
    <ShopCart />
  </div>
</template>

<style scoped lang="less">
.menu {
  height: 100%;
}
.type, .goods {
  overflow-y: scroll;
  min-height: 100%;
}
.type {
  background-color: rgb(236, 236, 236);
  width: 100px;
  .type-list {
    text-align: center;
    height: 40px;
    line-height: 40px;
  }
  .type-this {
    font-weight: 600;
    background: #fff;
  }
}
.goods {
  flex: 1;
  background: #fff;
  padding: 10px;
}
.title {
  font-size: 16px;
}
</style>