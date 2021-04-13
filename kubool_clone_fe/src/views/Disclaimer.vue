<template>
    <div class="min-h-screen bg-custome_bg bg-cover bg-no-repeat py-20 font-custom_font">
            <div class="mx-auto w-11/12 md:w-8/12 lg:w-5/12 bg-custom_blue py-20 rounded-xl px-8 md:px-10 lg:px-16">

                <h2 class="text-center  font-bold text-gray-50 text-4xl tracking-wide">
                    Disclaimer
                </h2>

                <p  class="text-base text-gray-300 my-5">
                    <span class="font-bold ">This is a Clone of Kubool!!!.</span> Kubool is an interactive Dare Game by Kubool Web, where you can compliment and get complimented by your friends, family and the closed ones keeping the privacy of the users safe.


                </p>
                <p class="text-base text-gray-300 my-5">
                    Here is everything that you need to know! Tap on one of the following to get started.
                </p>
                <p class="text-base text-gray-300 my-5 font-semibold">
                    More Information About Us
                </p>
                <p class="text-base text-gray-300 my-5 font-semibold">
                    Privacy Policy
                </p>
                <p class="text-base text-gray-300 my-5">
                    If you have any questions regarding our Privacy Policy or Terms and Conditions, feel free to contact us using the contact page!
                </p>

                <BackBtn/>
            </div>
    </div>
</template>

<script>
import BackBtn from '@/components/BackBtn.vue'
export default {
    components:{BackBtn}
}
</script>

<style>

</style>