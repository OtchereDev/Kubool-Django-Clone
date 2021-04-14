<template>
  <div class="min-h-screen bg-custome_bg bg-cover bg-no-repeat py-20 font-custom_font">
      <div class="mx-auto w-11/12 md:w-8/12 lg:w-5/12 bg-custom_blue py-20 rounded-xl px-8 md:px-10 lg:px-16">

          <h2 class="text-center  font-bold text-gray-50 text-4xl tracking-wide">
            {{profile[0]}}'s profile
          </h2>
          <p class="text-center text-sm text-gray-200 my-6 flex justify-center items-center">
            <span id="link" class="mr-2">https://gdpd.netlify.app/{{profile[1]}}</span> <ion-icon @click="copyDivToClipboard" class="cursor-pointer " name="copy-outline"></ion-icon>
          </p>
          <p class="text-center text-sm text-gray-400 my-6">
            <span class="font-bold">Share your profile link</span> to get responses from your friend. Go to "View Messages" to check out the responses.
          </p>
          
          <div class="text-center my-4">
            <button @click='handleMessage' style="border-radius:32px;" class="flex w-full rounded-3xl py-4 text-center justify-center items-center bg-custome_bg text-gray-100 text-lg focus:outline-none">
                <span class="mr-2 font-medium">View Messages</span><ion-icon class="text-2xl font-medium" name="arrow-forward-outline"></ion-icon>
            </button>
          </div>

          <div class="text-center my-4">
            <button @click='handleWhatsapp' style="background-color:#25d366;"  class="flex w-full rounded-lg py-4 text-center justify-center items-center hover:bg-custome_bg text-gray-100 text-lg focus:outline-none">
                <ion-icon class="text-2xl font-medium mr-2" name="logo-whatsapp"></ion-icon><span class="mr-2 font-medium">Share on Whatsapp</span>
            </button>
          </div>

          <div class="text-center my-4">
            <button @click='handleFacebook'  class="flex w-full rounded-lg py-4 text-center justify-center items-center hover:bg-custome_bg bg-blue-800 text-gray-100 text-lg focus:outline-none">
                <ion-icon class="text-2xl font-medium mr-2" name="logo-facebook"></ion-icon><span class="mr-2 font-medium">Share on Facebook</span>
            </button>
          </div>

          <div class="text-center my-4">
            <button style="background-color:#e4405f;"  class="flex w-full rounded-lg py-4 text-center justify-center items-center hover:bg-custome_bg text-gray-100 text-lg focus:outline-none">
                <ion-icon class="text-2xl font-medium mr-2" name="logo-instagram"></ion-icon><span class="mr-2 font-medium">Share on Instagram</span>
            </button>
          </div>

          <hr style="border-color:#a64bf4;" class="border my-10">

          <div class="text-center my-4">
            <button @click='handleSettings' style="border-radius:32px;" class="flex w-full rounded-3xl py-4 text-center justify-center items-center bg-custome_bg text-gray-100 text-lg focus:outline-none">
                <span class="mr-2 font-medium">Settings</span><ion-icon name="settings-outline" class="text-2xl font-medium" ></ion-icon>
            </button>
          </div>
      </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
// @ is an alias to /src
import getCurrentUser from '@/composibles/getUser'
import { onMounted, ref } from '@vue/runtime-core'

export default {
  name: 'Home',
  components: {
    },
  setup(){

    const router =useRouter()
    const profile=ref([])

    onMounted(async()=>{

      const {user}= await getCurrentUser()
      // console.log(user.value)
      profile.value=user.value
    })

    const handleMessage=()=>{
      router.push({'name':'Messages'})
    }

    const handleWhatsapp=()=>{
      location.href=`https://api.whatsapp.com/send?text=Write%20a%20*secret%20anonymous%20message*%20for%20me..%20%F0%9F%98%89%20I%20*won%27t%20know*%20who%20wrote%20it..%20%F0%9F%98%82%E2%9D%A4%20%F0%9F%91%89%20https://gdpd.netlify.app/${profile.value[1]}`
    }

    const handleSettings=()=>{
      router.push({'name':'Settings'})
    }

    const handleFacebook=()=>{
      location.href=`https://www.facebook.com/sharer/?u=https://gdpd.netlify.app/${profile.value[1]}`
    }

    function copyDivToClipboard() {
        let range = document.createRange();
        range.selectNode(document.getElementById("link"));
        window.getSelection().removeAllRanges(); // clear current selection
        window.getSelection().addRange(range); // to select text
        document.execCommand("copy");
        window.getSelection().removeAllRanges();// to deselect
        alert('Shared link copied to clipboard')
    }

    return { handleMessage,handleSettings,profile,copyDivToClipboard,handleWhatsapp,handleFacebook}
  }
}
</script>
