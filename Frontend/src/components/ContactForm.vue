<template >
    <!-- <div class="container mx-auto my-1 w-1/3 border bg-black float-left"> -->
        <!-- </div> -->
        
        <div class="container mx-auto my-1 w-full border bg-white mt-[70%] md:mt-[25%] sm:mt-[25%] lg:mt-[10%] flex flex-col lg:flex-row">
      <div class="lg:p-5 lg:space-y-5 shadow-4xl container mx-auto lg:my-1 lg:w-1/2  border bg-black lg:float-left">
     <h4 class="text-center text-4xl text-white text-bold">Contact Information</h4>
     <p class="text-white">Tell us what you think we should get for you</p>
     <div>
      <br>
      <br>
      <br>
      </div>
     <div class="my-10">

      <div class="flex flex-row"><img src="../assets/phona-call.png" alt=""><span class="mx-10 text-white" ><p>(+237)681778215</p></span></div>
      <br>
      <div class="flex flex-row"><img src="../assets/email.png" alt=""><span class="mx-10 text-white" ><p>dummyemail@gmail.com</p></span></div>
      <br>
      <div class="flex flex-row"><img src="../assets/location.png" alt=""><span class="mx-10 text-white" >
          <p>Douala Cameroon </p></span></div>
          
          <div class="flex flex-row float-right right-0 bottom-0"><img src="../assets/Ellipse2.png" alt=""></div>
          <div class="flex flex-row float-right absolute mx-[25rem]"><img src="../assets/Ellipse1.png" alt=""></div>
          <div class=" flex-row absolute hidden md:flex sm:bottom-[29%] md:bottom-[10%] lg:bottom-[25%] mx-[10%] ">
              <img src="../assets/social/fb.svg" alt=""><span class="mx-10">
              <img src="../assets/social/twitter.svg"  alt=""></span>
              <img src="../assets/social/instagram.svg" alt="">
          </div>
     </div>
     </div>
   <div class="p-5 space-y-5 shadow-xl">
    <h4 class="text-center text-3xl">Contact Us</h4>
    <form action="https://formspree.io/f/xlekwjlv" method="POST">
        <div
        class="grid grid-cols-2 gap-5"
        >
        <input type="text" 
        class="border-b border-gray-500 px-4 py-2 focus:outline-none focus:border-secondary"
        name="First_Name"
        id=""
        placeholder="First Name" required>
        <input type="text" 
        class="border-b border-gray-500 px-4 py-2 focus:outline-none focus:border-secondary"
        name="Last_Name"
        id=""
        placeholder="Last Name" required>
        <input type="email" 
        class="border-b border-gray-500 px-4 py-4 focus:outline-none focus:border-secondary col-span-2 lg:col-span-1"
        name="Email"
        id=""
        placeholder="Email" required>
        <input type="Number" 
        class="border-b border-gray-500 px-4 py-4 focus:outline-none focus:border-secondary col-span-2 lg:col-span-1"
        name="Phone"
        id=""
        placeholder="Phone number" required>
        <textarea  
                    cols="30"
                    rows="4"
                    class="border-b border-gray-500 px-4 py-2 focus:outline-none focus:border-secondary col-span-2"
                    placeholder="Write Your Message....."   
                    name="Message"   
                    required      
        ></textarea>
        <button type="submit"
         value="Send Message"
            class="focus:outline-none rounded-lg border-r-16  bg-secondary px-4 py-2 text-white font-bold w-full mt-4 " style="margin-left: 100%;"
        >Send Message</button>
    </div>
    <div ><img src="../assets/arrow.png" style="margin-left: 20%;" alt=""></div>
    </form>
   </div>
  </div>
</template>