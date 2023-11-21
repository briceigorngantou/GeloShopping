<template> 
  <div class=" overflow-hidden h-auto" style="overflow-y: hidden; height: fit-content;">
    <SideNavbar/>

  </div>
</template>
<script>
import SideNavbar from '@/components/SideNavbar.vue';
export default{
  name:'ShopView',
  components:{
    SideNavbar,
    
}
}
</script>