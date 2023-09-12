<script setup lang="ts">
import { Ref, inject, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import Introduce from './children/Introduce.vue'
import Menu from './children/Menu.vue'
import Comment from '@/components/Comment.vue'
import Settle from '@/components/Settle.vue'
import Detail from './children/Detail.vue'
import Goods from '../goods/Goods.vue'
import WaimaiSearch from './children/Search.vue'
const router = useRouter()
const scrollTop = inject<Ref<number>>('scrollTop') // 接收屏幕滚动高度
const has_scroll = ref<boolean>(false) // 控制顶部样式
const css_menu = ref<string>('menu') // 控制菜单栏顶部 css:class
const show_goods = ref<boolean>(false) // 控制商品详情页
const show_all_comment = ref<boolean>(false) // 控制商品所有评论页
const show_settle = ref<boolean>(false) // 控制结算页
const show_waimai_search = ref<boolean>(false) // 控制外卖搜索页
const goods_id = ref<number>(0) // 商品 id
// 监听顶部栏滚动变化
watch(scrollTop ,(val) => {
  if(val > 0 && has_scroll.value == false) {
    has_scroll.value = true
  }else if(val <= 0 && has_scroll.value == true) {
    has_scroll.value = false
  }
})
const onCloseGoods = () => {
  show_goods.value = false
}
const onOpenGoods = () => {
  show_goods.value = true
}
const onOpenAllCooment = () => {
  show_all_comment.value = true
}
const onCloseAllComment = () => {
  show_all_comment.value = false
}
const onOpenSettle = () => {
  show_settle.value = true
}
const onCloseSettle = () => {
  show_settle.value = false
}
const onOpenWaimaiShopSearch = () => {
  show_waimai_search.value = true
}
const onCloseWaimaiShopSearch = () => {
  show_waimai_search.value = false

}


// 切换菜单内容
const onMenuClick = (type: string) => {
  css_menu.value = type
}
// 路由
const toWaimaiIndex = () => {
  router.push({ name: 'waimaiIndex' })
}

</script>


<template>
  <div class="shop">
    <!-- 顶部背景 -->
    <div class="shop-bg">
      <img src="@/preview/image/bg.jpg"/>
    </div>
    <!-- 顶部搜索栏 -->
    <div class="shop-search flex" :class="{'shop-search-scroll': has_scroll}">
      <div @click="toWaimaiIndex">
        <svg t="1693901686178" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2506" width="200" height="200"><path d="M405.504 468.992l231.424-210.944c8.192-8.192 8.192-20.48 0-28.672-8.192-8.192-20.48-8.192-28.672 0l-245.76 223.232c-4.096 4.096-6.144 10.24-6.144 16.384 0 6.144 2.048 12.288 6.144 16.384l245.76 223.232c8.192 8.192 20.48 8.192 28.672 0 8.192-8.192 8.192-20.48 0-28.672L405.504 468.992z" p-id="2507"></path></svg>
      </div>
      <div class="search">
        <div class="search-item" :class="{'search-item-scroll': has_scroll}" @click="onOpenWaimaiShopSearch" ref="search">
          <input placeholder="输入"/>
          <img class="icon-xs search-icon" src="@/preview/image/search.png">
        </div>
      </div>
      <div><el-icon :size="30"><Star /></el-icon></div>
    </div>
    <!-- 商品详情页 -->
    <transition mode="out-in" name="dialog">
      <Goods v-if="show_goods" :goods_id="goods_id" @close-goods="onCloseGoods" @open-all-comment="onOpenAllCooment"/>
    </transition>
    <!-- 所有评论页 -->
    <div v-if="show_all_comment" class="full-screen" style="z-index: 1200;">
      <Comment closeable  :goods_id="goods_id" @close="onCloseAllComment"/>
    </div>
    <!-- 结算页 -->
    <transition mode="out-in" name="dialog">
      <div v-if="show_settle" class="full-screen" style="z-index: 1300;">
        <Settle closeable   @close="onCloseSettle"/>
      </div>
    </transition>
    <!-- 商铺内置搜索页 -->
    <transition mode="out-in" name="dialog">
      <div v-if="show_waimai_search" class="full-screen">
        <WaimaiSearch   @close="onCloseWaimaiShopSearch" @open-goods="onOpenGoods" @open-settle="onOpenSettle"/>
      </div>
    </transition>

    <main>
      <!-- 商铺简介 -->
      <section class="introduce">
        <Introduce/>
      </section>
      <section>
        <nav class="menu-list">
          <div class="menu-title" :class="{'menu-this': css_menu == 'menu'}" @click="onMenuClick('menu')">点菜</div>
          <div class="menu-title" :class="{'menu-this': css_menu == 'comment'}" @click="onMenuClick('comment')">评价</div>
          <div class="menu-title" :class="{'menu-this': css_menu == 'detail'}" @click="onMenuClick('detail')">商家</div>
        </nav>
        <section class="menu-info">
          <!-- 菜单 -->
          <Menu v-if="css_menu == 'menu'" @open-goods="onOpenGoods" @open-settle="onOpenSettle"/>
          <!-- 评论 -->
          <Comment v-else-if="css_menu == 'comment'"/>
          <!-- 店铺详情 -->
          <Detail v-else-if="css_menu == 'detail'"/>
        </section>
      </section>
    </main>
  </div>
</template>



<style scoped lang="less">
.shop-bg {
  height: 80px;
  overflow: hidden;
  img {
    width: 100%;
    opacity: 0.8;
  }
}
.shop-search {
  position: absolute;
  width: 100%;
  top: 0;
  transition: all 0.2s linear;
  height: 36px;
  z-index: 10;
  .icon {
    width: 40px;
    height: 40px;
    fill: #fff;
  }
  .search-item {
  position: relative;
  margin: 3px 10px 3px 10px;
  padding: 4px 24px;
  border-radius: 26px;
  background-color: #fff;
  padding: auto;
    input {
      width: 100%;
      outline: none;
      border: none;
      font-size: 8px;
    }
    .search-icon{
      width: 15px;
      height: 15px;
      position: absolute;
      left: 8px;
      top: 8px;
    }
    .tips{
      position: absolute;
      height: 25px;
      right: 2px;
      top: 2px;
      line-height: 25px;
      width: 60px;
      font-size: 8px;
      text-align: center;
      border-radius: 26px;
    }
  }
}
.shop-search-scroll {
  background-color: #fff;
  .icon {
    fill: #000 !important;
  }
  .search-item-scroll {
    background-color: #d6d6d6;
  
    input {
      background-color: #d6d6d6;
    }
  }
}
main {
  background: #fff;
  top: -10px;
  padding-top: 10px;
  border-radius: 10px 10px 0 0;
}
.introduce {
  min-height: 100px;
}
.menu-list {
  height: 40px;
  display: flex;
  border-bottom: 1px solid grey;
  .menu-title {
    position: relative;
    height: 40px;
    line-height: 40px;
    width: 80px;
    font-size: 15px;
    color: #333;
    text-align: center;
  }
  .menu-this::before {
    position: absolute;
    content: "";
    left: 28px;
    bottom: 0;
    width: 20px;
    height: 3px;
    border-radius: 10px;
    background-color: var(--color-background-meituan);
  }
}
.menu-info {
  height: calc(100vh - 80px);
}
.full-screen {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1010;
  background: #fff;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}


@keyframes axisX {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0px);
  }
}

/* 2. 过渡类名 */
/* 开始 */
.dialog-enter-active {
  animation: axisX 0.5s;
}
/* 结束 */
.dialog-leave-active {
  animation: axisX 0.5s reverse;
}
</style>