<template>
     <div class="min-h-screen bg-custome_bg bg-cover bg-no-repeat py-20 font-custom_font">
            <div class="mx-auto w-11/12 md:w-8/12 lg:w-5/12 bg-custom_blue py-10 rounded-xl px-8 md:px-10 lg:px-16">

                <h2 class="text-center  font-bold text-gray-50 text-4xl tracking-wide">
                    My Answers
                </h2>
                <p class="text-gray-300 text-sm text-center my-6 ">
                    Scroll down to check out the messages that you have received
                </p>
                <div v-if="error || !messages.length" class="border border-red-500 rounded-lg py-4 px-2 text-gray-100 text-sm">
                    <p v-if="!messages.length">
                        Oops! No one has sent you a message in <span class="font-semibold">last 3 Days!</span> Share your profile link and check back later again!
                    </p>
                    <p v-else>
                        Sorry there was an error, fetching your messages
                    </p>
                </div>
                <div v-else>
                    <div v-for="obj,index in messages" :key="index">
                        <Message :message="obj" />
                    </div>
                </div>
               
                <BackBtn/>
            </div>
     </div>
</template>

<script>
import BackBtn from '@/components/BackBtn.vue'
import Message from '@/components/Message.vue'
import getMessages from '@/composibles/getMessage'
import { onMounted } from '@vue/runtime-core'
export default {
    components:{BackBtn,Message},
    setup(){
        const {error,messages,requestMessages} =getMessages()

        onMounted(async()=>{

            await requestMessages()

        })

        return {error,messages}

    }
}
</script>

<style>

</style>