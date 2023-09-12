<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

const emit = defineEmits<{
  openSettle: []
}>()

const num = ref<number>(0)
const show_dialog = ref<boolean>(false)
</script>

<template>
  <div class="shop-cart">
    <main class="flex">
      <section class="cart-logo" @click="show_dialog = true">
        <div class="cart-logo-pic">
          <img src="@/preview/image/cart.png"/>
          <div class="count-buy">1111</div>
        </div>
      </section>
      <section class="money flex flex-ai-midline" @click="show_dialog = true">
        <!-- <div class="empty-buy"><span class="count">￥29</span><span style="margin: 0 1px;">|</span><span class="car-money">预估配送费￥29</span></div> -->
        <div class="have-buy">
          <div class="count">￥29</div>
          <div class="car-money">预估配送费￥29</div>
        </div>
      </section>
      <section class="buy ">
        <!-- <div class="start-money flex flex-ai-midline flex-jc-center">差￥181111起送</div> -->
        <div class="buy-money  flex flex-ai-midline flex-jc-center" @click="emit('openSettle')">去结算</div>
      </section>
    </main>
    <!-- 查看购买列表 -->
    <div class="dialog" @click="show_dialog = false" v-if="show_dialog">
      <div class="dialog-info" @click.stop>
        <div class="dialog-top flex flex-jc-sb">
          <div>打包费5.7</div>
          <div class="c-grey">清空购物车</div>
        </div>
        <hr>
        <div class="dialog-goods">
          <div class="my-goods flex">
            <div class="my-goods-logo">
              <img class="my-goods-logo-pic" />
            </div>
            <div class="my-goods-info">
              <div class="my-goods-info-title" style="font-size: 16px;">划线</div>
              <div class="my-goods-info-deal" style="font-size: 12px;">2人份</div> 
              <div class="my-goods-info-bottom flex flex-jc-sb">
                <div class="my-goods-info-left">
                  <div class="my-goods-info-money"><span>Y29</span></div>
                </div>
                <div class="my-goods-info-right">
                  <div class="my-goods-info-num">
                    <el-input-number v-model="num" :min="1" :max="10" step-strictly size="small"  />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="my-goods flex">
            <div class="my-goods-logo">
              <img class="my-goods-logo-pic" />
            </div>
            <div class="my-goods-info">
              <div class="my-goods-info-title" style="font-size: 16px;">划线</div>
              <div class="my-goods-info-deal" style="font-size: 12px;">2人份</div> 
              <div class="my-goods-info-bottom flex flex-jc-sb">
                <div class="my-goods-info-left">
                  <div class="my-goods-info-money"><span>Y29</span></div>
                </div>
                <div class="my-goods-info-right">
                  <div class="my-goods-info-num">
                    <el-input-number v-model="num" :min="1" :max="10" step-strictly size="small"  />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="my-goods flex">
            <div class="my-goods-logo">
              <img class="my-goods-logo-pic" />
            </div>
            <div class="my-goods-info">
              <div class="my-goods-info-title" style="font-size: 16px;">划线</div>
              <div class="my-goods-info-deal" style="font-size: 12px;">2人份</div> 
              <div class="my-goods-info-bottom flex flex-jc-sb">
                <div class="my-goods-info-left">
                  <div class="my-goods-info-money"><span>Y29</span></div>
                </div>
                <div class="my-goods-info-right">
                  <div class="my-goods-info-num">
                    <el-input-number v-model="num" :min="1" :max="10" step-strictly size="small"  />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
main {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  width: 90%;
  margin: auto;
  height: 60px;
  z-index: 1000;
}
.cart-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  background-color: #3b3636;
  border-radius: 40px 0 0 40px;
  .cart-logo-pic {
    width: 40px;
    height: 40px;
    position: relative;
    .count-buy {
      position: absolute;
      text-align: center;
      color: #fff;
      right: -10px;
      top: 0;
      width: 20px;
      height: 20px;
      border-radius: 20px;
      background-color: #ff3f3f;
    }
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}
.money {
  flex: 1;
  background-color: #3b3636;
  color: #fff;
  .count {
    font-size: 20px;
  }
}
.buy {
  width: 80px;
  border-radius: 0 40px 40px 0;
  overflow: hidden;
  .start-money {
    color: #ab9d9d;
    background-color: #3b3636;
    width: 100%;
    height: 100%;
  }
  .buy-money {
    background-color: var(--color-background-meituan);
    color: #333;
    font-weight: 600;
    font-size: 16px;
    width: 100%;
    height: 100%;
  }
}
.dialog {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: var(--color-background-dialog);
  .dialog-info {
    position: absolute;
    width: 100%;
    bottom: 0;
    padding: 10px 10px 100px 10px;
    background: #fff;
  }
  .dialog-goods {
    max-height: 200px;
    overflow-y: scroll;
  }
  .my-goods {
    margin: 10px 0;
    .my-goods-logo {
      width: 70px;
      height: 70px;
      border-radius: 10px;
      overflow: hidden;
      background-color: #000;
      margin-right: 10px;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .my-goods-info {
      flex: 1;
    }
    .my-goods-info-title {
     font-size: 16px;
     font-weight: 600; 
    }
    .my-goods-info-deal {
      color: var(--color-text-grey);
    }
    .my-goods-info-left {
      font-size: 14px;
      color: var(--color-text-yellow);
    }
  }
}
</style>