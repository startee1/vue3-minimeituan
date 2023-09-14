<script setup lang="ts">
enum EFilterType {
  SORT = 'sort',
  SPEED = 'speed',
  ALL = 'all'
}
type FilterTypeStrings = keyof typeof EFilterType;

const emit = defineEmits<{
  open: [type: FilterTypeStrings]
}>()
</script>

<template>
  <div class="my-filter">
    <main>
      <section class="flex nav">
        <div class="flex-main" @click="emit('open','SORT')">综合排序<el-icon><CaretBottom /></el-icon></div>
        <div @click="emit('open','SPEED')">速度<el-icon><CaretBottom /></el-icon></div>
        <div @click="emit('open','ALL')">全部筛选<el-icon><CaretBottom /></el-icon></div>
      </section>
    </main>
  </div>
</template>

<style scoped lang="less">
.nav {
  font-size: 12px;
  & > div {
    margin: 0 10px;
    height: 40px;
    line-height: 40px;
  }
}
</style>