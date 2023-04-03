<template>
  <div class="container mx-auto p-6">
    <HeaderVue></HeaderVue>
  </div>
  <main>
    <div class="container mx-auto p-6">
      <Hero></Hero>
      <Feature></Feature>
      <Testimonial></Testimonial>
    </div>
    <Cta></Cta>
  </main>
  <Footer></Footer>
</template>

<script setup>
import HeaderVue from "./sections/Header.vue";
import Hero from "./sections/Hero.vue";
import Feature from "./sections/Feature.vue";
import Testimonial from "./sections/Testimonial.vue";
import Cta from "./sections/Cta.vue";
import Footer from "./sections/Footer.vue";
</script>
