<template>
    <div v-for="cartItem in cartItems" :key="cartItem.id"  class="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
                            <div  class="md:w-4/12 2xl:w-1/4 w-full">
                                <img :src="cartItem.imageUrl" alt="Black Leather Bag" class="h-full object-center object-cover md:block hidden" />
                                <img :src="cartItem.imageUrl" alt="Black Leather Bag" class="md:hidden w-full h-full object-center object-cover" />
                            </div>
                            <div class="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                                <p class="text-xs leading-3 text-gray-800 md:pt-0 pt-4">{{cartItem.id}}</p>
                                <div class="flex items-center justify-between w-full pt-1">
                                    <p class="text-base font-black leading-none text-gray-800">{{cartItem.name}}</p>
                                    <select aria-label="Select quantity" class="py-2 px-1 border border-gray-200 mr-6 focus:outline-none" >
                                            <option v-for="n in Array.from(Array(Number(cartItem.quantity)).keys(), (i) => i + 1)" :key="n.quantity" :value="n">{{n}}</option>
                                          
                                        </select>
                                </div>
                                <p class="text-xs leading-3 text-gray-600 pt-2">Size: {{cartItem.size}}</p>
                                <p class="text-xs leading-3 text-gray-600 py-4">Color : {{cartItem.color}}</p>
                               
                                <div class="flex items-center justify-between pt-5">
                                    <div class="flex itemms-center">
                                        <p class="text-xs leading-3 underline text-gray-800 cursor-pointer">Add to favorites</p>
                                        <p class="text-xs leading-3 
                                        underline text-red-500
                                         pl-5 cursor-pointer"
                                        
                                        @click="$emit('remove-from cart', product.id)"
                                        
                                        >Remove</p>
                                    </div>
                                    <p class="text-base font-black leading-none text-gray-800">${{cartItem.price}}</p>
                                </div>
                            </div>
                        </div>
                      
                    
</template>
<script>
export default{
    data(){
        
    }
}
</script>