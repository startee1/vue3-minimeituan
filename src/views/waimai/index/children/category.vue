<script setup lang="ts">
import { useRouter } from 'vue-router';


interface IFoodType {
  text: string,
  img: string,
  id: number
}

const foodMainTypeArray:IFoodType[] = [
  {id: 0,text: 'shop',img:'/public/favicon.ico'},
  {id: 2,text: 'shop',img:'/public/favicon.ico'},
  {id: 3,text: 'shop',img:'/public/favicon.ico'},
  {id: 4,text: 'shop',img:'/public/favicon.ico'},
  {id: 5,text: 'shop',img:'/public/favicon.ico'},
]
const foodViceTypeArray:IFoodType[] = [
  {id: 1,text: 'zxc',img:'/public/favicon.ico'},
  {id: 1,text: 'zxc',img:'/public/favicon.ico'},
  {id: 1,text: 'zxc',img:'/public/favicon.ico'},
  {id: 1,text: 'zxc',img:'/public/favicon.ico'},
  {id: 1,text: 'zxc',img:'/public/favicon.ico'},
  {id: 1,text: 'zxc',img:'/public/favicon.ico'},
]

const router = useRouter()

const onShopType = () => {
  router.push({ name: 'waimaiShopType', params: { id: 3 } })
}

</script>

<template>
  <div>
    <template v-if="foodMainTypeArray.length > 0">
      <div class="grid" @click="onShopType">
        <div v-for="mt in foodMainTypeArray" :key="mt.id" class="food-type" >
          <img :src="mt.img" class="icon-md"/>
          <div>{{ mt.text }}</div>
        </div>
      </div>
    </template>
    <template v-if="foodViceTypeArray.length > 0">
      <div class="grid" style="">
        <div v-for="mv in foodViceTypeArray" :key="mv.id" class="food-type" >
          <img :src="mv.img" class="icon-ms"/>
          <div>{{ mv.text }}</div>
        </div>
        <div class="food-type" >
          <img src="@/preview/image/Birds.png" class="icon-ms"/>
          <div>更改</div>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped lang="less">
.grid {
  grid-template-columns: repeat(5, 1fr);grid-gap: 2px;
}
.food-type {
  text-align: center;
  margin: 4px 0;
  line-height: 1;
}
</style>