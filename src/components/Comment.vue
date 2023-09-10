<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  reply?: boolean
  score?: boolean
  closeable?: boolean
  comment_right_offset?: boolean // 评论向右偏移
}

const props = withDefaults(defineProps<Props>(), {
  reply: false,
  score: false,
  closeable: false,
  comment_right_offset: true
})

const emit = defineEmits<{
  close: []
}>()

const my_score = ref<number>(0)
</script>

<template>
  <div class="comment">
    <section v-if="props.closeable">
      <div @click="emit('close')" class="close flex flex-ai-midline flex-jc-center">
        <el-icon :size="20"><ArrowLeft /></el-icon>
      </div>
    </section>
    <nav class="flex flex-wrap" :class="{'closeNav': props.closeable}">
      <div>全部</div>
      <div>好评</div>
      <div>差评</div>
    </nav>
    <main>
      <section>
        <div class="comment-list">
          <div class="user-info flex">
            <div class="user-logo">
              <img />
            </div>
            <div class="user-submit">
              <div class="user-name">合计</div>
              <div class="user-date">2023.6.7</div>
            </div>
          </div>
          <div :class="{'right_offset': props.comment_right_offset}">
            <div class="score-info" v-if="props.score"><el-rate v-model="my_score" size="small" /></div>
            <div class="comment-info">这个好啊</div>
            <div class="reply-info" v-if="props.reply">
              <div class="reply-name">商家恢复:</div>
              <div class="reply-comment">谢谢认可</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped lang="less">
.comment {
  width: 100%;
  height: 100%;
  position: relative;
}
.close {
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background-color: var(--color-background-grey);
  margin: 20px 15px;
  position: absolute;
  top: 0;
}
nav {
  display: flex;
  padding: 15px;
  flex-wrap: wrap;
  div {
    background-color: var(--color-background-meituan-lighter);
    margin-right: 10px;
    padding: 3px 10px;
    border-radius: 5px;
  }
}
.closeNav {
  padding-top: 60px;
}
main {
  padding: 15px;
}
.comment-list {
  padding: 15px 0;
  border-bottom: 1px solid #b1b1b1;
  .user-logo {
    width: 60px;
    height: 60px;
    border-radius: 60px;
    background-color: #123;
    overflow: hidden;
    margin-right: 10px;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .user-name {
    font-size: 16px;
    font-weight: bolder;
  }
  .user-date {
    color: var(--color-text-grey);
  }
  .reply-info {
    background-color: #c9c9c9;
    border-radius: 5px;
    padding: 10px;
    .reply-name {
      font-size: 14px;
      font-weight: bold;
    }
  }
  .right_offset {
    margin-left: 70px;
  }
}
</style>