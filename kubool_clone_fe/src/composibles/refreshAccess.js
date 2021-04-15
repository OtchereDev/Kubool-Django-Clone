import { ref } from "@vue/reactivity"

const refresh_error=ref(null)

const refreshKey= async()=>{
    if(localStorage.getItem('refresh_key') !== null){
        refresh_error.value=null
        try {
            
            const res = await fetch('https://gdpd.herokuapp.com/api/token/refresh/',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify({
                    "refresh":`${localStorage.getItem('refresh_key')}`
                })

            })
    
            if(!res.ok){
                throw Error('cant perform refresh')
            }

            const data =await res.json()

            localStorage.setItem('access_key',data.access)
            refresh_error.value=null

        } catch (err) {
            refresh_error.value=err.message
        }

    }else{
        refresh_error.value='cant perform refresh'
    }
}


const refreshAccess=()=>{
    return {refreshKey,refresh_error}
}


export default refreshAccess
