<template>
  <div class="mynav flex">
    <div>全部订单</div>
    <div>待评价</div>
    <div>退款/售后</div>
  </div>
</template>

<style scoped lang="less">
.mynav {
  padding: 5px 10px;
  background: #fff;
  div {
    margin-right: 20px;
    height: 30px;
    line-height: 30px;
    position: relative;
    &:hover {
      font-weight: bolder;
    }
    &:hover::after {
      content: "";
      position: absolute;
      width: 20px;
      height: 5px;
      border-radius: 10px;
      background: var(--color-background-meituan);
      margin: auto;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>