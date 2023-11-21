<template>
  <div class="home bg-gradient-to-b from-stone-700 to-black" style=" width: auto; overflow: hidden;">
    <NavBar/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <CategorySide/>
    <CollectionSide/>
    <SucribePane/>
    <FooterPane/>
  </div>
</template>

<script>
// @ is an alias to /src
import CategorySide from '@/components/CategorySide.vue';
import FooterPane from '@/components/FooterPane.vue';
import HelloWorld from '@/components/HelloWorld.vue';
import NavBar from '@/components/NavBar.vue';
import SucribePane from '@/components/SucribePane.vue';
import CollectionSide from '@/components/CollectionSide.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    NavBar,
    FooterPane,
    CategorySide,
    SucribePane,
    CollectionSide
}
}
</script>
