<template>
  <div class="footer">
    <router-link class="link"
                 :class="index === active ? 'active' : ''"
                 :to="target[index]"
                 v-for="(item, index) in iconfonts"
                 :key="item"
                 @click.native="goto(index)">
      <i :class="index === active ? icons[iconsActive[active]] : icons[item]"></i>
      <span>{{titles[index]}}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      active: 0,
      iconfonts: ['eleme', 'find', 'order', 'my'],
      iconsActive: ['eleme', '_find', '_order', '_my'],
      titles: ['首页', '发现', '订单', '我的'],
      target: ['/', '/find', '/order', '/my']
    }
  },
  methods: {
    goto (index) {
      this.active = index
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../styles/base';
  .footer {
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: stretch;
    color: rgb(153,153,153);
    background: #fff;
    border-top: 1px solid #ccc;
    position: fixed;
    bottom: 0;
    width: 100%;

    .link {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      padding: 3px 0;

      .iconfont {
        font-size: 18px;

        &.icon-changyonglogo40 {
          font-size: 28px;
        }

        &.icon-faxian1 {
          font-size: 22px;
        }
      }

      &:first-child {
        position: relative;
        top: -2px;
      }

      &.active {
        color: $base-color;
      }
    }
  }
</style>
