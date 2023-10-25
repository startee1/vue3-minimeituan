<script setup lang="ts">
import { ref } from 'vue'
import { useCartStore } from '@/stores'
import config from '@/config';
interface Props {
  closeable?: boolean
}
const { cart,clearMe } = useCartStore()
const props = withDefaults(defineProps<Props>(), {
  closeable: false,
})
const countmoney = ref(0)
const initmoney = ref(0)
for(let i = 0; i < cart.length;i++){
  countmoney.value += (cart[i].price)*(cart[i].count)*(cart[i].discount)*0.1
  initmoney.value += (cart[i].price)*(cart[i].count)
}
const address = ref<number>(0) // 地址
const notes = ref<string>('') // 备注
const tableware_count = ref<number>(0) // 餐具类型

const show_address = ref<boolean>(false)
const show_time = ref<boolean>(false)
const show_buy = ref<boolean>(false)
const show_notes = ref<boolean>(false)
const show_tableware = ref<boolean>(false)

const emit = defineEmits<{
  close: []
}>()
const submitOrder = () => {
  emit('close')
  clearMe()
}
</script>

<template>
  <!-- 单个商铺结算页 -->
  <div class="settle">
    <section class="top flex">
      <div @click="emit('close')">
        <el-icon :size="20"><ArrowLeft /></el-icon>
      </div>
      <div class="page-title">商品列表</div>
    </section>
    <main>
      <section class="delivery-info">
        <div class="delivery-title">外卖配送</div>
        <div class="flex">
          <div class="delivery-address">
            <div class="address-name">故宫</div>
            <div class="address-user">
              <span>何先生</span>
              <span>13201258112</span>
            </div>
          </div>
          <div class="address-more" @click="show_address = true">&gt;</div>
        </div>
        <div class="flex">
          <div class="delivery-time">立即送出</div>
          <div class="time-more" @click="show_time = true">大约18：36送达&nbsp;&gt;</div>
        </div>
      </section>
      <section>
        <div class="buy flex">
          <div class="buy-type">支付方式</div>
          <div class="buy-typemore" @click="show_buy = true">普通支付&nbsp;&gt;</div>
        </div>
      </section>
      <section>
        <div class="shop">
          <div class="shop-name">订单</div>
          <el-divider/>
          <div class="shop-food" v-for="c in cart" :key="c">
            <div class="food-info flex">
              <div class="info-main flex">
                <div class="food-info-logo">
                  <img :src="config.URLPRE+c.logo.slice(4)"/>
                </div>
                <div class="food-info-detail">
                  <div class="food-info-name">{{ c.title }}</div>
                  <div class="food-info-weight">{{ c.size }}</div>
                  <div class="food-info-count">×{{ c.count }}</div>
                </div>
              </div>
              <div class="info-right">￥ {{ c.price*c.count }}</div>
            </div>
            <div class="food-info flex">
              <div class="info-main">打包费</div>
              <div class="info-right">{{ c.packingCharges || 0 }}￥</div>
            </div>
            <div class="food-info flex">
              <div class="info-main">配送费</div>
              <div class="info-right">{{ c.deliveryPrice || 0 }}￥</div>
            </div>
          </div>
          <el-divider/>
          <div class="shop-price flex">
            <!-- <div class="shop-price-discount fs-xs">已优惠￥21</div> -->
            <div class="shop-price-count">
              <span class="fs-sm">共计</span>&nbsp;
              <span class="fs-lg">￥{{ countmoney }}</span>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="another">
          <div class="notes flex">
            <div class="info-main">备注</div>
            <div class="info-right" @click="show_notes = true">无&nbsp;&gt;</div>
          </div>
          <div class="tableware flex">
            <div class="info-main">餐具数量</div>
            <div class="info-right" @click="show_tableware = true">按数量童工&nbsp;&gt;</div>
          </div>
        </div>
      </section>
    </main>
    <section class="submit-block">
      <section class="submit flex">
        <div class="submit-price">
          <div class="submit-price-count">￥{{ countmoney }}</div>
          <div class="submit-price-discount">{{ initmoney }}</div>
        </div>
        <div class="submit-button" @click="submitOrder">提交订单</div>
      </section>
    </section>
    <!-- 配送地址弹窗 -->
    <el-drawer v-model="show_address" direction="btt" class="address-drawer">
      <template #header>
        <div class="draw-title" style="text-align: center;
        font-weight: bolder;">选择收货地址</div>
      </template>
      <div class="flex" @click="show_address = false">
        <div class="address-button"><span></span></div>
        <div class="delivery-address">
          <div class="address-name">故宫</div>
          <div class="address-user">
            <span>何先生</span>
            <span>13201258112</span>
          </div>
        </div>
      </div>
    </el-drawer>
    <!-- 配送时间弹窗 -->
    <el-drawer v-model="show_time" direction="btt" class="time-drawer">
      <template #header>
        <div class="draw-title" style="text-align: center;
        font-weight: bolder;">选择预计送达时间（限今日）</div>
      </template>
      <div class="time-select" @click="show_time = false">
        <div>立即送出</div>
        <el-divider/>
      </div>
      <div>
        <div>12:00-13:00</div>
        <el-divider/>
      </div>
    </el-drawer>
    <!-- 支付方式弹窗 -->
    <el-drawer v-model="show_buy" direction="btt">
      <span style="font-weight: bolder;">普通支付</span>
    </el-drawer>
    <!-- 备注弹窗 -->
    <el-dialog v-model="show_notes" class="notes-dialog" title="备注" style="width: 90%;" direction="btt">
      <el-input
        v-model="notes"
        maxlength="50"
        :rows="10"
        placeholder="添加备注"
        show-word-limit
        type="textarea"
      />
      <div class="notes-add"><el-button type="info" plain>添加</el-button></div>
    </el-dialog>
    <!-- 餐具数量弹窗 -->
    <el-drawer :size="300" v-model="show_tableware" class="tableware-drawer" direction="btt">
      <template #header>
        <div class="draw-title" style="text-align: center;
        font-weight: bolder;">餐具数量</div>
      </template>
      <div class="tableware-select flex flex-jc-sa">
        <el-button>商家按餐量提供</el-button>
        <el-button>无需餐具</el-button>
        <el-button>自定义数量</el-button>
      </div>
      <div style="margin: 10px 0;" class="flex flex-jc-center">
        <el-input-number v-model="tableware_count" :min="1" :max="10" size="small"/>
      </div>
      <div class="save-tableware">保存</div>
    </el-drawer>
  </div>
