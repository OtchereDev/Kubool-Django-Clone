import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Auth from '../views/Auth.vue'
import Settings from '../views/Settings.vue'
import ChangePassword from '../views/ChangePassword.vue'
import Disclaimer from '../views/Disclaimer.vue'
import Contact from '../views/Contact.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
 {
   path:'/auth',
   name:'Auth',
   component:Auth
 },
 {
   path:'/settings',
   name:'Settings',
   component:Settings
 },
 {
   path:'/settings/change_password',
   name:'Change_password',
   component:ChangePassword
 },
 {
  path:'/settings/disclaimer',
  name:'Disclaimer',
  component:Disclaimer
},
{
  path:'/contact',
  name:'Contact',
  component:Contact
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
