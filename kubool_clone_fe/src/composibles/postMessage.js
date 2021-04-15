import { ref } from "@vue/reactivity";

const send_error=ref(null)

const sendMessage=async(body,shared_code)=>{
    try {
        const res=await fetch(`https://gdpd.herokuapp.com/messaging/${shared_code}/`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(body)
        })

        if (!res.ok){
            throw Error('Sorry could not send message...try again')
        }
    } catch (err) {
        send_error.value=err.message
    }
}

const postMessage=()=>{
    return {send_error, sendMessage}
}

export default postMessage

