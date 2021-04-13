<template>
    <div class="min-h-screen bg-custome_bg bg-cover bg-no-repeat py-20 font-custom_font">
            <div class="mx-auto w-11/12 md:w-8/12 lg:w-5/12 bg-custom_blue py-20 rounded-xl px-8 md:px-10 lg:px-16">

                <h2 class="text-center  font-bold text-gray-50 text-4xl tracking-wide">
                    Change Password
                </h2>

                <p class="text-gray-300 text-sm text-center my-6 ">
                    You can change your password from here.
                </p>
                <div class="text-red-600 text-center font-semibold my-4 text-sm " v-if="error">
                    <div v-if="error.validation_error">
                        <p v-for="obj,index in error.validation_error" :key="index">
                            {{obj}}
                        </p>
                    </div>
                   
                    <div v-else-if="error.password">
                        <p >
                            {{error.password}}
                        </p>
                    </div>
                    <p v-else>{{error}}</p>
                </div>
                <div class="text-green-600 text-center font-semibold my-4 text-sm " v-if="success">
                    {{success}}
                </div>

                <form @submit.prevent="handleSubmit" >
                    <div class="my-10">
                        <label for="password" class="block text-gray-200 text-sm my-2">New Password</label>
                        <input v-model="password" type="password" id="password" placeholder="Enter your password" autocomplete='off' class="block w-full bg-transparent py-3 px-2 placeholder-gray-400 outline-none border-b-2 font-medium text-gray-100 text-lg border-gray-50 tracking-wide focus:border-gray-400 transition-colors duration-500" required>
                    </div>
                    <div class="text-center my-10">
                        <button ref="btn" style="border-radius:32px;" class="flex w-full rounded-3xl py-4 text-center justify-center items-center bg-custome_bg text-gray-100 text-lg focus:outline-none">
                            <span v-if="!requesting" class="mr-2 font-medium">Change Password</span><ion-icon v-if="!requesting" class="text-2xl font-medium" name="arrow-forward-outline"></ion-icon>
                            <span v-if="requesting">Please wait...</span>
                        </button>
                    </div>
                </form>
                <BackBtn/>
            </div>
    </div>
</template>

<script>
import {ref} from 'vue'
import BackBtn from '@/components/BackBtn.vue'
import handleChangePassword from '@/composibles/handleChangePassword'
export default {
    components:{BackBtn},
    setup(){
       
        const password=ref('')

        const requesting=ref(false)
        const btn=ref(null)

        const {error,change_password,success}=handleChangePassword()

        const handleSubmit= async()=>{
            error.value=null
            if( password.value.length){
                error.value=null

                requesting.value=true
                btn.value.style.disabled=true
                const res= await change_password({password:password.value})

                if(error.value===null){
                    password.value=null
                }

                requesting.value=false
                btn.value.style.disabled=false
            }else{
                error.value='Please complete the form'
            }
        }

        return {success,password,error,handleSubmit,btn,requesting}
    
    }
}
</script>

<style>

</style>