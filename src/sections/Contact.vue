<template>
  <div class="absolute w-full top-0 min-h-screen">
    <div class="background-image-container absolute top-0 inset-0">
        <div
          class="text-white bg-opacity-70 bg-slate-700 min-h-screen text-center p-10"
        >
          <div class="pt-48 flex flex-col gap-y-5">
            <h1 v-motion-slide-bottom class="text-7xl font-bold text-white">
              Ingin Bergabung Dengan Kami?
            </h1>
            <div v-motion-slide-bottom class="pt-10">
              <p class="font-bold text-2xl">Hubungi Kami Sekarang!</p>
              <small class="font-thin text-xl">
                For Information, please contact via:
              </small>
            </div>
            <div
              v-motion-slide-bottom
              class="bg-white bg-opacity-75 rounded-2xl p-20 mx-64 mt-10"
            >
              <div class="grid grid-rows-2 grid-flow-col gap-y-10 gap-x-2">
                <div class="text-slate-600">
                  <p class="font-bold text-2xl">Contact Person</p>
                  <span class="text-xl"> +62 895-0400-0232 </span>
                </div>
                <div class="text-slate-600">
                  <p class="font-bold text-2xl">Website</p>
                  <a href="https://www.utdi.ac.id" target="_blank" class="text-xl">
                    https://www.utdi.ac.id
                  </a>
                </div>
                <div class="text-slate-600">
                  <p class="font-bold text-2xl">E-Mail</p>
                  <span class="text-xl"> himadigiutdi@gmail.com </span>
                </div>
                <div class="text-slate-600">
                  <p class="font-bold text-2xl">Instagram</p>
                  <span class="text-xl"> himadigi </span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<style>
.background-image-container {
  background-image: url("../assets/img/mahasiswa2.jpeg");
  background-size: cover;
  background-position: center;
}
</style>

<script>
export default {
  metaInfo: {
    title: "Contact",
  },
};
</script>
