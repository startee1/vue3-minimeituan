<script setup lang="ts">
import { ref } from 'vue'
const price = ref<number>(0)
</script>

<template>
  <div>
    <main>
      <section>
        <div class="title">人均价格</div>
        <div><el-slider v-model="price" /></div>
      </section>
      <section>
        <div class="title">速度</div>
        <div class="speed-list flex flex-wrap flex-jc-sb">
          <div>2分钟</div>
          <div>2分钟</div>
          <div>2分钟</div>
          <div>2分钟</div>
          <div>2分钟</div>
          <div>2分钟</div>
          <div>2分钟</div>
          <div>2分钟</div>
        </div>
      </section>
      <section class="speed-button flex flex-jc-sb">
        <el-button>OK</el-button>
        <el-button type="warning">NO</el-button>
      </section>
    </main>
  </div>
</template>

<style scoped lang="less">
.speed-list {
  div {
    background-color: var(--color-background-grey);
    border-radius: 5px;
    padding: 10px 8px;
    margin: 5px;
    width: 20%;
    text-align:center;
  }
}
.speed-button {
  button {
    width: 45%;
  }
}
</style>