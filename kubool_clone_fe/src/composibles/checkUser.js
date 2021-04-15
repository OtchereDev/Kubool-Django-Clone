import {ref} from 'vue'

const user_error=ref(null)

const findUser=async(shared_code)=>{
    try {
        
        const res = await fetch(`https://gdpd.herokuapp.com/api/user/${shared_code}/`,{
            method:'POST'
        })
    
        if(!res.ok){
            throw Error('user not found')
            
        }

        const data = await res.json()
        
        return data.username

    } catch (err) {
        user_error.value=err.message
    }
}

const checkUser=()=>{
    return {user_error,findUser}
}

export default checkUser