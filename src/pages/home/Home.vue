<template>
  <div class="home">
    <Header>
      <div slot="left">
        <i :class="icons.location1"></i>
        <span class="location">杭州市人民政府</span>
        <i :class="icons.down"></i>
      </div>
    </Header>
    <SearchBar></SearchBar>
    <Category :homeCategory="homeCategory"></Category>
  </div>
</template>

<script>
import SearchBar from './SearchBar.vue'
import Category from './Category.vue'
import { mapState, mapActions } from 'vuex'
import { actionTypes } from '@/store/types'

const { fetchHomeCategory } = actionTypes

export default {
  name: 'home',
  computed: Object.assign(
    mapState(['homeCategory'])
  ),
  methods: Object.assign(
    mapActions([fetchHomeCategory]),
    {
    }
  ),
  components: {
    SearchBar,
    Category
  },
  created () {
    this[fetchHomeCategory]()
  }
}
</script>

<style lang="scss" scoped>
  .home {
    .icon-zuobiao {
      font-size: 18px;
    }

    .icon-zhcc_xiangxiajiantou {
      font-size: 12px;
    }

    .location {
      font-size: 17px;
    }
  }
</style>
