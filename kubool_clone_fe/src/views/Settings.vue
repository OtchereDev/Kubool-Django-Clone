<template>
    <div class="min-h-screen bg-custome_bg bg-cover bg-no-repeat py-20 font-custom_font">
        <div class="mx-auto w-11/12 md:w-5/12 bg-custom_blue py-20 rounded-xl px-16">

            <h2 class="text-center  font-bold text-gray-50 text-5xl tracking-wide mb-10">
                Settings
            </h2>

            <div class="text-center my-4">
                <button style="border-radius:32px;" class="flex w-full rounded-3xl py-4 text-center justify-center items-center bg-custome_bg text-gray-100 text-lg focus:outline-none">
                    <span class="mr-2 font-medium">Change Password</span><ion-icon class="text-2xl font-medium" name="key-outline"></ion-icon>
                </button>
            </div>
            <div class="text-center my-4">
                <button style="border-radius:32px;" class="flex w-full rounded-3xl py-4 text-center justify-center items-center bg-custome_bg text-gray-100 text-lg focus:outline-none">
                    <span class="mr-2 font-medium">Disclaimer</span><ion-icon class="text-2xl font-medium" name="information-circle-outline"></ion-icon>
                </button>
            </div>

            <div class="text-center my-4">
                <button style="border-radius:32px;" class="flex w-full rounded-3xl py-4 text-center justify-center items-center bg-custome_bg text-gray-100 text-lg focus:outline-none">
                    <span class="mr-2 font-medium">About Us</span><ion-icon class="text-2xl font-medium" name="help-circle-outline"></ion-icon>
                </button>
            </div>
            <div class="text-center my-4">
                <button style="border-radius:32px;" class="flex w-full rounded-3xl py-4 text-center justify-center items-center bg-custome_bg text-gray-100 text-lg focus:outline-none">
                    <span class="mr-2 font-medium">Log out </span><ion-icon class="text-2xl font-medium" name="log-out-outline"></ion-icon>
                </button>
            </div>

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