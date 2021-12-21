


import VueRouter from 'vue-router';

import Vue from 'vue'
Vue.use(VueRouter);



import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify);


import homePage from '../pages/Main'
import detailPage from '../pages/detail'

const routes = [
    {
        path:'/home',
        component:homePage,
        name:'homePage',

    },
    {
        path:'/detail/:id',
        component:detailPage,
        name:'detailPage',

    },

];
export default new VueRouter({
    routes,
    mode:'hash'
})
