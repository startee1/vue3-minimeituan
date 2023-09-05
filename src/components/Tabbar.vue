<template>
  <div class="tabbar">
    <div class="list">
      <router-link to="/">
        <img src="@/preview/image/Birds.png"/>
        <div class="title">hello</div>
      </router-link>
    </div>
    <div class="list"></div>
    <div class="list"></div>
    <div class="list"></div>
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
