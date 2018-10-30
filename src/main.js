import Vue from 'vue'
import App from './App'
import store from './store'
import 'common/style/reset.styl'
import 'common/font/icon.css'

Vue.prototype.$store = store
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
