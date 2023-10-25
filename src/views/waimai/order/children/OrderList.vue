<script setup lang="ts">
import GoodsList from './GoodsList.vue'
</script>

<template>
  <!-- 订单列表 -->
  <div>
    <main>
      <section class="order-item">
        <div class="order-top flex">
          <div class="order-top-left"></div>
          <div class="order-top-right flex-main">
            <div class="order-info1 flex">
              <div class="order-shop flex-main">样例 &gt;</div>
              <div class="order-status">
                <span>已完成</span>
                <!-- <span>待配送</span> -->
              </div>
            </div>
            <div class="order-info2">
              <span>休息</span>
            </div>
          </div>
        </div>
        <div class="order-mid">
          <GoodsList />
          <!-- <div class="order-goods-one flex flex-ai-midline">
            <div class="goods-logo"><img/></div>
            <div class="goods-title">阿圣诞节哈市乐凯大街花洒开机了的哈刷卡老大</div>
          </div> -->
          <div class="order-goods-count">
            <div class="order-count-price">￥1455.36</div>
            <div class="order-count-per">共 2 件</div>
          </div>
        </div>
        <div class="order-bottom">
          <div class="button-again">再来一单</div>
          <div class="button-review">评价</div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped lang="less">
main {
  padding: 10px;
}
.order-item {
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  .order-top {
    .order-top-left {
      width: 44px;
      height: 44px;
      background-color: #789;
      margin-right: 10px;
      border-radius: 6px;
      overflow: hidden;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .order-top-right {
      .order-shop {
        font-weight: bolder;
        font-size: 16px;
      }
    }
  }
  .order-mid {
    margin: 16px 0;
    position: relative;
    .order-goods-count {
      position: absolute;
      right: 0;
      top: 0;
      background-color: rgba(255,255,255,0);
      text-align: center;
      z-index: 10;
      .order-count-price {
        font-weight: bolder;
        font-size: 16px;
      }
    }
    .order-goods-one {
      .goods-logo {
          width: 90px;
          height: 60px;
          border-radius: 10px;
          overflow: hidden;
          background-color: red;
          margin-right: 10px;
          img {
            display: block;
            width: 100%;
            height: 100%;
          }
        }
      .goods-title {
        flex: 1;
        margin-right: 100px;
        font-size: 16px;
      }
    }
  }
  .order-bottom {
    display: flex;
    justify-content: flex-end;
    &>div {
      margin-left: 10px;
      padding: 10px 15px;
      border-radius: 10px;
      font-weight: bolder;
    }
    .button-again {
      border: 1px solid var(--color-background-grey);
    }
    .button-review {
      padding: 10px 20px;
      background-color: var(--color-background-meituan);
    }
  }
}
</style>