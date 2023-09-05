<script setup lang="ts">
import { onMounted, ref, provide } from 'vue';

const container = ref<HTMLElement>()
const myScrollTop = ref(0)
const reachBottom = ref(false)
provide("scrollTop", myScrollTop)
provide("reachBottom", reachBottom)
const onScroll = (event) => {
  const { scrollTop, scrollHeight, clientHeight } = container.value // 获取滚动高度和内容高度
  if (scrollTop + clientHeight >= scrollHeight - 30 && reachBottom.value == false) {
    reachBottom.value = true
  } else if (scrollTop + clientHeight < scrollHeight - 30 && reachBottom.value == true) {
    reachBottom.value = false
  }
  myScrollTop.value = event.target.scrollTop
}
onMounted(() => {
  // 监听滚动事件
  container.value.addEventListener('scroll', onScroll)
})
</script>

<template>
  <div class="screen">
    <main >
      <div class="top"></div>
      <section class="myContainer" >
        <section id="myApp" ref="container">
          <router-view v-slot="{ Component }">
            <transition mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </section>
      </section>
    </main>
  </div>
</template>

<style scoped>
.screen {
  position: fixed;
  width: 360px;
  height: 600px;
  border: 1px solid black;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  border-radius: 10px;
  overflow: hidden;
  background-color: var(--color-background-grey);
}
main {
  width: 100%;
  height: 100%;
}
.myContainer {
  width: 100%;
  height: 100%;
  position: relative;
}
#myApp {
  overflow-y: scroll;
  padding-bottom: 30px;
  width: 100%;
  height: 100%;
}
.top {
  height: 20px;
  background: #000;
}
.v-enter-active,
.v-leave-active {
  transition: opacity .2s;
}
.v-enter-from,
.v-leave-to{
  opacity: 0;
}
.v-enter-to,
.v-leave-from{
  opacity: 1;

}
</style>
 