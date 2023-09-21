<script setup lang="ts">
import Tabbar from '@/components/Tabbar.vue';
import MyNav from './children/MyNav.vue';
import OrderList from './children/OrderList.vue';
import Search from './children/Search.vue';

</script>

<template>
  <div class="order">
    <main>
      <header><Search /></header>
      <nav><MyNav /></nav>
      <section><OrderList /></section>
    </main>
    <footer>
      <Tabbar/>
    </footer>
  </div>
</template>

<style scoped lang="less">
.order {
  height: 100%;
}
main {
  header {
    padding: 10px 5px;
  background-color: var(--color-background-meituan);
  }
}
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>