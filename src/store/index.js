import Vue from 'vue'
import Vuex from 'vuex'
import { fetchCategory } from '@/api/homeApis'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 5
  },
  getters: {},
  mutations: {

  },
  actions: {
    _fetchCategory ({state, getters, commit}) {
      fetchCategory().then(res => {
        console.log(res)
      })
    }
  },
  plugins: []
})
