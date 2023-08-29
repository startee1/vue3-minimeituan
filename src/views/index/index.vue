<template>
  <div>
    <header>
      <div class="flex flex-ai-midline bg-mt top">
        <span class="location">北京</span>
        <img class="icon-xs" src="../../preview/image/location.png"/>
      </div>
    </header>
    <nav class="flex flex-wrap">
      <div class="nav-item" @click="toWaimai">
        <img class="icon-md" src="../../preview/image/takefood.png" alt="">
        <div>外卖</div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()
const toWaimai = () => {
  router.push({ name: 'waimaiIndex' })
}

</script>

<style scoped>
.location {
  font-size: 16px;
}
nav {
  padding: 10px;
}
.nav-item {
  padding: 5px;
  width: 60px;
  text-align: center;
}
</style>