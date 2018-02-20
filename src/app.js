import Vue from 'vue'
import App from './App'
import store from './core/store'
import router from './router'
import VueI18n from 'vue-i18n'
import Progress from './components/Progress'

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(solid)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

// Create VueI18n instance with options
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: store.state.activeLocale, // set locale
  fallbackLocale: store.state.activeLocale,
  messages: store.getters.getLocales // set locale messages
})
Vue.prototype.$locale = {
  change (language) {
    i18n.locale = language
  },
  current () {
    return i18n.locale
  }
}

Vue.use(Progress)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  i18n,
  template: '<App/>',
  components: { App }
})
