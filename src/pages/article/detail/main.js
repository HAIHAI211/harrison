import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()
export default {
  config: {
    'backgroundTextStyle': 'bolder',
    'navigationBarBackgroundColor': '#fbfbff',
    'backgroundColor': '#fbfbff',
    'navigationBarTitleText': '孙正 · Harrison',
    'navigationBarTextStyle': 'black',
    'enablePullDownRefresh': true
  }
}
