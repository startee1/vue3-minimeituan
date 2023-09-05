<template>
  <div class="menu flex">
    <div class="type">
      <div class="type-list type-this">手机</div>
      <div class="type-list">零食</div>
      <div class="type-list">外卖</div>
    </div>
    <div class="goods">
      
    </div>
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
</style>