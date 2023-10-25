

<template>
  <div class="block">
    <div class="title flex flex-jc-sb flex-ai-midline">
      <div class="title-text">搜索发现</div>
      <div class="flex flex-ai-midline title-button">
        换一批
        <img class="icon-xs" src="@/preview/image/refresh.png"/>
      </div>
    </div>
    <ul class="flex flex-wrap">
      <li>鸡腿</li>
      <li>盒饭</li>
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
.title-button {
  color: #999;
}
li {
    border-radius: 16px;
    margin: 3px 16px 16px 0;
    padding: 3px 10px;
    background-color: var(--color-background-grey);
  }
</style>