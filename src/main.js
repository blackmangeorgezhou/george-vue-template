import Vue from 'vue'
import App from './App'
import router from './router'

// 缓存
import '@/mock'
import store from '@/store'

import Vant from 'vant'
import VueAMap from 'vue-amap'
import VueResource from 'vue-resource'

Vue.use(Vant)
Vue.use(VueAMap)
Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
