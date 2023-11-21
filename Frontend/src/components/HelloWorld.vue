<script setup>
import  MySwiper from './MySwiper.vue'
</script>

<template>
  <section id="home" class="grid place-items-center mt-20 md:mt-10 overflow-hidden">
    <div class="grid grid-flow-row-dense grid-cols-1 lg:grid-cols-2 items-end gap-10 lg:gap-16 w-full px-0 lg:px-10">
      <div class="w-full h-full order-1 lg:order-2 mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
        <MySwiper/>
      </div>
      <div class="text-5xl md:text-6xl font-bold text-white w-full pb-20 order-2 lg:order-1">
        <div class="flex items-center gap-3">
          <h2>Y'ALL PULLUP</h2>
          <img class="w-[50px]" src="../assets/shop-e-commerce-GIF-by-Privali-unscreen.gif" alt="head1-img">
        </div>
        <div class="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">
          <h2 class="text-4xl text-left md:text-5xl">LET'S EXPLORE THE MALL !!</h2>
          <p class="pt-5 text-lg lg:text-left sm:text-center font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id id consequat, eu faucibus nulla. Ultrices mattis lacus, sed maecenas nascetur.
          
          </p>
        </div>
        <RouterLink :to="{name:'shop'}"><button 
          class=" z-30 px-9 py-3 -mt-1.5  rounded-full text-xl 
           text-white tracking-wider uppercase bg-secondary w-full lg:w-auto sm:w-52 float-left focus-within:bg-white hover:bg-red-500 hover:text-white font-bold"
          style="margin-top: 1rem;" >
           SHOP NOW
          </button></RouterLink>
      </div>
      
    </div>
    <div class="grid place-items-center gap-2 text-white font-medium pt-8">
      <svg class="w-5 md:w-6" viewBox="0 0 26 49" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="24" height="47" rx="12" stroke="white" stroke-width="2"/>
        <circle cx="13" cy="11" r="5" fill="#FF693A"/>
        </svg>
        Scroll
    </div>
  </section>
  
</template>