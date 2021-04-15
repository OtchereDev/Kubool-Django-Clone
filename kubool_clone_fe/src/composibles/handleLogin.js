import { ref } from "@vue/reactivity";

const error =ref(null)

export const login=async(body)=>{
    error.value=null
    try {
        const res=await fetch('https://gdpd.herokuapp.com/api/token/',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(body),
            
        })
        const data=await res.json()

        if(!res.ok){
            
            throw Error(JSON.stringify(data))
        }
        
        error.value=null
        return data
        
    } catch (err) {
        const message=JSON.parse(err.message)
        error.value=message
    }
}

const handleLogin=()=>{

    return {error,login}
}

export default handleLogin