<template>
  <div class="container mx-auto p-6">
    <HeaderVue></HeaderVue>
  </div>
  <main class="w-full">
    <router-view></router-view>
  </main>
  <!-- <Footer></Footer> -->
</template>

<script setup>
import HeaderVue from "./sections/Header.vue";
</script>
