<script setup lang="ts">
const props = defineProps<{address:string,startTime: string,endTime: string,phone:string}>()
</script>

<template>
  <div class="detail">
    <div class="info">
      <div>
        <span><el-icon :size="16"><Location /></el-icon></span>
        <span class="info-text">{{ props.address }}</span>
        <el-popover
          placement="bottom"
          :width="200"
          trigger="click"
          :content="props.phone"
        >
          <template #reference>
            <span><el-icon :size="16"><PhoneFilled /></el-icon></span>
          </template>
        </el-popover>
      </div>
    </div>
    <div class="info">
      <span><el-icon :size="16"><Pointer /></el-icon></span>
      <span class="info-text">配送时间：{{ props.startTime }} - {{ props.endTime }}</span>
    </div>
  </div>
</template>

<style scoped lang="less">
.detail {
  background-color: var(--color-background-dialog);
  height: 100%;
  padding-top: 10px;
}
.info {
  padding: 10px;
  background: #fff;
  margin-bottom: 10px;
  &>div {
    padding: 5px 0;
    border-bottom: 1px solid var(--color-background-dialog);
  }
  span {
    margin-right: 5px;
  }
}
.info-text {
  position: relative;
  top: -3px;
}
</style>