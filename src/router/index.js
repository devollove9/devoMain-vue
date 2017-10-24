import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home.vue'
import Contact from '@/components/Contact/Contact.vue'
import SignUp from '@/components/SignUp/SignUp.vue'
import SignIn from '@/components/SignIn/SignIn.vue'
import NotFound from '@/components/NotFound/NotFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [

    { path: '/', name: 'home', component: Home },
    { path: '/contact', name: 'contact', component: Contact },
    // { path: '/app', name: 'app', component: NV, meta: { requiresAuth: true } },
    { path: '/signin', name: 'signin', component: SignIn },
    { path: '/signup', name: 'signup', component: SignUp },
    // { path: '/n/:id', name: 'public', component: Public },
    { path: '*', name: 'notfound', component: NotFound }
  ]
})
