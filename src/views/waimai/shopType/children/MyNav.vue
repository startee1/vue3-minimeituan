<script setup lang="ts">
import { DEVICE_TYPE, MOBILE, PC } from '@/utils/Common'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const myNav = ref<HTMLElement>() // 搜索框


const scrollBlock = ref<HTMLElement>() // nav水平滚动框

let startX = 0
let endX = 0;
let moveDistance = 0
const onMouseMove = (event:any) => {
  if(scrollBlock.value){
    let realMove = event.clientX - startX
    endX = moveDistance + realMove
    scrollBlock.value.style.transform = `translate3d(${endX}px,0,0)`
  }
}
 
// 添加滚动事件监听
const addScroll = (event:any) => {
  if(scrollBlock.value){
    startX = event.clientX;
    scrollBlock.value.addEventListener('mousemove', onMouseMove)
  }
}
// 移除滚动事件监听
const removeScroll = () => {
    moveDistance = endX;
    if(scrollBlock.value){
      scrollBlock.value.removeEventListener('mousemove', onMouseMove)
      let trueMove = scrollBlock.value.style.transform.slice(12,-13)
      let maxScrollX = scrollBlock.value.scrollWidth - scrollBlock.value.offsetWidth
      if(Number(trueMove) > 0) {
        moveDistance = 0
        scrollBlock.value.style.transform = `translate3d(${moveDistance},0,0)`
      }else if(scrollBlock.value.scrollWidth - scrollBlock.value.parentElement!.scrollWidth <  Number(trueMove) * -1){
        moveDistance = maxScrollX * -1
        scrollBlock.value.style.transform = `translate3d(${moveDistance}px,0,0)`
      }
    }
}

 
onMounted(() => {
    // 开启监听
    if( scrollBlock.value ){
      scrollBlock.value.addEventListener('mousedown', addScroll)
      scrollBlock.value.addEventListener('mouseup', removeScroll)
      scrollBlock.value.addEventListener('mouseleave', removeScroll)
    }
})
 
onBeforeUnmount(() => {
  // 停止监听
    if( scrollBlock.value ){
      scrollBlock.value.removeEventListener('mousedown', addScroll)
      scrollBlock.value.removeEventListener('mouseup', removeScroll)
    }
})

</script>

<template>
  <div>
    <div class="nav flex flex-ai-midline" ref="myNav">
      <div class="nav-main" v-if="DEVICE_TYPE == PC">
        <div class="flex"  style="width: 100%;height: 100%;" ref="scrollBlock">
          <div class="nav-list">点评高分</div>
          <div class="nav-list">优惠商家</div>
          <div class="nav-list">品牌商家</div>
          <div class="nav-list">满减优惠</div>
          <div class="nav-list">满减1优惠</div>
        </div>
      </div>
      <div class="nav-main-mobile flex" v-else-if="DEVICE_TYPE == MOBILE">
        <div class="nav-list">点评高分</div>
        <div class="nav-list">优惠商家</div>
        <div class="nav-list">品牌商家</div>
        <div class="nav-list">满减优惠</div>
        <div class="nav-list">满减1优惠</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.nav {
  position: relative;
  padding: 5px 10px 5px 5px;
  overflow: hidden;
}
.nav-main {
  z-index: 1;
  position: relative;
  overflow: hidden;
  margin-right: 15px;
}
.nav-main-mobile {
  position: relative;
  top: 10px;
  overflow-x: scroll;
  overflow-y: hidden;
  padding-right: 10px;
}
.nav-list {
  display: inline-block;
  font-size: 12px;
  padding: 3px 10px;
  margin: 0 5px;
  white-space: nowrap;
  background-color: #fff;
  box-sizing: border-box;
  transition: 0.2s all linear;
  border-bottom: 2px solid #fff;
  &:hover {
    cursor: pointer;
    color: var(--color-text-yellow);
    border-bottom: 2px solid var(--color-background-meituan);
  }
}
.menu {
  box-shadow:  var(--color-background-grey) 0px 0px 15px 15px;
  width: 15px;
  height: 15px;
  background-color: var(--color-background-grey);
  z-index: 1;
}
</style>