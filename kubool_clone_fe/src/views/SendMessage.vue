<template>
   <div class="min-h-screen bg-custome_bg bg-cover bg-no-repeat py-20 font-custom_font">
            <div class="mx-auto w-11/12 md:w-8/12 lg:w-5/12 bg-custom_blue py-10 rounded-xl px-8 md:px-10 lg:px-16">

                <div v-if="user_error">


                <h2 class="text-center  font-bold text-gray-50 text-4xl tracking-wide">
                    Oops... You are lost 😖
                </h2>

                <BackBtn/>
                </div>

                <div v-else>
                    <h2 class="text-center  font-bold text-gray-50 text-4xl tracking-wide my-10">
                        Say Something...
                    </h2>
                    <div class="text-red-600 text-center font-semibold my-4 text-sm " v-if="send_error"> 
                        <p >{{send_error}}</p>
                    </div>

                    <div class="text-green-700 text-center font-semibold my-4 text-sm " v-if="success">   
                        <p>{{success}}</p>
                    </div>
                    <div>
                        <form @submit.prevent="handleSubmit">

                            <label for="message" class="block text-gray-200 text-sm my-2">Say Something About Me<span class="text-red-600">*</span></label>
                            <textarea @keydown="handleLength" v-model="message"  type="text" id="message" :placeholder="`Leave a message for ${user} here...`" class="block w-full bg-transparent py-3 px-2 placeholder-gray-400 outline-none border-b-2 font-medium text-gray-100 text-lg border-gray-50 tracking-wide focus:border-gray-400 transition-colors duration-500 h-52 resize-none" ></textarea>
                            <p class='my-2 text-gray-200'>
                                {{messageLength}} words left
                            </p>
                            <div  class="text-center my-4">
                                <button  style="border-radius:32px;" class="flex w-full rounded-3xl py-4 text-center justify-center items-center bg-custome_bg text-gray-100 text-lg focus:outline-none">
                                    <span class="mr-2 font-medium">Send Message</span><ion-icon class="text-2xl font-medium" name="paper-plane"></ion-icon>
                                </button>
                            </div>
                        </form>
                        <p class="text-gray-400 text-xs my-2">
                            By using this service, you agree to our Privacy Policy, Terms of Service and any related policies.
                        </p>
                        <p class="text-gray-400 text-sm mt-2">
                            Say what do you think about {user} or Leave a feedback for {user} anonymously using the form above.. 🥰
                        </p>
                        <p class="text-gray-400 text-sm">

                            Thank You!! 😍😊
                        </p>

                        <p class="text-gray-400 text-sm my-2">
                            <span class="font-semibold">Guide to write perfect Anonymous Messages by Kubool:</span> With the help of our anonymous message sender named Kubool now, you can easily message your heart's desire to your friends, family members, and anyone you know who are on Kubool. We care about our users and thus we are suggesting what you may choose to tell them anonymously. Everyone in this world loves to get affection from their loved ones be it their parents, partners, or close friends. Tell them how much they matter to you and how much you care for them! These compliments will increase their positive feelings and they will feel your friendly love from the core of their heart. If you feel like there is something you do not like out of them, you may choose to constructively criticize them about it. That is completely fine and in fact when constructive criticism is delivered right, one can develop themselves accordingly to become a better person as a whole. Make sure to be on point with the criticism and make sure that it does not become an insult at the end. You may also choose to suggest things that will help them become a better person as a whole! Future predictions are tough, as shown by the available future predictions apps just like the love predictions! No one knows what is going to happen next. But, it is always good to be aware of your cons, focuses on your pros, and transforming your cons to your pros. That is exactly what good constructive criticism helps you achieve! We hope you liked this little guide on how you can write better anonymous messages which are going to be very productive. Don't forget to play by the rules, keep it clean out there. 😉
                        </p>
                    </div>
                </div>

            </div>
   </div>
</template>

<script>
import BackBtn from '@/components/BackBtn.vue'
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import checkUser from '@/composibles/checkUser'
import postMessage from '@/composibles/postMessage'
export default {
    components:{BackBtn},
    setup(){
        const message = ref('')
        const messageLength=ref(250)
        const fixed=ref(250)
        const success=ref(null)
        
        const {user_error,findUser}=checkUser()
        const {send_error, sendMessage}=postMessage()

        const route=useRoute()


        const user=ref(null)

        const handleLength=(e)=>{
            if(message.value.length>250){

                if(messageLength.value <= 0 ){
                    messageLength.value=0
                }
                    messageLength.value=0

                    message.value=message.value.substring(0,250)
            }else{
                if(e.code=='Backspace' ||e.code =='Delete'){
                    if(messageLength.value < 250){
                      

                        messageLength.value= fixed.value - (message.value.length-1)
                    }

                }else{

                    messageLength.value= fixed.value - (message.value.length+1)
                }
               
            }
        }

        onMounted(async()=>{
            user.value=await findUser(route.params.shared_code)

        })

        const handleSubmit=async()=>{
            await sendMessage({message:message.value},route.params.shared_code)
            if(send_error!== null){
                success.value='message sent'
                message.value=''

                setTimeout(()=>{
                    success.value=null
                },3000)
            }
        }



        return {message,messageLength,handleLength,user,user_error,handleSubmit,send_error,success}
    }
}
</script>

<style>

</style>