import Vue from 'vue'
import App from './App'
import store from './core/store'
import router from './router'
import VueI18n from 'vue-i18n'

Vue.config.productionTip = false

// Create VueI18n instance with options
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: store.state.activeLocale, // set locale
  messages: store.getters.getLocales // set locale messages
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  i18n,
  template: '<App/>',
  components: { App }
})
