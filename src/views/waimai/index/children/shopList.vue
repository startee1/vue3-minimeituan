<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import config from '@/config'

interface IShop {
  id?: number                 // 唯一标识
  myshow?: number             // 是否展示
  shopid?: number             // 商铺账号信息
  title?: string              // 商品名称
  address?: string            // 地址
  phone?: string              // 电话
  typemainid?: number         // 店铺主分类
  typeviceid?: number         // 店铺次分类
  preview?: string            // 标语
  info?: string               // 简介
  deliveryPrice?: number      // 配送费
  minPriceDelivery?: number   // 起始配送费
  startTime?: string          // 起始营业时间
  endTime?: string            // 结束营业时间
  logo?: string               // 店铺头像
  background?: string         // 店铺背景
  yinyezhizhao?: string       // 营业执照
  canyinxuke?: string         // 餐饮许可证
}

const router = useRouter()
const viewShop = (id: number) => {
  router.push({name: 'waimaiShop', query: {id}}) 
}
// 获取商店
const getShop = () => {
  axios.get(config.URLPRE + '/front/shoplist') 
  .then(res => {
    let result = res.data
    shop_list.value = result.data
  })
}
const shop_list = ref<IShop[]>([]) 
onMounted(() => {
  getShop()
})
</script>

<template>
  <div class="list">
    <div class="shoplist flex" v-for="shop in shop_list" :key="shop.id" @click="viewShop(shop.id!)">
      <div class="image"><img :src="config.URLPRE+shop.logo!.slice(4)" style="width: 100%;height: 100%;"/></div>
      <div class="main">
        <div class="name">{{ shop.title }}</div>
        <div class="info1 flex flex-jc-sb">
          <div class="info1-left flex">
            <div class="score">4.5分</div>
            <div class="sellcount">月售{{ 30 }}+</div>
            <div class="priceavr">人均￥{{ 30 }}</div>
          </div>
          <div class="info1-right">
            <div class="delivery">美团专送</div>
          </div>
        </div>
        <div class="info2 flex flex-jc-sb">
          <div class="info2-left flex">
            <div class="startmoney">起送 ￥{{ shop.minPriceDelivery }}</div>
            <div class="deliverymoney">配送 约￥{{ 0 }}</div>
          </div>
          <div class="info2-right flex">
            <div class="deliverytime">{{ 20 }}分钟</div>
            <div class="distance">{{ '20km' }}</div>
          </div>
        </div>
        <div class="info3">
          <div class="rank-icon">本地排行第5名</div>
        </div>
        <div class="info4">
          <div class="info4-left">
            <div class="discounts">
              <span>3.6折</span><span>满10-5</span>
            </div>
          </div>
          <div class="info4-right">
            <div class="discounts-more"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.shoplist {
  margin: 5px 10px;
  background-color: #fff;
  border-radius: 5px;
  height: 110px;
  box-sizing: border-box;
  padding: 10px;
  line-height: 1;
  font-size: 12px;
  color: #999;
  .image {
    width: 90px;
    height: 90px;
    background-color: #999;
    margin-right: 10px;
    border-radius: 5px;
    overflow: hidden;
  }
  .main {
    flex: 1;
    .name {
      font-size: 16px;
      font-weight: 800;
      color: #333;
    }
    .info1 {
      .info1-left {
        margin-top: 3px;
        flex: 1;
        .score {
          font-size: 14px;
          color: var(--color-text-yellow);
        }
        &>div{
          margin-right: 5px;
        }
      }
      .info1-right {
        .delivery {
          color: var(--color-text-yellow);
          font-size: 6px;
          border: 1px solid var(--color-text-yellow);
          padding: 2px;
          border-radius: 5px;
        }
      }
    }
    .info2 {
      margin-top: 3px;
      .info2-left {
        font-size: 10px;
        &>div{
          margin-right: 5px;
        }
      }
      .info2-right {
        &>div{
          margin-left: 5px;
        }
      }
    }
    .info3 {
      .rank-icon {
        display: inline-block;
        background-color: rgb(251,245,232);
        color: rgb(193, 144, 39);
        padding: 5px 10px;
        font-weight: 600;
        border-radius: 4px;
        margin: 2px 0;
      }
    }
    .info4 {
      margin-top: 3px;
      .discounts {
        & span {
          color: rgb(254, 29, 29);
          border: 1px solid rgb(255, 17, 17);
          margin-right: 5px;
          border-radius: 3px;
          padding: 0 3px;
        }
      }
    }
  }
}
</style>