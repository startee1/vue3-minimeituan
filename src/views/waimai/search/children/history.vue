

<template>
  <div class="block">
    <div class="title flex flex-jc-sb flex-ai-midline">
      <div class="title-text">历史搜索</div>
      <img class="icon-xs" src="@/preview/image/garbage.png"/>
    </div>
    <ul class="flex flex-wrap">
      <li>鱼</li>
      <li>饭团</li>
      <li>美食</li>
      <li>袋子</li>
    </ul>
  </div>
</template>

<style scoped lang="less">
.block {
  padding: 0 8px;
}
.title-text {
  font-size: 16px;
  font-weight: 700;
}
li {
  border-radius: 16px;
  margin: 3px 16px 16px 0;
  padding: 3px 10px;
  background-color: var(--color-background-grey);
}
</style>