import VueRouter from 'vue-router';

import Hello from './views/Hello';
import Home from './views/Home';

let routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },

    {
        path: '/hello',
        name: 'hello',
        component: Hello
    },

];

export default new VueRouter({
    routes,
    linkActiveClass: 'is-active'
});