<template>
<div class=" border-b-black h-20 w-full">
 <RouterLink :to="{name:'shop'}" class="m-0">
    <h1 class=" mr-[90%] mt-[2%] font-bold hover:outline-secondary hover:underline" style="padding-left: 0px ;">Back to shop</h1>
</RouterLink>
<RouterLink :to="{name:'CartInfo'}" class=" absolute right-4 top-4">
<button> View cart</button>
</RouterLink>
</div>
</template>

<script>
 export default{
    name: 'TopNav',
 }
</script>