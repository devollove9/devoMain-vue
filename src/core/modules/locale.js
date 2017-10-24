/**
 * Created by devollove9 on 2017/10/22.
 */
import { merge } from 'lodash'

const locale = {
  state: {
    activeLocale: 'en-US',
    locales: {}
  },
  mutations: {
    changeLocale (state, payload) {
      state.activeLocale = payload.activeLocale
      console.log(state)
    },
    addLocale (state, locale) {
      merge(state.locales, state.locales, locale)
    }
  }
}

export default locale
