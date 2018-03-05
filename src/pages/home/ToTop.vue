<template>
  <div class="to-top">
    <i :class="icons.returnTop" @click="toTop"></i>
  </div>
</template>

<script>
export default {
  name: 'ToTop',
  methods: {
    toTop () {
      this.$emit('toTop')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../styles/base';

  .to-top {
    position: fixed;
    right: 5%;
    bottom: $footer-height + 30px;
    z-index: 10;
    background: #fff;

    .iconfont {
      font-size: 40px;
      color: #ccc;
    }
  }
</style>
