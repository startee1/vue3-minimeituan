<script setup lang="ts">
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import axios from 'axios';
import config from '@/config'
interface IFoodType {
  name: string,
  image: string,
  id: number
}

const foodMainTypeArray = ref<IFoodType[]>([])
const foodViceTypeArray = ref<IFoodType[]>([])

const router = useRouter()

const onShopType = () => {
  router.push({ name: 'waimaiShopType', params: { id: 3 } })
}
// 获取类型
const getType = () => {
  axios.get(config.URLPRE + '/type/list') 
  .then(res => {
    let result = res.data
    for (let i = 0; i < result.data.length; i++) {
      if (i < 4) {
        foodMainTypeArray.value.push(result.data[i])
      }else{
        foodViceTypeArray.value.push(result.data[i])
      }
    }
  })
}

onMounted(() => {
  getType()
})


</script>

<template>
  <div>
    <template v-if="foodMainTypeArray.length > 0">
      <div class="grid" @click="onShopType">
        <div v-for="mt in foodMainTypeArray" :key="mt.id" class="food-type" >
          <img :src="config.URLPRE + '/public/images/'+mt.image" class="icon-md" v-if="mt.image" style="background-color: #fff;"/>
          <div>{{ mt.name }}</div>
        </div>
      </div>
    </template>
    <template v-if="foodViceTypeArray.length > 0">
      <div class="grid" style="">
        <div v-for="mv in foodViceTypeArray" :key="mv.id" class="food-type" >
          <img :src="config.URLPRE + '/public/images/'+mv.image" class="icon-ms" v-if="mv.image" style="background-color: #fff;"/>
          <div>{{ mv.name }}</div>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped lang="less">
.grid {
  padding: 10px 20px;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2px;
}
.food-type {
  text-align: center;
  margin: 4px 0;
  line-height: 1;
}
</style>