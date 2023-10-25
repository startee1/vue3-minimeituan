<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useCartStore } from '@/stores'
import GoodsChoice from './GoodsChoice.vue';
import config from '@/config';

interface IGoods {
  id?: number                           // 唯一标识符
  shopid?: number                       // 所属商家
  logo?: string                         // 商品图片
  myshow?: 1 | 0                        // 商品是否展示
  type?: string                         // 商品分类
  title?: string                        // 商品名称
  price?: number                        // 商品单个价格
  singleSell?: 1 | 0                    // 商品是否单个可售
  menuType?: string                     // 商品所属菜单列表
  size?: string                         // 商品分量
  isChoice?: 1 | 0                      // 商品是否可选规格
  choice?: string                       // 商品可选规格内容
  discount?: number                     // 商品折扣
  packingCharges?: number               // 商品打包费用
  goodsLogo?: '无' | '招牌' | '新品'     // 商品右上角 Logo
  pubdate?: string                      // 商品发布日期
}
const {addCart} = useCartStore()

const props = defineProps<{
  goods?:IGoods
}>()
let { goods } = props
const emit = defineEmits<{
  openGoods: [id: number]
}>()
const takeChoice = (t:any,b:any) => {
  goods_choice_container.value = false
  let choiceName = ''
  for (let i = 0; i < b.length; i++) {
    choiceName += b[i].name + '，'
  }
  choiceName = choiceName.slice(-1)
  let totalInfo = {
    count: 1,
    id: props.goods!.id ,
    title: props.goods!.title,
    logo: props.goods!.logo,
    discount: props.goods!.discount,
    choiceName,
    price: props.goods!.price + t
  }
  addCart(totalInfo)
}

// 规格选择弹窗
const goods_choice_container = ref<boolean>(false)
// 规格选择弹窗
const showGoodsChoice = () => {

}
const addGoodsSimple = () => {
  addCart({
    count: 1,
    id: props.goods!.id,
    title: props.goods!.title,
    logo: props.goods!.logo,
    discount: props.goods!.discount,
    choiceName: '',
    price: props.goods!.price
  })
}
onMounted(() => {
  // console.log('onegoods', goods)
})
</script>

<template>
  <!-- 商品列表 -->
  <div>
    <main>
      <section class="flex" @click="emit('openGoods', 123)">
        <section class="icon">
          <img class="icon-pic" :src="config.URLPRE+goods!.logo!.slice(4)"/>
        </section>
        <section class="info">
          <div class="info-title">{{ goods!.title }}</div>
          <div class="info-rank"><span>店内排行第一</span></div>
          <div class="info-text flex">
            <div class="info-text-1">月售400+</div>
            <div class="info-text-2">好评率 77%</div>
          </div>
          <div class="info-discount">{{ goods!.discount == 10 ? '' : goods!.discount+'折' }}</div>
          <div class="info-bottom flex flex-jc-sb">
            <div class="info-bottom-left">￥<span>{{ goods!.price }}</span></div>
            <div class="info-bottom-right-1" v-if="JSON.parse(goods!.choice!).length == 0" @click.stop="addGoodsSimple">+</div>
            <div class="info-bottom-right-2" @click.stop="goods_choice_container = true" v-else>按规格</div>
          </div>
        </section>
      </section>
    </main>
    <div class="goods-choice" @click.stop="goods_choice_container = false" v-if="goods_choice_container">
      <GoodsChoice :choice="JSON.parse(goods!.choice!)" @choice="takeChoice" @click.stop="goods_choice_container = false"/>
    </div>
  </div>
</template>

<style scoped lang="less">
main {
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