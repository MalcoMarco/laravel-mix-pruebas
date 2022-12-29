import Vue from 'vue';
import App from './formulario/home.vue';
import Myinput from './formulario/componet/Myinput.vue';
Vue.component('Myinput', Myinput);
Vue.component('App', App);
new Vue({
    el: '#appvue',
    template: '<App/>',
});