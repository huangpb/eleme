<template>
  <div class="category"
       @touchstart="touchStart(e)"
       @touchmove="touchMove(e)">
    <div>
      <transition-group name="slide">
        <div class="one-category"
             v-for="(category, index1) in homeCategory"
             v-show="index1 === active"
             :key="index1">
          <ul>
            <li v-for="(line, index2) in category"
                class="category-line"
                :key="index2">
              <router-link v-for="(item) in line"
                           to="/"
                           class="category-item"
                           :key="item.img">
                <img :src="require('../../assets/img/homeCategory/' + item.img)" alt="图标">
                <span>{{item.name}}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </transition-group>
    </div>
    <div class="pagnation">
      <span class="item"
            :class="{active: index === active}"
            v-for="(n, index) in homeCategory.length"
            :key="n"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: {
    homeCategory: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      active: 0,
      start: {x: 0, y: 0}
    }
  },
  computed: {},
  methods: {
    touchStart (e) {
      e.preventDefault()
      this.start.x = e.originalEvent.changedTouches[0].pageX
      this.start.y = e.originalEvent.changedTouches[0].pageY
    },

    touchMove (e) {
      e.preventDefault()
      let moveEndX = e.originalEvent.changedTouches[0].pageX
      let moveEndY = e.originalEvent.changedTouches[0].pageY
      let x = moveEndX - this.start.x
      let y = moveEndY - this.start.y
      if (y > -30 && y < 30) {
        if (x < -60) {
          let active = this.active + 1
          this.active = active > (this.homeCategory.length - 1)
            ? 0 : active
        } else if (x > 60) {
          let active = this.active - 1
          this.active = active < 0
            ? (this.homeCategory.length - 1) : active
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../styles/base";

  .category {
    margin-top: 15px;

    .one-category {
      .category-line {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 10px;

        .category-item {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          height: 66px;

          img {
            width: 42px;
            height: 34px;
          }
        }
      }
    }

    .pagnation {
      text-align: center;

      .item {
        display: inline-block;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: $gray;
        margin: 0 5px;

        &.active {
          background: #333;
        }
      }
    }
  }

  .slide-enter {
    transform: translateX(100%);
  }
  .slide-enter-active, .slide-leave {
    transform: translateX(0);
  }
  .slide-leave-active {
    transform: translateX(-100%);
  }
  .slide-enter-active, .slide-leave-active {
    transition: transform .5s linear;
  }
</style>
