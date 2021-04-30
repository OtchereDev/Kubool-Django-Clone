<template>
    <hr style="border-color:#a64bf4;" class="border my-10">

    <div class="text-center my-4">
        <button @click="handleClick" style="border-radius:32px;" class="flex w-full rounded-3xl py-4 text-center justify-center items-center bg-custome_bg text-gray-100 text-lg focus:outline-none">
            <ion-icon name="arrow-back-outline" class="text-2xl font-medium" ></ion-icon><span class="ml-2 font-medium">Go Back</span>
        </button>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
    setup(){
        const router =useRouter()

        const handleClick=()=>{
            router.go(-1)
        }

        return {handleClick}
    }
}
</script>

<style>

</style>