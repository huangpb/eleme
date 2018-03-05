<template>
  <div class="search-bar">
    <router-link to="/search" class="search-input">
      <i :class="icons.search"></i>
      <span>搜索商家、商品名称</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Search',
  components: {}
}
</script>

<style lang="scss" scoped>
  @import "../../styles/base";

  .search-bar {
    height: $search-bar-height;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(left, $base-color-light, $base-color);

    .search-input {
      width: 92%;
      height: 36px;
      line-height: 36px;
      background: #fff;
      text-align: center;
      border-radius: 2px;
      font-size: 15px;
    }

    &.fixed {
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 3;
    }
  }
</style>
