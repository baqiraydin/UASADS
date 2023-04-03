<template>
  <header>
    <nav class="flex justify-between items-center relative">
      <div>
        <img src=".././assets/img/logo.svg" alt="logo" />
      </div>
      <NavList class="hidden md:flex space-x-4 justify-between items-center" />
      <MainButton class="hidden self-baseline md:block bg-brightRed text-white">
        Get Started
      </MainButton>
      <DropDownNav />
    </nav>
  </header>
</template>
<script setup>
import MainButton from "../components/MainButton.vue";
import DropDownNav from "../components/DropDownNav.vue";
import NavList from "../components/NavList.vue";
</script>