</template>

<style scoped lang="less">
.settle {
  width: 100%;
  height: 100%;
  position: relative;
  background: var(--color-background-grey);
  
  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: 0;
    width: 100%;
    height: 200px;
    z-index: 0;
    background-image: linear-gradient(var(--color-background-meituan) 100px,var(--color-background-grey));
  }
}
.top {
  position: absolute;
  width: 100%;
  z-index: 10;
  top: 0;
  left: 0;
  padding: 10px 30px;
  line-height: 1;
  font-size: 16px;
  background-color: var(--color-background-meituan);
}
.page-title {
  flex: 1;
  text-align: center;
}
main {
  position: relative;
  padding-top: 50px;
  padding-bottom: 130px;
  height: 100%;
  overflow-y: scroll;
  & > section {
    position: relative;
    z-index: 3;
    border-radius: 5px;
    padding: 10px;
    background-color: #fff;
    margin: 10px 5px;
  }

  .info-main {
    flex: 1;
  }
  .delivery-address,.delivery-time {
    flex: 1;
  }
  .delivery-address {
    .address-name {
      font-size: 24px;
      font-weight: bolder;
    }
    .address-user {
      color: var(--color-text-grey);
      span {
        margin-right: 10px;
      }
    }
  }
  .delivery-time {
    margin: 10px 0;
    font-weight: bolder;
  }
  .time-more {
    margin: 10px 0;
    color: var(--color-text-yellow);
  }
  .delivery-title {
    font-size: 20px;
    font-weight: 800;
  }
  .buy {
    .buy-type {
      flex: 1;
      font-weight: bolder;
    }
  }
  .shop-food {
    .food-info {
      margin: 10px 0;
      .food-info-logo {
        width: 60px;
        height: 60px;
        background-color: red;
        border-radius: 10px;
        overflow: hidden;
        margin-right: 10px;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      .food-info-name {
        font-size: 16px;
      }
      .food-info-weight, .food-info-count {
        color: var(--color-text-grey);
      }
    }
  }
  .shop-price {
    justify-content: flex-end;
    height: 40px;
    line-height: 40px;
    & > div {
      margin-left: 10px;
    }
  }
  .another {
    & > div {
      margin: 15px 0;
    }
    .info-main {
      font-weight: bolder;
    }
  }
}
.submit-block {
  position: absolute;
  bottom: 20px;
  width: 100%;
  padding: 10px;
  z-index: 10;
  .submit {
    background-color: #131124;
    width: 100%;
    height: 60px;
    border-radius: 60px;
    overflow: hidden;
    .submit-price {
      margin-left: 20px;
      line-height: 1.3;
      flex: 1;
    }
    .submit-price-count {
      color: #fff;
      font-size: 24px;
    }
    .submit-price-discount {
      color: var(--color-text-grey);
      text-decoration: line-through;
    }
    .submit-button {
      background-color: var(--color-background-meituan);
      width: 120px;
      line-height: 60px;
      font-size: 22px;
      text-align: center;
    }
  }
}
.address-drawer {
  .address-button {
    width: 20px;
    height: 20px;
    border-radius: 20px;
    border: 1px solid var(--color-text-grey);
    margin-top: 10px;
    margin-right: 10px;
  }
  .address-select {
    width: 20px;
    height: 20px;
    border-radius: 20px;
    border: 1px solid var(--color-background-meituan);
    margin-top: 10px;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      width: 10px;
      height: 10px;
      border-radius: 10px;
      background-color: var(--color-background-meituan);
    }
  }
}
.time-drawer {
  .time-select {
    color: var(--color-text-yellow);
  } 
}
.notes-dialog {
  .notes-add {
    margin-top: 10px ;
    text-align: end;
  }
}
.tableware-drawer {
  .save-tableware {
    padding: 10px;
    margin: 10px;
    background-color: var(--color-background-meituan);
    text-align: center;
    border-radius: 10px;
  }
}
</style>