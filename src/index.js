import Vue from 'vue';
import App from './components/App.vue';
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserShield,faWindowClose,faEye,faClock, faPortrait,faMobileAlt,faBan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Request from './components/plugin/Request';

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(BootstrapVue);
Vue.use(Request);


new Vue({
  render: h => h(App),
}).$mount('#app');