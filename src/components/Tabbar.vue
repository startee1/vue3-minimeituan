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
      <router-link to="/">
        <img src="@/preview/image/Birds.png"/>
        <div class="title">其他</div>
      </router-link>
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
  img {
    width: 30px;
    height: 30px;
    background: #000;
  }
  .title {
    font-size: 15px;
  }
}
</style>
