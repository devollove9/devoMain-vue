/**
 * Created by devollove9 on 2017/10/22.
 */
import store from '@/core/store'
const i18n = (locales) => {
  store.commit('addLocale', {locales: locales})
}
export default i18n
