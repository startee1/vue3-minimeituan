<template>
  <div class="nav flex">
    <div class="nav-main flex">
      <div class="nav-list">点评高分</div>
      <div class="nav-list">优惠商家</div>
      <div class="nav-list">品牌商家</div>
      <div class="nav-list">满减优惠</div>
      <div class="nav-list">满减1优惠</div>
    </div>
    <div class="menu flex flex-ai-midline">
      <img src="@/preview/image/menu.png" class="icon-xs"/>
    </div>
  </div>
</template>

<style scoped lang="less">
.nav {
  position: relative;
  padding: 5px 5px;
  .nav-main {
    flex: 1;
    overflow: scroll;
    margin-right: 20px;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
  .nav-list {
    border-radius: 20px;
    padding: 3px 10px;
    margin: 0 5px;
    white-space: nowrap;
    background-color: #fff;
  }
  .menu {
    position: absolute;
    right: 10px;
    top: 10px;
    box-shadow:  var(--color-background-grey) 0px 0px 20px 20px;}
}
</style>