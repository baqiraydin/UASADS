<template>
  <router-link :to="to" class="py-2 block text-yellow-800 mx-5">
    <slot></slot>
    <span
      class="block bg-red-500 h-0.5 scale-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-100"
    ></span>
  </router-link>
</template>
<script setup>

import { RouterLink, RouterView } from 'vue-router'

const props = defineProps({
  to: {
    required: true,
    default: "/",
  },
});
</script>
<style scoped>
h1 {
  color: #666;
  display: inline-block;
  margin: 0;
  text-transform: uppercase;
}
h1:after {
  display: block;
  content: "";
  border-bottom: solid 3px #019fb6;
  transform: scaleX(0);
  transition: transform 250ms ease-in-out;
}
h1:hover:after {
  transform: scaleX(1);
}
</style>
