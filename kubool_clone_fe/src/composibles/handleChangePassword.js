import { ref } from "@vue/reactivity";
import refreshAccess from './refreshAccess'

const {refreshKey,refresh_error}=refreshAccess()

const error =ref(null)
const success=ref(null)

const change=async(body)=>{
    return await fetch('https://gdpd.herokuapp.com/api/user/change_password/',{
        method:'POST',
        headers:{
            'content-type':'application/json',
            'Authorization':`Bearer ${localStorage.getItem('access_key')}`
        },
        body:JSON.stringify(body),
        
    })
}

const change_password=async(body)=>{
    error.value=null
    try {
        const res=await change(body)
        
        if (res.status=='401'){
            await refreshKey()
            if (refresh_error.value !== null){
                throw Error(JSON.stringify(data))  
            }

            const res=await change()
            const data= await res.json()
            
            error.value=null
            success.value='Password has successfully been changed.'

        }else{

            const data= await res.json()
            if(!res.ok){
                throw Error(JSON.stringify(data))  
            }
                
            error.value=null
            success.value='Password has successfully been changed.'
            
        }
        
        
    } catch (err) {
        const message=JSON.parse(err.message)
        error.value=message
        console.log(error.value)
    }
}

const handleChangePassword=()=>{

    return {error,change_password,success}
}

export default handleChangePassword