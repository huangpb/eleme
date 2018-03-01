<template>
  <div class="home">
    <Header>
      <div slot="left">
        <i :class="icons.location1"></i>
        <span class="location">杭州市人民政府</span>
        <i :class="icons.down"></i>
      </div>
    </Header>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {}
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
      font-size: 16px;
    }
  }
</style>
