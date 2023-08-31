<script setup lang="ts">

</script>

<template>
  <main>
    <div class="top"></div>
    <router-view v-slot="{ Component }">
      <transition>
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<style scoped>
main {
  position: fixed;
  width: 360px;
  height: 600px;
  border: 1px solid black;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  border-radius: 10px;
  overflow: hidden;
}
.top {
  height: 20px;
  background: #000;
}
.v-enter-active,
.v-leave-active {
  transition: opacity .5s;
}
.v-enter-from,
.v-leave-to{
  opacity: 0;
}
.v-enter-to,
.v-leave-from{
  opacity: 1;

}
</style>
