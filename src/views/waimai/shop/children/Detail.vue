<script setup lang="ts">
</script>

<template>
  <div class="detail">
    <div class="info">
      <div>
        <span><el-icon :size="16"><Location /></el-icon></span>
        <span class="info-text">地址</span>
        <el-popover
          placement="bottom"
          :width="200"
          trigger="click"
          content="this is content, this is content, this is content"
        >
          <template #reference>
            <span><el-icon :size="16"><PhoneFilled /></el-icon></span>
          </template>
        </el-popover>
      </div>
    </div>
    <div class="info">
      <span><el-icon :size="16"><Pointer /></el-icon></span>
      <span class="info-text">配送时间：123132123132</span>
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