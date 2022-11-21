import { createApp } from 'vue'
import App from './App.vue'
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';

import router from './router'

createApp(App).use(router).mount('#app')
