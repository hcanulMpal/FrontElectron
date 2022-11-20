import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueCountryCode from "vue-country-code"

import VueMask from 'v-mask'
Vue.use(VueMask);
Vue.use(VueCountryCode);
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
