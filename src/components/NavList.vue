<template>
  <ul class="font-bold">
    <li>
      <router-link to="/">Home</router-link>
      <!-- <NavLink to="/">Home</NavLink> -->
    </li>
    <li>
      <!-- <NavLink to="/detail">Detail</NavLink> -->
      <router-link to="/about">About</router-link>
    </li>
    <li>
      <router-link to="/category">Category</router-link>
    </li>
    <li>
      <router-link to="/contact">Contact</router-link>
    </li>
  </ul>

</template>
<script>
import NavLink from "@/components/NavLink.vue";

export default {
  components: {
    NavLink,
  },
};
</script>
