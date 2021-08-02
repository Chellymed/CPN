import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import PageAgenda from './components/PageAgenda.vue'
import Home from './components/Home.vue'
import Agenda from './components/Agenda.vue'
import AppOld from './components/AppOld'
import Subvention from './components/Subvention.vue'
import Actualite from './components/Actualite.vue'
import Inscription from './components/Inscription.vue'
import Connexion from './components/Connexion.vue'
import ContactezNous from './components/ContactezNous.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';


import 'vue-event-calendar/dist/style.css' 
import vueEventCalendar from 'vue-event-calendar'

Vue.use(vueEventCalendar, {
  locale: 'fr',
  color: '#f4150b',
  weekStartOn: 1
}) 
Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter);
Vue.component("hooper",Hooper)
Vue.component("slide",Slide)



export let routes = new VueRouter({
  mode:"history",
  routes:[
    {path:"/",component:AppOld},
    {path:"/Subvention",component:Subvention},
    {path:"/PageAgenda",component:PageAgenda},
    {path:"/Home",component:Home},
    {path:"/Agenda",component:Agenda},
    {path:"/Actualite",component:Actualite},
    {path:"/Inscription",component:Inscription},
    {path:"/Connexion",component:Connexion},
    {path:"/Contact",component:ContactezNous}
  ]
})

new Vue({
  render: h => h(App),
  router:routes,
 
}).$mount('#app')
