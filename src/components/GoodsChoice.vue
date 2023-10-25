<script setup lang="ts">
import { ref, onMounted } from 'vue';

const props = defineProps<{choice: any}>()
const emit = defineEmits<{
  close: [],
  choice: [price:any,choice:any]
}>()
const countPrice = ref(0)
const countName = ref<any[]>([])
const addChoice = (parent:any, value:any) => {
  countPrice.value += value.price
  countName.value = countName.value.filter((i:any) => {
    return i.parent != parent
  })
  countName.value.push({parent,price: value.name})
}
const handlerChoice = () => {
  emit('choice',countPrice.value,countName.value)
}
onMounted(() => {
  // console.log(props.choice)
})
</script>

<template>
  <!-- 商品参数选择 -->
  <div class="goods-choice" @click.stop="emit('close')">
    <div class="my-goods-details" @click.stop>
      <div class="my-goods-choice">
        <div class="goods-title">选择</div>
        <div class="goods-choice-item">
          <div v-for="c in props.choice" :key="c.name">
            <div class="goods-choice-title">{{ c.name }}</div>
            <div class="goods-choice-list" v-for="child in c.children" :key="child.name" @click="addChoice(c.name,child)">
              <span class="goods-choice-name">{{ child.name }}</span>
              <span class="goods-choice-money">￥{{ child.price }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="my-goods-select">
        <div>已选规格：<span v-for="val in countName" :key="val.parent">{{ val.price }} 、</span></div>
      </div>
      <div class="my-goods-count">
        <div class="count-left">
          <span class="count-info1">总计</span><span class="count-info2">￥{{ countPrice }}</span>
        </div>
        <div>
          <div class="count-right" @click="handlerChoice">
            <span class="count-info3">+</span><span class="count-info4">加入购物车</span>
          </div>
          <!-- <div><el-input-number size="small"/></div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
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