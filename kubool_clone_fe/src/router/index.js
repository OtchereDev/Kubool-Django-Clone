
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Auth from '../views/Auth.vue'
import Settings from '../views/Settings.vue'
import ChangePassword from '../views/ChangePassword.vue'
import Disclaimer from '../views/Disclaimer.vue'
import Contact from '../views/Contact.vue'
import Messages from '../views/Messages.vue'
import SendMessage from '../views/SendMessage.vue'

import getCurrentUser from '../composibles/getUser'

const requireAuth=async(to,from,next)=>{
    const {user,error}=await getCurrentUser()
   
    if(user.value !==null){
      next()
    }else{
      next({name:'Auth'})
    }
}

const requireNoAuth=async(to,from,next)=>{
  const {user,error}=await getCurrentUser()
  console.log(user.value)
  if(user.value ===null){
    next()
  }else{
    next({name:'Home'})
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter:requireAuth
  },
 {
   path:'/auth',
   name:'Auth',
   component:Auth,
   beforeEnter:requireNoAuth
 },
 {
   path:'/settings',
   name:'Settings',
   component:Settings,
   beforeEnter:requireAuth
 },
 {
   path:'/settings/change_password',
   name:'Change_password',
   component:ChangePassword,
   beforeEnter:requireAuth
 },
 {
  path:'/settings/disclaimer',
  name:'Disclaimer',
  component:Disclaimer,
  beforeEnter:requireAuth
},
{
  path:'/about',
  name:'Contact',
  component:Contact,
  beforeEnter:requireAuth
},
{
  path:'/messages',
  name:'Messages',
  component:Messages,
  beforeEnter:requireAuth
},
{
  path:'/:shared_code',
  name:'SendMessage',
  component:SendMessage,
  props:true
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
}

})

export default router
