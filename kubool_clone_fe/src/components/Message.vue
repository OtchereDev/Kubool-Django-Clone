<template>
    <div style="border-color:#5fdee2" class=" my-2 border rounded-lg py-4 px-2 text-gray-100 ">
        <p>
            Message:
        </p>
        <p>
            {{message.content}}
        </p>
        <p class="my-1">
            - Anonymous [{{formatDate}}]
        </p>
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
    props:['message'],
    setup(props){
        const formatDate=computed(()=>{
            const date= new Date(props.message.created)
            return `${date.toDateString()} ${date.toLocaleTimeString()} GMT`
        })

        return {formatDate}
    }
}
</script>

<style>

</style>