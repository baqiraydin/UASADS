<template>
  <header>
    <nav class="flex justify-between items-center relative bg-gray-200 px-5 py-3 rounded-3xl shadow-2xl shadow-slate-500 z-10">
      <div class="px-5">
        <a href="/">
          <img src="../assets/img/hima.png" alt="logo" class="w-14" />
        </a>
      </div>
      <NavList class="hidden md:flex space-x-4 justify-between items-center text-gray-700" />
      <MainButton class="hidden self-baseline md:block bg-slate-600 text-white my-auto">
        Login
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
