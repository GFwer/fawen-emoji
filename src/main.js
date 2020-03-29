import Vue from 'vue';
import VueClipboard from 'vue-clipboard2';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

VueClipboard.config.autoSetContainer = true; // add this line
Vue.use(VueClipboard);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
