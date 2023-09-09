<script setup lang="ts">
import { ref } from 'vue'

const css_menu = ref<string>('menu') // 导航分类

const props = defineProps<{
  goods_id: number
}>()
const emit = defineEmits<{
  closeGoods: []
}>()

// 切换菜单内容
const onMenuClick = (type: string) => {
  css_menu.value = type
}


</script>

<template>
  <div class="goods">
    <div class="top">
      <div class="close" @click="emit('closeGoods')">
        <el-icon :size="30"><CircleCloseFilled /></el-icon>
      </div>
    </div>
    <main>
      <section>
        <div class="goods-logo">
          <img/>
        </div>
        <div class="info">
          <div class="info-top flex">
            <div class="info-left">
              <div class="info-title">啊十九大看来是</div>
              <div class="info-size"><span>1人份</span></div>
              <div class="info-rank"><span>店内排行第一</span></div>
              <div class="info-text flex">
                <div class="info-text-1">月售400+</div>
                <div class="info-text-2">好评率 77%</div>
              </div>
            </div>
            <div class="info-right">
              <el-icon :size="30"><Star /></el-icon>
            </div>
          </div>
          <div class="info-discount"></div>
          <div class="info-bottom flex flex-jc-sb">
            <div class="info-bottom-left">￥<span>29</span></div>
            <!-- <div class="info-bottom-right-1">+</div> -->
            <div class="info-bottom-right-2" @click="goods_choice_container = true">按规格</div>
          </div>
        </div>
      </section>
      <section>
        <nav class="menu-list">
          <div class="menu-title" :class="{'menu-this': css_menu == 'menu'}" @click="onMenuClick('menu')">点菜</div>
          <div class="menu-title" :class="{'menu-this': css_menu == 'comment'}" @click="onMenuClick('comment')">评价</div>
        </nav>
        <div class="detail-info flex">
          <div class="detail-left">比例巴拉阿拉山口大家阿萨德:</div>
          <div class="detail-right">大家收到货撒了大家好索拉卡等哈收纳仔细，名称那些，怎么VB财政局很正常科技了哈v最大山卡拉激发很大张卡拉法基很大制卡机发哈</div>
        </div>
        <div class="detail-info flex">
          <div class="detail-left">比例巴拉阿拉山口大家阿萨德:</div>
          <div class="detail-right">大家收到货撒了大家好索拉卡等哈收纳仔细，名称那些，怎么VB财政局很正常科技了哈v最大山卡拉激发很大张卡拉法基很大制卡机发哈</div>
        </div>
      </section>
      <section>
        <div class="title">
          外卖评价
        </div>
        <div class="pre-comment flex">
          <div class="pre-comment-left"><img/></div>
          <div class="pre-comment-mid">
            <div class="pre-comment-name">name</div>
            <div class="pre-comment-word">nice-bro</div>
          </div>
          <div class="pre-comment-right">2022.1.2</div>
        </div>
        <div class="more-comment">更多<el-icon><ArrowRight /></el-icon></div>
      </section>
    </main>
  </div>
</template>

<style scoped lang="less">
.goods {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: #fff;
  z-index: 1001;
  overflow-y: scroll;
}
.top {
  position: absolute;
  top: 0;
  .close {
    opacity: 0.8
  }
}
.goods-logo {
  width: 100%;
  height: 250px;
  background-color:red;
  img {
    width: 100%;
    height: 100%;  
  }
}
.goods {
  background-color: var(--color-background-grey);
  section {
    margin-bottom: 10px;
    background-color: #fff;
    padding-bottom: 10px;
  }
}

.info {
  padding: 10px;
  .info-left {
    flex: 1;
  }
  .info-left > div {
    margin: 10px 0;
  }
  .info-right {
    width: 50px;
  }
  .info-title {
    font-size: 18px;
    font-weight: 600;
  }
  .info-size span {
    padding: 3px;
    border-radius: 3px;
    background-color: var(--color-background-grey);
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
.menu-list {
  height: 40px;
  display: flex;
  border-bottom: 1px solid grey;
  .menu-title {
    position: relative;
    height: 40px;
    line-height: 40px;
    width: 80px;
    font-size: 15px;
    color: #333;
    text-align: center;
  }
  .menu-this::before {
    position: absolute;
    content: "";
    left: 28px;
    bottom: 0;
    width: 20px;
    height: 3px;
    border-radius: 10px;
    background-color: var(--color-background-meituan);
  }
}

.detail-info {
  padding: 5px;
  .detail-left {
    width: 100px;
    color: var(--color-text-grey);
    font-size: 15px;
  }
  .detail-right {
    flex: 1;
    font-size: 16px;
  }
}
.title {
  padding: 10px;
  font-size: 17px;
  font-weight: bolder;
}
.pre-comment {
  padding: 10px;
  .pre-comment-left {
    width: 60px;
    height: 60px;
    background-color: blue;
    border-radius: 60px;
    overflow: hidden;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .pre-comment-mid {
    flex: 1;
    margin: 0 10px;
  }
  .pre-comment-right {
    color: var(--color-text-grey);
  }
}
.more-comment {
  background-color: var(--color-background-grey);
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  text-align:center;
}
</style>