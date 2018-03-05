<template>
  <div id="home"
       class="home"
       :class="{paddingTop: fixed}"
       ref="home"
       @scroll="scroll($event)">
    <Header>
      <div slot="left">
        <i :class="icons.location1"></i>
        <span class="location">杭州市人民政府</span>
        <i :class="icons.down"></i>
      </div>
    </Header>
    <SearchBar :class="{fixed: fixed}"></SearchBar>
    <Category :homeCategory="homeCategory"></Category>
    <div>
      <div class="recommend-title">
        <span class="one-line"></span>
        <span class="recommend-title-word">推荐商家</span>
        <span class="one-line"></span>
      </div>
      <ShopWrap :homeShops="homeShops"></ShopWrap>
    </div>
    <transition name="top">
      <ToTop v-show="top" @toTop="toTop"></ToTop>
    </transition>
  </div>
</template>

<script>
import SearchBar from './SearchBar.vue'
import Category from './Category.vue'
import ShopWrap from './ShopWrap.vue'
import ToTop from './ToTop.vue'
import { mapState, mapActions } from 'vuex'
import { actionTypes } from '@/store/types'

const { fetchHomeCategory, fetchHomeShops } = actionTypes

export default {
  name: 'home',
  data () {
    return {
      fixed: false,
      top: false
    }
  },
  computed: Object.assign(
    mapState(['homeCategory', 'homeShops'])
  ),
  methods: Object.assign(
    mapActions([
      fetchHomeCategory,
      fetchHomeShops
    ]),
    {
      scroll (e) {
        this.fixed = e.target.scrollTop > 50
        this.top = e.target.scrollTop > 300
      },

      toTop () {
        this.$refs.home.scrollTop = 0
      }
    }
  ),
  components: {
    SearchBar,
    Category,
    ShopWrap,
    ToTop
  },
  created () {
    if (this.$store.state.homeCategory.length === 0) {
      console.log('get category')
      this[fetchHomeCategory]()
    }

    if (this.$store.state.homeShops.length === 0) {
      console.log('get shops')
      this[fetchHomeShops]()
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../styles/base';

  .home {
    height: 100%;
    overflow-y: auto;

    &.paddingTop {
      padding-top: $search-bar-height;
    }

    .icon-zuobiao {
      font-size: 18px;
    }

    .icon-zhcc_xiangxiajiantou {
      font-size: 12px;
    }

    .location {
      font-size: 17px;
    }

    .recommend-title {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 15px 0 5px;

      .one-line {
        width: 20px;
        margin: 10px;
        border-top: 1px solid $gray;
      }

      .recommend-title-word {
        font-size: 16px;
        color: $black-color;
      }
    }
  }

  .test {
    height: 50px;
    background: red;
  }
  .test-enter, .test-leave-active {
    opacity: 0;
  }
  .test-enter-active, .test-leave-active {
    transition: opacity 1s linear;
  }

  .top-enter, .top-leave-active {
    opacity: 0;
  }
  .top-enter-active, .top-leave {
    opacity: 1;
  }
  .top-enter-active, .top-leave-active {
    transition: opacity 1.5s linear;
  }
</style>
