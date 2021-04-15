import { ref } from "@vue/reactivity";
import refreshAccess from './refreshAccess'

const {refreshKey,refresh_error}=refreshAccess()

const error= ref(null)
const messages=ref([])

const message=async()=>{

    return await fetch('https://gdpd.herokuapp.com/api/user/messages/',{
        headers:{
            'content-type':'application/json',
            'Authorization':`Bearer ${localStorage.getItem('access_key')}`
        }
        
    })
}

const requestMessages=async ()=>{
    error.value=null 
    try {
      
            const res=await message()
            
            if (res.status=='401'){
                await refreshKey()
                if (refresh_error.value !== null){
                    throw Error('cant fetch message...')  
                }
    
                const res=await message()
                const data= await res.json()
                
                error.value=null

                messages.value= data.messages
    
            }else{
    
                const data= await res.json()
                if(!res.ok){
                    throw Error('cant fetch message...')  
                }
                    
                error.value=null

                messages.value= data.messages
                
            }
    } catch (err) {
        error.value=err.message
    }
}

const getMessage=()=>{
    return {error,messages,requestMessages}
}

export default getMessage