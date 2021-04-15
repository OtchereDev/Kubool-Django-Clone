import { ref } from "@vue/reactivity";
// import {login} from './handleLogin'
import handleLogin from './handleLogin'

const error =ref(null)

const {error:login_error,login}=handleLogin()

const signup=async(body)=>{
    error.value=null
    try {
        const res=await fetch('https://gdpd.herokuapp.com/api/user/signup/',{
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

        const datum =await login(body)
        if(login_error!==null){
            localStorage.setItem('access_key',datum.access)
            localStorage.setItem('refresh_key',datum.refresh)
        }else{
            error.value='Sorry cant login try again'
        }
        
    } catch (err) {
        const message=JSON.parse(err.message)
        error.value=message
    }
}

const handleSignUp=()=>{

    return {error,signup}
}

export default handleSignUp