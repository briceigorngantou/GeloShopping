<script setup>
  // import Swiper core and required modules
  import { Pagination } from 'swiper';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';

  const modules = [Pagination]
  
</script>

<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :pagination="{ clickable: true }"
    class="pb-8 max-h-150 "
  >
    <swiper-slide class="grid place-items-center">
      <img src="../assets/images.jpg" class="w-2/3  lg:w-[90%]" style="margin-top: 20%;"/>
    </swiper-slide>
    <swiper-slide class="grid place-items-center">
      <img src="../assets/images(2).jpeg" class="w-2/3 lg:w-[90%]"  style="margin-top: 20%; "/>
    </swiper-slide>
    <swiper-slide class="grid place-items-center">
      <img src="../assets/images(6).jpeg" class="w-2/3 lg:w-[90%]" style="margin-top: 20%;" />
    </swiper-slide>
    <!-- <swiper-slide class="grid place-items-center">
      <img src="../assets/images(3).jpg" class="w-2/3 lg:w-[90%]" style="margin-top: 20%;" />
    </swiper-slide> -->
    <swiper-slide class="grid place-items-center">
      <img src="../assets/images(4).jpeg" class="w-2/3 lg:w-[90%]" style="margin-top: 20%; " />
    </swiper-slide>
  </swiper>
</template>

<style>
  .swiper-pagination-bullet {
    @apply w-3 h-3 bg-white opacity-100
  }
  .swiper-pagination-bullet.swiper-pagination-bullet-active {
    @apply rounded-xl w-6  bg-secondary
  }
</style>