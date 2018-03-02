import Vue from 'vue'
import Vuex from 'vuex'
import { mutationTypes, actionTypes } from './types'
import { fetchCategory } from '@/api/homeApis'

Vue.use(Vuex)

let state = {
  count: 5,
  homeCategory: []
}

let getters = {}

let mutations = {
  [mutationTypes.changeHomeCategory] (state, category) {
    state.homeCategory = category
  }
}

let actions = {
  [actionTypes.fetchHomeCategory]: async ({state, getters, commit}) => {
    let category = await fetchCategory()
    commit(mutationTypes.changeHomeCategory, category)
  }
}

let plugins = []

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  plugins
})
