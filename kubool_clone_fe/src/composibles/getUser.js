import {ref} from 'vue'
import refreshAccess from './refreshAccess'

const error=ref(null)
const user=ref(null)

const {refreshKey,refresh_error}=refreshAccess()


const contactAPIUser=async()=>{
     return await fetch('https://gdpd.herokuapp.com/api/user/current_user/',{
        method:'POST',
        headers:{
            'Authorization':`Bearer ${localStorage.getItem('access_key')}`
        }
    })



}

const getCurrentUser= async()=>{
    error.value=null 

    try {



        const res= await contactAPIUser()

        if (res.status=='401'){
            await refreshKey()
            if (refresh_error.value !== null){
                user.value=null
                throw Error('user is null')
            }
            const res=await contactAPIUser()
            const data= await res.json()
         
            localStorage.setItem('user',data.user)
            
            error.value=null
            user.value=data.user


        }else{

            const data= await res.json()
            localStorage.setItem('user',data.user)
            
            error.value=null
            user.value=data.user
        }
        
        
    } catch (err) {
        user.value=null
    
    }

    return {user,error}
}

export default getCurrentUser