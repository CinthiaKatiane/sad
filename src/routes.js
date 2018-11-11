import Home from './components/home/Home.vue'
import ProfilePage from './components/profile/ProfilePage.vue'

export const routes = [

    {path: '', component: Home, name:'Home'},
    {path: '/perfil', component: ProfilePage, name:'Perfil'},

];