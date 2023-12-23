<template>
    <div v-motion-slide-bottom class="flex justify-center">
        <div class="flex flex-col gap-y-10">
            <div class="flex justify-center">
                <div class="flex flex-col gap-y-10">
                    <h1 class="text-5xl font-bold text-slate-500 pt-10">
                        HIMADIGI
                    </h1>
                    <hr class="bg-slate-500 h-2 rounded-xl w-60">
                </div>
            </div>
            <div class="flex">
                <div v-motion-slide-bottom class="background-image-container rounded-2xl">
                    <div class="w-full bg-slate-700 bg-opacity-75 rounded-2xl">
                        <div class="text-white p-48">
                          <p class="font-bold text-2xl w-[900px]">Himadigi, singkatan dari Himpunan Mahasiswa Bisnis Digital di UTDI, didirikan oleh mahasiswa berminat dan berkompeten di bidang bisnis digital. Organisasi ini bertujuan menghasilkan lulusan dengan keterampilan pengembangan bisnis digital, didukung oleh enterprised information system (EIS), untuk memenuhi kebutuhan stakeholder seperti industri, pemerintah, dan masyarakat.</p>
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
    title: 'About',
  },
};
</script>