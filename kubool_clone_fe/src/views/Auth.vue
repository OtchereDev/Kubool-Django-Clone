<template>
  <div class="min-h-screen bg-custome_bg bg-cover bg-no-repeat py-20 font-custom_font">
      <div class="mx-auto w-11/12 md:w-5/12 bg-custom_blue py-10 rounded-xl px-16">

        <SignUp v-if='registering' />
        <LogIn v-else />
        <div>

            <div v-if='registering' class="text-center">

                <p @click="registering=false" class="text-center font-sm inline-block text-gray-600 hover:text-blue-700 cursor-pointer">
                    Already Have an Account? Login
                </p>
                <p class="text-xs text-gray-400 my-2 inline-block">
                    By using this service, you agree to our Privacy Policy, Terms of Service and any related policies. (Check Disclaimer)
                </p>
            </div>
            <p v-else @click="registering=true" class="text-center font-sm text-gray-600 hover:text-blue-700 cursor-pointer">
                Don't Have an Account? Register
            </p>
        </div>
      </div>
  </div>
</template>

<script>
import SignUp from '@/components/SignUp.vue'
import LogIn from '@/components/LogIn.vue'
import {ref} from 'vue'
export default {
    components:{ SignUp,LogIn},
    setup(){
        const registering=ref(false)

        return {registering}
    }
}
</script>

<style>

</style>