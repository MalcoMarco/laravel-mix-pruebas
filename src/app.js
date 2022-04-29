// src/app.js
// alert('hello world');
// console.log(
//     process.env.MIX_SOME_KEY
// )
import Vue from 'vue';
import example from './components/example.vue';
import overlay from './components/overlay.vue';

new Vue({
    el: '#appvue',
    //template: '<example/>',
    components: { example,overlay },
    data() {
        return {
            show: false
        }
    },
    methods: {
        onshow() {
            this.show = !this.show
        }
    },

    
});