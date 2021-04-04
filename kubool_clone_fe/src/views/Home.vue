<template>
  <div class="min-h-screen bg-custome_bg bg-cover bg-no-repeat py-20 font-custom_font">
      <div class="mx-auto w-11/12 md:w-5/12 bg-custom_blue py-20 rounded-xl px-16">

          <h2 class="text-center  font-bold text-gray-50 text-4xl tracking-wide">
            OtchereDev's profile
          </h2>
          <p class="text-center text-sm text-gray-200 my-6 flex justify-center items-center">
            <span class="mr-2">http://kubool.clone/hdjshwi</span> <ion-icon class="cursor-pointer " name="copy-outline"></ion-icon>
          </p>
          <p class="text-center text-sm text-gray-400 my-6">
            <span class="font-bold">Share your profile link</span> to get responses from your friend. Go to "View Messages" to check out the responses.
          </p>
          
          <div class="text-center my-4">
            <button style="border-radius:32px;" class="flex w-full rounded-3xl py-4 text-center justify-center items-center bg-custome_bg text-gray-100 text-lg focus:outline-none">
                <span class="mr-2 font-medium">View Messages</span><ion-icon class="text-2xl font-medium" name="arrow-forward-outline"></ion-icon>
            </button>
          </div>

          <div class="text-center my-4">
            <button style="background-color:#25d366;"  class="flex w-full rounded-lg py-4 text-center justify-center items-center hover:bg-custome_bg text-gray-100 text-lg focus:outline-none">
                <ion-icon class="text-2xl font-medium mr-2" name="logo-whatsapp"></ion-icon><span class="mr-2 font-medium">Share on whatsapp</span>
            </button>
          </div>

          <div class="text-center my-4">
            <button  class="flex w-full rounded-lg py-4 text-center justify-center items-center hover:bg-custome_bg bg-blue-800 text-gray-100 text-lg focus:outline-none">
                <ion-icon class="text-2xl font-medium mr-2" name="logo-facebook"></ion-icon><span class="mr-2 font-medium">Share on whatsapp</span>
            </button>
          </div>

          <div class="text-center my-4">
            <button style="background-color:#e4405f;"  class="flex w-full rounded-lg py-4 text-center justify-center items-center hover:bg-custome_bg text-gray-100 text-lg focus:outline-none">
                <ion-icon class="text-2xl font-medium mr-2" name="logo-instagram"></ion-icon><span class="mr-2 font-medium">Share on whatsapp</span>
            </button>
          </div>

          <hr style="border-color:#a64bf4;" class="border my-10">

          <div class="text-center my-4">
            <button style="border-radius:32px;" class="flex w-full rounded-3xl py-4 text-center justify-center items-center bg-custome_bg text-gray-100 text-lg focus:outline-none">
                <span class="mr-2 font-medium">Settings</span><ion-icon name="settings-outline" class="text-2xl font-medium" ></ion-icon>
            </button>
          </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    
  }
}
</script>
