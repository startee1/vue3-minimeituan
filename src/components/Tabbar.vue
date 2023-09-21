<script setup lang="ts">
import { ref } from 'vue';

const other_show = ref<boolean>(false)
</script>

<template>
  <div class="tabbar">
    <div class="list">
      <router-link :to="{ name:'waimaiIndex' }">
        <img src="@/preview/image/Birds.png"/>
        <div class="title">hello</div>
      </router-link>
    </div>
    <div class="list">
      <router-link :to="{ name:'waimaiOrder' }">
        <img src="@/preview/image/Birds.png"/>
        <div class="title">订单</div>
      </router-link>
    </div>
    <div class="list">
      <img src="@/preview/image/Birds.png" @click="other_show = !other_show"/>
      <div class="title" @click="other_show = !other_show">其他</div>
      <div class="more-list" v-if="other_show">
        <div>红包</div>
        <div>代金券</div>
        <div>津贴</div>
        <div>收藏</div>
        <div>企业用餐</div>
        <div>发票助手</div>
        <div>餐具设置</div>
        <div>管理地址</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.tabbar {
  display: flex;
  justify-content: space-between;
  position: relative;
  height: 80px;
  padding: 5px 30px;
  border-top: 1px solid #efefef;
  background-color: #fff;
  box-sizing: border-box;
  width: 100%;
}
.list {
  width: 20%;
  box-sizing: border-box;
  height: 50px;
  text-align: center;
  position: relative;
  img {
    width: 30px;
    height: 30px;
    background: #000;
  }
  .title {
    font-size: 15px;
  }
}
.more-list {
  position: absolute;
  top: -350px;
  left: -20px;
  width: 100px;
  background-color: #fff;
  border: 1px solid var(--color-text-grey);
  border-radius: 5px;
  padding: 0 10px;
  & > div {
    padding: 10px;
    border-bottom: 1px solid var(--color-text-grey);
    text-align: center;
  }
}
.more-list::after {
  content: "";
  position: absolute;
  bottom: -16px;
  transform: translateX(-50%);
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid var(--color-text-grey);
  border-bottom: 8px solid transparent;
}
</style>
