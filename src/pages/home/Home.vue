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
    <Category></Category>
  </div>
</template>

<script>
import SearchBar from './SearchBar.vue'
import Category from './Category.vue'
import {mapActions} from 'vuex'
import axios from 'axios'

export default {
  name: 'home',
  methods: Object.assign(
    mapActions(['_fetchCategory'])
  ),
  components: {
    SearchBar,
    Category
  },
  created () {
    this._fetchCategory()
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
