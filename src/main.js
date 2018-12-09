import Vue from 'vue'
import App from './App'
import store from './store'
import * as utils from './utils'
import * as api from './http/api'
import 'common/style/reset.styl'
import 'common/font/icon.css'

Vue.prototype.$store = store
Vue.prototype.utils = utils
Vue.prototype.api = api
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
