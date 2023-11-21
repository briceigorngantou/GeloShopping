<template>
    <div class="home bg-gradient-to-b from-stone-700 to-black" style=" width: auto; overflow-x: hidden; height: 100vh;">
       <NavBar/>
        <ContactForm/>
       
    </div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue';
import NavBar from '@/components/NavBar.vue';


export default {
  name: 'HomeView',
  components: {
    ContactForm,
    NavBar
}
  }
</script>

<style lang="scss" scoped>

</style>