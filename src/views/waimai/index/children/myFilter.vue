<script setup lang="ts">
const emits = defineEmits(["onHide"])
const hideFilter = () => {
  emits('onHide')
}
</script>

<template>
  <div class="filter" @click="hideFilter">
    <div class="filter-list flex" @click.stop>
      <div class="item">
        <div class="title">配送</div>
        <ul class="list flex flex-wrap">
          <li class="list-item">阿斯顿</li>
          <li class="list-item">阿斯顿</li>
        </ul>
        <div class="title">商家特色</div>
        <ul class="list flex flex-wrap">
          <li class="list-item">阿斯顿</li>
          <li class="list-item">阿斯顿</li>
        </ul>
      </div>
      <div class="btn flex flex-jc-sb">
        <button>重置</button>
        <button class="btn-confirm">确认</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.filter {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #eaeaea;
  z-index: 100;
  top: 60px;
}
.filter-list {
  height: 80%;
  background-color: #fff;
  flex-direction: column;
  position: relative;
  animation: fromToptoBot 0.5s cubic-bezier(0.075, 0.82, 0.165, 1)
}
@keyframes fromToptoBot {
  0% {
    transform: translate3d(0, -200px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
.item {
  padding: 10px;
  flex: 1;
}
.title {
  font-size: 16px;
  font-weight: 700;
  margin: 5px 0;
}
.list-item {
  background-color: var(--color-background-grey);
  padding: 5px 10px;
  border-radius: 8px;
  margin: 0 10px 5px 0;
  font-weight: 300;
}
.btn {
  border-top: 1px solid rgb(135, 135, 135);
  padding: 10px 20px;
  & button {
    width: 40%;
    border: 0;
    padding: 10px;
    border-radius: 10px;
  }
  .btn-confirm {
    background-color: var(--color-background-meituan);
  }
}

</style>