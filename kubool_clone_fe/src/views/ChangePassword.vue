<template>
    <div class="min-h-screen bg-custome_bg bg-cover bg-no-repeat py-20 font-custom_font">
            <div class="mx-auto w-11/12 md:w-5/12 bg-custom_blue py-20 rounded-xl px-16">

                <h2 class="text-center  font-bold text-gray-50 text-4xl tracking-wide">
                    Change Password
                </h2>

                <p class="text-gray-300 text-sm text-center my-6 ">
                    You can change your password from here.
                </p>

                <form >
                    <div class="my-10">
                        <label for="password" class="block text-gray-200 text-sm my-2">New Password</label>
                        <input type="password" id="password" placeholder="Enter your password" autocomplete='off' class="block w-full bg-transparent py-3 px-2 placeholder-gray-400 outline-none border-b-2 font-medium text-gray-100 text-lg border-gray-50 tracking-wide focus:border-gray-400 transition-colors duration-500" required>
                    </div>
                    <div class="text-center my-10">
                        <button style="border-radius:32px;" class="flex w-full rounded-3xl py-4 text-center justify-center items-center bg-custome_bg text-gray-100 text-lg focus:outline-none">
                            <span class="mr-2 font-medium">Change Password</span><ion-icon class="text-2xl font-medium" name="arrow-forward-outline"></ion-icon>
                        </button>
                    </div>
                </form>
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