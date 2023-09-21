<script setup lang="ts">
const toSearch = () => {

}
</script>

<template>
  <div class="search">
    <div class="search-item" @click="toSearch">
      <input placeholder="输入"/>
      <img class="icon-xs icon" src="@/preview/image/search.png">
      <div class="tips">搜索</div>
    </div>
  </div>
</template>

<style scoped lang="less">
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