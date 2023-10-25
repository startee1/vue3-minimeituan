<script setup lang="ts">
import { ref } from 'vue';
import config  from '@/config';
const props = defineProps<{title: string,preview: string,info:string,logo:string}>()
const is_open = ref<boolean>(false)
</script>

<template>
  <div class="introduce">
    <div class="name">{{ props.title }}</div>
    <div class="info1 flex flex-ai-midline">
      <div class="score">4.7分</div>
      <div>配送 28分钟</div>
      <div>月售2000+</div>
    </div>
    <div class="brief" v-if="!is_open">{{ props.preview }}</div>

    <div v-if="is_open">
      <div class="title">公告</div>
      <div class="text">{{ props.info }}</div>
    </div>
    <!-- LOGO -->
    <div class="logo"><img :src="config.URLPRE+props.logo.slice(4)" style="width: 100%;height: 100%;"/></div>
    <!-- 展开 -->
    <div class="open" @click="is_open = !is_open">√</div>
  </div>
</template>

<style scoped lang="less">
.introduce {
  padding: 0px 20px 10px 20px;
  position: relative;
}
.name {
  font-size: 20px;
  font-weight: 800;
}
.info1 {
  font-size: 12px;
  color: var(--color-text-grey);
  .score {
    font-size: 14px;
    color: var(--color-text-yellow);
  }
  div {
    margin-right: 10px;
  }
}
.brief {
  color: var(--color-text-grey);
}
.logo {
  position: absolute;
  top: -20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 5px;
  background-color: #345;
  overflow: hidden;
}
.open {
  position: absolute;
  bottom: 0px;
  right: 10px;
}
.title {
  font-size: 16px;
  font-weight: 600;
}
.text {
  color: #666;
}
</style>