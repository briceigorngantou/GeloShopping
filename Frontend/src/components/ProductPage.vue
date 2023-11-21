<template>
    <div class="home bg-gradient-to-b  from-white to-white" style=" width: auto; overflow-x: hidden; height: 100vh;">
      <div class="">
  <div class="flex m-auto min-w-[100vh] min-h-[100vh] "  >
    <div class="flex flex-wrap justify-between mt-[16px] ">
      <div
      v-for="product in products"
      :key="product.id"
       class="relative p-5 mb-[2%] flex flex-col  w-auto shadow-2xl align-middle border rounded-lg  group/edit hover:bg-slate-200 group-hover/item:visible">
      <img :src="product.imageUrl" class="flex h-52 w-52" alt=""/>
      <h3 class="mb-0  text-slate-800 font-bold">{{ product.name }}</h3>
      <p class="product-price">${{ product.price }}</p>
      <RouterLink :to="{path:'/shop/' +product.id}">
      <button class="button bg-secondary hover:bg-red-500 w-full">View Details</button>
      </RouterLink>
      </div>
    </div>
  </div>
  
  </div>
    </div>
  </template>
  
  
  
  <script>
  import axios from "axios";
  export default{
    components:{
  },
  methods: {
    created() {
      (async () => {
        const { data } = await axios.get('/api/products/get');
        this.products = data.data;
      })();
    }
  },
  mounted() {
   this.created();
  },

    data(){
      return{
        products:[],
      };
    },
  }


  </script>
  <style scoped>
  
  
    a {
      width: 100%;
    }
  </style>