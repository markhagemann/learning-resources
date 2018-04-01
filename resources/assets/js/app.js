import './bootstrap';
import router from './routes';
import App from './views/App';

new Vue({
    el: '#app',
    components: { App },
    router,
});
