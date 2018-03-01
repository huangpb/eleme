import Vue from 'vue'
import icons from '@/utils/icons'
// import loading from '@/components/loading/loading'

import Header from './Header.vue'
import Footer from './Footer.vue'

const comps = [
  Header,
  Footer
]

export default {
  install () {
    comps.forEach(comp => {
      Vue.component(comp.name, comp)
    })

    Vue.prototype.icons = icons
    // Vue.prototype.$loading_my = loading;
  }
}
