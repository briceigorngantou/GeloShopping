<template>
  <div class="" v-if="product">
    <TopNav/>
    <div class="home bg-gradient-to-b from-stone-700 to-black h-full" style=" width: auto; overflow: hidden; height: 100vh;">
      
      <div class=" mt-4 p-4 max-w-xl m-auto min-h-[100vh]" >
        <div class="text-center ml-20 m-auto">
          <img class=" w-96" :src="product.imageUrl"/>
        </div>
        <div class="p-4 relative">
          <h1 class="text-slate-300">{{ product.name}}</h1>
          <h3 class="absolute top-6 right-4 text-slate-300 font-bold" >${{ product.price }}</h3>
          <p class="text-slate-300">Average rating: {{ product.averageRating }}</p>
          <button class="w-full bg-slate-300 button text-secondary hover:bg-secondary hover:text-white" 
          
          v-if="!showSuccessMessage"
          @click="addToCart"
          >Add to Cart</button>
          <button class="w-full  bg-green-400
           button text-white" 
          
          id="add-to-cart"
          v-if="showSuccessMessage"
          @click="addToCart"
          >Successfully added item to cart</button>


          <h4 class="text-slate-300">Description</h4>
          <p class="text-slate-300">{{ product.description }}</p>
        </div>
      </div>
    </div>
  </div>
    <NotFoundPage v-else/>
  </template>
  
  <script>
  // import NotFoundPage from './NotFoundPage';
  
import axios from 'axios';
import TopNav from '@/components/TopNav.vue';
import NotFoundPage from './NotFoundPage.vue';

  export default {
      name: 'ProductDetailPage',
      components: {
    TopNav,
    NotFoundPage
},

      data(){
        return{
          product:{},
          showSuccessMessage: false,
        };
      },
      mounted() {
   this.getProduct();
  },
  
      methods:{
        getProduct() {
      (async () => {
        const  {data}  = await axios.get(`/api/products/get/${this.$route.params.id} `);
        this.product = data.data;
        
      }
      )();
    },

          // async addToCart(){
          //   await axios.post('/api/users/12345/cart',{
          //     productId: this.$route.params.id,
          //   });
          //   this.showSuccessMessage = true;
          //   setTimeout(()=>{
          //     this.$router.push('/shop')
          //   }, 1500);

          // }
      },
  };
  </script>
  
   
   