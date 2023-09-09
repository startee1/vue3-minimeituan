<script setup lang="ts">
import { ref } from 'vue'

interface IGoods {
  id?: number //asdsadasdasdsadsa补上
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
const emit = defineEmits<{
  openGoods: [id: number]
}>()


// 规格选择弹窗
const goods_choice_container = ref<boolean>(false)
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
      <section class="info" @click="emit('openGoods', 123)">
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
          <div class="info-bottom-right-2" @click="goods_choice_container = true">按规格</div>
        </div>
      </section>
    </main>
    <div class="goods-choice" @click="goods_choice_container = false" v-if="goods_choice_container">
      <div class="my-goods-details" @click.stop>
        <div class="my-goods-choice">
          <div class="goods-title">美味</div>
          <div class="goods-choice-item">
            <div class="goods-choice-title">分量</div>
            <div class="goods-choice-list">
              <span class="goods-choice-name">零食</span>
              <span class="goods-choice-money">￥10</span>
            </div>
            <div class="goods-choice-list">
              <span class="goods-choice-name">零食</span>
              <span class="goods-choice-money">￥10</span>
            </div>
          </div>
        </div>
        <div class="my-goods-select">
          <div>已选规格：300kg、ok</div>
        </div>
        <div class="my-goods-count">
          <div class="count-left">
            <span class="count-info1">总计</span><span class="count-info2">$11.8</span>
          </div>
          <div>
            <div class="count-right">
              <span class="count-info3">+</span><span class="count-info4">加入购物车</span>
            </div>
            <!-- <div><el-input-number size="small"/></div> -->
          </div>
        </div>
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
  .my-goods-details {
    position: absolute;
    display: flex;
    flex-direction: column;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 300px;
    min-height: 200px;
    max-height: 500px;
    background-color: #fff;
    border-radius: 5px;
    overflow: hidden;
  }
  .my-goods-choice {
    padding: 20px 15px 10px 15px;
    flex: 1;
    overflow: scroll;
  }
  .goods-title {
    font-size: 32px;
    font-weight: bold;
  }
  .goods-choice-item {
    margin: 10px 0;
  }
  .goods-choice-title {
    font-size: 24px;
    font-weight: bolder;
  }
  .goods-choice-list {
    display: inline;
    border: 2px solid var(--color-background-meituan);
    padding: 3px;
    border-radius: 5px;
    background-color: rgb(255, 246, 218);
    color: rgb(207, 164, 37);
    font-weight: bolder;
    font-size: 16px;
    margin: 5px 5px 0 0;
    .goods-choice-name {
      padding: 3px 6px;
    }
    .goods-choice-money {
      border-left: 2px solid var(--color-background-meituan);
      padding: 3px 6px;
    }
  }
  .my-goods-select {
    padding: 5px 15px;
    font-size: 15px;
    border: 1px solid rgb(200, 200, 200);
    background-color: rgb(230, 230, 230);
  }
  .my-goods-count {
    display: flex;
    padding: 15px 15px;
    align-items: center;
    .count-left {
      flex: 1;
      font-size: 24px;
    }
    .count-right {
      border-radius: 5px;
      height: 36px;
      font-size: 12px;
      line-height: 1;
      padding: 0 5px;
      background-color: var(--color-background-meituan);
    }
    .count-info2 {
      color: var(--color-text-yellow);
    }
    .count-info3 {
      font-size: 30px;
    }
    .count-info4 {
      position: relative;
      top: -2px;
      font-size: 16px;
    }
  }
}
</style>