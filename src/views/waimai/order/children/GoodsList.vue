<script setup lang="ts">
import { DEVICE_TYPE, MOBILE, PC } from '@/utils/Common'
import { ref, onMounted, onBeforeUnmount  } from 'vue'

const myNav = ref<HTMLElement>() // 搜索框


const scrollBlock = ref<HTMLElement>() // nav水平滚动框

let startX = 0
let endX = 0;
let moveDistance = 0
const onMouseMove = (event:any) => {
  if(scrollBlock.value){
    let realMove = event.clientX - startX
    endX = moveDistance + realMove
    scrollBlock.value!.style.transform = `translate3d(${endX}px,0,0)`
  }
}
 
// 添加滚动事件监听
const addScroll = (event:any) => {
  console.log(1)
  if(scrollBlock.value){
    startX = event.clientX;
    scrollBlock.value!.addEventListener('mousemove', onMouseMove)
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
      scrollBlock.value.removeEventListener('mouseleave', removeScroll)
    }
})

</script>

<template>
  <div>
    <div class="nav flex flex-ai-midline" ref="myNav">
      <div class="nav-main" v-if="DEVICE_TYPE == PC">
        <div class="flex"  style="width: 100%;height: 100%;" ref="scrollBlock">
          <div class="goods-info">
            <div class="goods-logo"></div>
            <div class="goods-title">食物1</div>
          </div>
          <div class="goods-info">
            <div class="goods-logo"></div>
            <div class="goods-title">食物2</div>
          </div>
          <div class="goods-info">
            <div class="goods-logo"></div>
            <div class="goods-title">食物3</div>
          </div>
          <div class="goods-info">
            <div class="goods-logo"></div>
            <div class="goods-title">食物4</div>
          </div>
          <div class="goods-info">
            <div class="goods-logo"></div>
            <div class="goods-title">食物5</div>
          </div>
        </div>
      </div>
      <div class="nav-main-mobile flex" v-else-if="DEVICE_TYPE == MOBILE">
        <div class="goods-info">
          <div class="goods-logo"></div>
          <div class="goods-title">食物1</div>
        </div>
        <div class="goods-info">
          <div class="goods-logo"></div>
          <div class="goods-title">食物2</div>
        </div>
        <div class="goods-info">
          <div class="goods-logo"></div>
          <div class="goods-title">食物3</div>
        </div>
        <div class="goods-info">
          <div class="goods-logo"></div>
          <div class="goods-title">食物4</div>
        </div>
        <div class="goods-info">
          <div class="goods-logo"></div>
          <div class="goods-title">食物5</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.nav {
  position: relative;
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
  overflow-x: scroll;
}
.goods-info {
  margin-right: 10px;
  width: 90px;
  .goods-logo {
    width: 90px;
    height: 60px;
    border-radius: 10px;
    overflow: hidden;
    background-color: red;
    img {
      display: block;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
  }
  .goods-title {
    width: 100%;
    overflow: hidden;
    font-size: 16px;
    text-overflow: ellipsis;
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