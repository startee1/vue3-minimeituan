<script setup lang="ts">
import { ref } from 'vue'

interface IGoods {
  title: string
  rank: string
  pic: string
  month_sales: number
  nice_comment_percent: number
  price: number
  more_decide?: object
}

const props = defineProps<{
  goodsList?:IGoods[]
}>()
let { goodsList } = props

// 规格选择弹窗
const goods_choice_container = ref<boolean>(true)
// 规格选择弹窗
const showGoodsChoice = () => {

}
</script>

<template>
  <div>
    <main>
      <section class="icon">
        <img class="icon-pic"/>
      </section>
      <section class="info">
        <div class="info-title">啊十九大看来是</div>
        <div class="info-rank"><span>店内排行第一</span></div>
        <div class="info-text flex">
          <div class="info-text-1">月售400+</div>
          <div class="info-text-2">好评率 77%</div>
        </div>
        <div class="info-discount"></div>
        <div class="info-bottom flex flex-jc-sb">
          <div class="info-bottom-left">￥<span>29</span></div>
          <!-- <div class="info-bottom-right-1">+</div> -->
          <div class="info-bottom-right-2" @click="showGoodsChoice">按规格</div>
        </div>
      </section>
    </main>
    <div class="goods-choice" v-if="goods_choice_container">
      <div class="my-goods-choice">

      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
main {
  display: flex;
  margin: 10px 0;
}
.icon {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  overflow: hidden;
  background-color: red;
  margin-right: 10px;
  .icon-pic {
    width: 100%;
    height: 100%;
    display: block;
  }
}
.info {
  flex: 1;
  .info-title {
    font-size: 16px;
    font-weight: 600;
  }
  .info-rank span {
    padding: 0 10px;
    color: rgb(246,157,33);
    background: rgb(255, 225, 183);
    font-size: 13px;
    border-radius: 5px;
  }
  .info-discount {
    height: 10px;
  }
  .info-text {
    color: #999;
    .info-text-1 {
      margin-right: 10px;
    }
  }
  .info-bottom {
    align-items: flex-end;
  }
  .info-bottom-left {
    color: var(--color-text-yellow);
    span {
      font-size: 20px;
    }
  }
  .info-bottom-right-1 {
    background-color: var(--color-background-meituan);
    width: 20px;
    height: 20px;
    border-radius: 20px;
    line-height: 14px;
    font-size: 20px;
    text-align: center;
  }
  .info-bottom-right-2 {
    background-color: var(--color-background-meituan);
    width: 60px;
    height: 20px;
    border-radius: 5px;
    line-height: 16px;
    text-align: center;
  }
}
.goods-choice {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  background-color: var(--color-background-dialog);
  z-index: 10000;
  .my-goods-choice {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 300px;
    min-height: 200px;
    max-height: 400px;
    background-color: #fff;
  }
}
</style>