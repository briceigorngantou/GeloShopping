<template>
  <router-view/>
</template>
<script>
export default{
data(){
        return{
            cart:[ ],
            premium: true,
        }
    },
    methods:{
   updateCart(id){
    this.cart.push(id)
   },
   removeCart(id){
    this.cart.pop(id) 
   }
    },

}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

  * {
    box-sizing: border-box;
    font-family: Arial;
  }

  /* #page-wrap {
    margin: auto;
    max-width: 800px;
    min-height: 100vh;
  } */

 
  .button {
    background-color: black;
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    outline: 0;
    padding: 16px;
  }


</style>
