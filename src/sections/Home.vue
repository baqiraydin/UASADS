<template>
  <div class="px-5 flex flex-col gap-5 min-h-screen">
    <div v-motion-slide-bottom class="min-h-screen py-80">
        <div class="text-5xl font-bold text-slate-500 flex flex-col gap-y-5">
            <h1 class=" text-center">
              Selamat Datang di Bisnis Digital
            </h1>
            <h2 class="text-center text-yellow-400">
                Universitas Teknologi Digital Yogyakarta
            </h2>
        </div>
    </div> 
    <div class="min-h-screen py-80">
        <div v-motion-slide-bottom class="flex justify-center gap-5">
            <div class="flex flex-col gap-y-10">
                <img
                  src="../assets/img/mahasiswa.jpg"
                  alt=""
                  class="w-[1000px] rounded-2xl"
                />
                <small class="w-[1000px] text-xl font-light text-center">
                  Program Studi Bisnis Digital adalah suatu program pendidikan di
                  Universitas Teknologi Digital Indonesia yang difokuskan pada
                  pengembangan pengetahuan dan keterampilan dalam ranah bisnis di era
                  digital. Ini mencakup aspek-aspek seperti pemasaran digital, analisis
                  data, e-commerce, inovasi teknologi, dan strategi bisnis online untuk
                  mempersiapkan mahasiswa menghadapi tantangan di dunia bisnis yang terus
                  berubah.
                </small>
            </div>
        </div>
    </div>
    <div class="flex justify-center min-h-screen py-80">
        <div class="flex flex-col gap-y-16">
            <h2 class="text-4xl text-center">Visi</h2>
            <p class="w-[700px] text-3xl font-light">
                “Menjadi program studi unggul dalam bidang Bisnis Digital ditunjang kemampuan dalam pemanfaatan Big Data 
                dan penguasaan Enterprises Information System (EIS) yang menjunjung tinggi integritas dan berwawasan global”.
            </p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Home",
  },
};
</script>
