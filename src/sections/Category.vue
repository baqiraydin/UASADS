<template>
  <div class="flex justify-center pt-14">
    <div class="flex flex-col gap-y-20">
      <div v-motion-slide-bottom class="flex justify-center">
        <div class="flex flex-col gap-y-5">
          <hr
            class="border w-[500px] h-2 bg-slate-700 rounded-2xl border-slate-700"
          />
          <p class="text-center text-5xl font-bold text-slate-700">
            Daftar Kategori
          </p>
        </div>
      </div>
      <div v-motion-slide-bottom class="flex gap-x-20 justify-between w-full">
        <div
          class="bg-slate-600 text-white p-10 rounded-xl shadow-xl shadow-slate-500 w-[450px] text-wrap"
        >
          <h1 class="text-3xl text-center pb-10">Fakultas</h1>
          <p class="w-[370px] indent-3 leading-loose">
            Program Studi (Prodi) Bisnis Digital yang berada di dalam Fakultas
            Manajemen dan Bisnis merupakan suatu unit akademik yang didesain
            khusus untuk memberikan pemahaman mendalam tentang aspek bisnis
            dalam konteks digital. Prodi ini terintegrasi dalam Fakultas
            Manajemen dan Bisnis dengan tujuan memberikan pendidikan dan
            persiapan kepada mahasiswa agar dapat mengelola, memahami, dan
            memanfaatkan teknologi digital dalam konteks dunia bisnis yang terus
            berkembang.
          </p>
        </div>
        <div
          class="bg-gray-200 text-white p-10 rounded-xl shadow-xl shadow-slate-500 w-[450px]"
        >
          <h1 class="text-3xl text-center pb-10 text-slate-700">
            Prodi Bisnis Digital
          </h1>
          <div class="w-[400px] ps-10">
            <p class="text-slate-700">
              Bisnis Digital mempunyai program studi diantaranya:
            </p>
            <div class="flex flex-col gap-y-2 ps-10 py-3">
              <ol class="list-decimal font-md text-neutral-600 flex flex-col gap-y-1">
                <li>Digital Marketing</li>
                <li>Pengantar Bisnis Digital</li>
                <li>Komunikasi Bisnis</li>
                <li>Digipreneur</li>
                <li>E-Commerce</li>
                <li>Matematika</li>
                <li>Ekonomi dan Bisnis</li>
                <li>Akuntansi Pengantar</li>
                <li>E-CRM</li>
                <li>Pengantar Manajemen</li>
              </ol>
            </div>
            <p class="text-slate-700">dan masih banyak lagi</p>
          </div>
        </div>
        <div
          class="bg-slate-600 text-white p-10 rounded-xl shadow-xl shadow-slate-500 w-[450px]"
        >
          <h1 class="text-3xl text-center pb-10">Kegiatan</h1>
          <div class="flex flex-col gap-y-3">
              <p class="w-[350px] ">
                Selama 3 Semester ini  melakukan kunjungan dan kegiatan lainnya yaitu:
              </p>
              <ul class="ps-10 list-disc w-[250px] flex flex-col gap-y-3 font-bold">
                <li>
                    Kunjungan ke Kampus Shopee, Solo
                </li>
                <li>
                    Makrab Himadigi di Sleman
                </li>
                <li>
                    Seminar Branding dan Marketing di Area Kampus
                </li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Category",
  },
};
</script>
