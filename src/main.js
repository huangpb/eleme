import Vue from 'vue'
import Fastclick from 'fastclick'
import App from './App'
import router from './router'
import store from './store/index'
import './styles/_index.scss'
import customMethods from './components/customMethods'

// remove 300ms delay
Fastclick.attach(document.body)

Vue.config.productionTip = false
Vue.use(customMethods)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
