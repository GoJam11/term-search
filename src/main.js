import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import SearchBox from "./components/SearchForm.vue";
import Detail from "./components/Detail.vue";


Vue.use(VueRouter)
Vue.use(BootstrapVue)

var _ = require('lodash');


Vue.config.productionTip = false

const router = new VueRouter({
    routes: [
            { path: '/detail', component: Detail },
            { path: '/', component: SearchBox }
        ] // (缩写) 相当于 routes: routes
})

new Vue({
    render: h => h(App),
    router
}).$mount('#app')