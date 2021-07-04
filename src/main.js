import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueWow from 'vue-wow'

import vSelect from 'vue-select';

Vue.component('v-select', vSelect);

Vue.config.productionTip = false;
Vue.use(VueWow)
new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app');
