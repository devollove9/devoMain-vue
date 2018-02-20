/**
 * Created by devollove9 on 2018/2/17.
 */
import Vue from 'vue'
var ROUTER_ENTER_TIME = 0

const routeHandlerBefore = async (to, from, next) => {
  Vue.prototype.$progress.end()
  if (ROUTER_ENTER_TIME !== 0) {
    Vue.prototype.$progress.start(20)
    Vue.prototype.$progress.start(40)
  }
  ROUTER_ENTER_TIME++
  await next()
}

const routeHandlerAfter = (route) => {
  Vue.prototype.$progress.end()
  if (ROUTER_ENTER_TIME !== 1) {
    Vue.prototype.$progress.end()
  }
}

const routeHandler = {}

routeHandler.use = (router) => {
  router.beforeEach(routeHandlerBefore)
  router.afterEach(routeHandlerAfter)
}

export default routeHandler
