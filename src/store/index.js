import Vue from 'vue'
import Vuex from 'vuex'
import { mutationTypes, actionTypes } from './types'
import { fetchCategory, fetchShops } from '@/api/homeApis'

Vue.use(Vuex)

let state = {
  address: {
    latitude: 30.274151,
    longitude: 120.155151
  },
  homeCategory: [],
  homeShops: []
}

let getters = {}

let mutations = {
  [mutationTypes.changeHomeCategory] (state, category) {
    state.homeCategory = category
  },

  [mutationTypes.changeHomeShops] (state, shops) {
    state.homeShops = shops
  }
}

let actions = {
  [actionTypes.fetchHomeCategory]: async ({state, getters, commit}) => {
    let category = await fetchCategory()
    commit(mutationTypes.changeHomeCategory, category)
  },

  [actionTypes.fetchHomeShops]: async ({state, getters, commit}) => {
    let shops = await fetchShops(state.address)
    commit(mutationTypes.changeHomeShops, shops)
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
