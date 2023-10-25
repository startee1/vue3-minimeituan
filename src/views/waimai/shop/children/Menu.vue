<script setup lang="ts">
import GoodsLists from '@/components/GoodsLists.vue';
import ShopCart from '@/components/ShopCart.vue';
import axios from 'axios';
import config from '@/config'
import { ref, watch } from 'vue';

const props = defineProps<{id: number}>()
const menu_type = ref<string>('') // 菜单目录类型

const emit = defineEmits<{
  openGoods: [id: number]
  openSettle: []
}>()

const onTypeChange = (type:string) => {
  menu_type.value = type
  window.location= `#${type}`  as Location | (string & Location)
}
const typelist = ref<any[]>([])
const goodslist = ref<any[]>([])
const getGoods = (id:any) => {
  axios.get(config.URLPRE+'/front/menu',{params:{id}})
  .then(res => {
    let menu = res.data.data.menu
    let goods = res.data.data.goods
    for (let i = 0; i < menu.length; i++){
      typelist.value.push(menu[i].name)
    }
    let tem = []
    for (let j = 0; j < goods.length; j++){
      let index = -1;
      for(let k = 0; k < tem.length; k++){
        if(tem[k].id == goods[j].menuType){
          index = k
          break
        }
      }
      if(index == -1){
        for(let t = 0; t < menu.length; t++){
          if (menu[t].id == goods[j].menuType){
            tem.push({id: goods[j].menuType,name: menu[t].name, children:[goods[j]]})
            break;
          }
        }
      }else{
        tem[index].children.push(goods[j])
      }
    }
    goodslist.value = tem
  })
}
watch(() => props.id,
  (newval) => {
    if (newval)
    getGoods(newval)
  },
  {immediate:true}
)

</script>

<template>
  <div class="menu flex">
    <div class="type">
      <div class="type-list" v-for="m in typelist" :key="m" :class="{'type-this': menu_type == m}" @click="onTypeChange(m)">{{ m }}</div>
    </div>
    <div class="goods">
      <div v-for="g in goodslist" :key="g.name" :id="g.name">
        <div class="title">{{ g.name }}</div>
        <div class="goods-list">
          <GoodsLists v-for="child in g.children" :key="child.id" :goods="child" @open-goods="() => emit('openGoods', child)"/>
        </div>
      </div>
      <div style="height: 100px;"></div>
    </div>
    <ShopCart @open-settle="emit('openSettle')"/>
  </div>
</template>

<style scoped lang="less">
.menu {
  height: 100%;
}
.type, .goods {
  overflow-y: scroll;
  min-height: 100%;
}
.type {
  background-color: rgb(236, 236, 236);
  width: 100px;
  .type-list {
    text-align: center;
    height: 40px;
    line-height: 40px;
  }
  .type-this {
    font-weight: 600;
    background: #fff;
  }
}
.goods {
  flex: 1;
  background: #fff;
  padding: 10px;
}
.title {
  font-size: 16px;
}
</style>