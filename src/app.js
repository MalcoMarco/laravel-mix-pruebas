// src/app.js
// alert('hello world');
// console.log(
//     process.env.MIX_SOME_KEY
// )
import Vue from 'vue';
import example from './components/example.vue';

new Vue({
    el: '#appvue',
    template: '<example/>',
    components: { example }
});