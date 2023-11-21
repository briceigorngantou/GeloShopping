
<template>
  <div class="home bg-gradient-to-b from-stone-700 to-black" style=" width: auto; overflow: hidden;">
 
  <NavBar/> 
  <AboutPage/>
  <TeamMembers/>
  <FooterPane/>
  </div>
</template>

<script setup>
import FooterPane from '@/components/FooterPane.vue';
import NavBar from '@/components/NavBar.vue';
import AboutPage from '@/components/AboutPage.vue';
import TeamMembers from '@/components/TeamMembers.vue';


</script>

<style lang="scss" scoped>

</style>