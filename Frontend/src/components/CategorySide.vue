<script setup>
  import category1 from "../assets/category/images(2).jpg"
  import category2 from "../assets/category/images(4).jpg"
  import category3 from "../assets/category/images(5).jpeg"
  import catergory4 from "../assets/category/suit(t3).jpg"
  import catergory5 from "../assets/category/images(7).webp"
  import catergory6 from "../assets/category/image.jpg"
  const categories = [
    {
      title: 'Gentleman',
      image: category1,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id id consequat, eu faucibus nulla. Ultrices mattis lacus, sed maecenas nascetur.'
    },
    {
      title: 'Drip',
      image: category2,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id id consequat, eu faucibus nulla. Ultrices mattis lacus, sed maecenas nascetur.'
    },
    {
      title: 'Elegant Ladies',
      image: category3,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id id consequat, eu faucibus nulla. Ultrices mattis lacus, sed maecenas nascetur.'
    },
    {
      title: 'Gentleman',
      image: catergory4,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id id consequat, eu faucibus nulla. Ultrices mattis lacus, sed maecenas nascetur.'
    },
    {
      title: 'Ladies Drip',
      image: catergory5,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id id consequat, eu faucibus nulla. Ultrices mattis lacus, sed maecenas nascetur.'
    },
    {
      title: 'Swag kids',
      image: catergory6,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id id consequat, eu faucibus nulla. Ultrices mattis lacus, sed maecenas nascetur.'
    },
  ]
</script>

<template>
  <section id="category" class="flex flex-col items-center py-32">
    <h2 class="my-10 text-5xl md:text-6xl font-bold text-white">Category</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 place-items-center">
      <div v-for="category of categories" :key="category.title" class="text-white grid place-items-center gap-5 text-center">
        <div class="p-10">
          <img :src="category.image" class="w-full lg:h-[300px] md:h-[05%]" alt="category1">
        </div>
        <h3 class="text-3xl font-bold">{{ category.title }}</h3>
        <p class="w-3/4">{{ category.desc}}</p>
      </div>
    </div>
  </section>
  <section class="grid grid-flow-col grid-cols-1 md:grid-cols-2 md:gap-10 items-center">
    <div class="md:p-10">
      <img src="../assets/image.png" alt="category2-img" class="w-full">
    </div>
    <div class="text-center flex flex-col items-center">
      <h2 class="text-5xl md:text-6xl font-bold text-white">Check Out </h2>
      <div class="flex items-center gap-5">
        <h2 class="text-5xl md:text-6xl font-bold text-white">The Mall!</h2>
        <img src="../assets/shop-e-commerce-GIF-by-Privali-unscreen.gif" class="w-9 md:w-12" alt="head2">
      </div>
      <p class="mt-8 md:mt-12 text-white text-lg md:text-xl w-full md:w-[80%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ipsa libero nulla non ipsum nemo a. Voluptatum, fugit tempore. Assumenda tempora labore voluptatibus obcaecati delectus eum molestias eius sapiente dolor.</p>
    </div>
  </section>
</template>