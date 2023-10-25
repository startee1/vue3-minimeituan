<script setup lang="ts">
import { DEVICE_TYPE, MOBILE, PC } from '@/utils/Common'
import { ref, onMounted, onBeforeUnmount, inject, watch } from 'vue'
import type {Ref} from 'vue'

const myNav = ref<HTMLElement>() // 搜索框
const myNavVisible = ref(false) // 默认搜索框是否被遮挡
const scrollTop = inject<Ref<number>>('scrollTop') // 接收屏幕滚动高度
const emits = defineEmits(["onShowFilter"])

// 变相监听全局滚动事件
watch(scrollTop as any, () => {
  let myNavLocation = myNav.value!.getBoundingClientRect()
  // console.log( scrollTop,myNavLocation)
  if( scrollTop!.value > myNavLocation.bottom + myNavLocation.height && myNavVisible.value === false ){
    myNavVisible.value = true
  }else if( scrollTop!.value <= myNavLocation.bottom + myNavLocation.height && myNavVisible.value === true ){
    myNavVisible.value = false
  }
})


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
// 展示筛选列表
const showFilter = () => {
  emits('onShowFilter')
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
      <div class="menu flex flex-ai-midline"  @click="showFilter">
        <img src="@/preview/image/menu.png"  class="icon-xs"/>
      </div>
    </div>
    <template v-if="myNavVisible">
      <div class="nav-lock flex flex-ai-midline" >
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
        <div class="menu flex flex-ai-midline" @click="showFilter">
          <img src="@/preview/image/menu.png"  class="icon-xs"/>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped lang="less">
.nav {
  position: relative;
  padding: 5px 10px 5px 5px;
  overflow: hidden;
}
.nav-lock {
  position: absolute;
  padding: 5px 10px 5px 5px;
  top: 50px;
  background-color: #fff;
  width: 100%;
  overflow: hidden;
  z-index: 999;
  & .nav-list {
    background-color: var(--color-background-grey);
  }
  & .menu {
    background-color: #fff;
    box-shadow:  #fff 0px 0px 15px 15px;
    z-index: 12;
  }
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
  border-radius: 20px;
  padding: 3px 10px;
  margin: 0 5px;
  white-space: nowrap;
  background-color: #fff;
  box-sizing: border-box;
  border: 1px solid #fff;
  transition: 0.2s all linear;
  &:hover {
    cursor: pointer;
    background-color: var(--color-background-meituan);
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