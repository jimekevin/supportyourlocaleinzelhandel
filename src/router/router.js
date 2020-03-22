
import VueRouter from 'vue-router'

const Landing =()=> import("./../components/Landing.vue")
const CityCode =()=> import("./../components/CityCode.vue")
const Explore =()=> import("./../components/Explore.vue")
const Filter =()=> import("./../components/Filter.vue")
const City =()=> import("./../components/City.vue")
const Profile =()=> import("./../components/Profile.vue")
const routes = [
  { path: '/', name:'landing', component: Landing },
  { path: '/citycode', name:'citycode', component: CityCode },
  { path: '/explore', name:'explore', component: Explore },
  { path: '/filter', name:'filter', component: Filter },
  { path: '/city', name:'city', component: City },
  { path: '/profile/:id', name:'profile', component: Profile },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

export default router;
