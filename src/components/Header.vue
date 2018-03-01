<template>
  <div class="header">
    <slot name="left">
      <i :class="icons.back"></i>
    </slot>
    <slot name="center"></slot>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
  @import '../styles/base';
  .header {
    height: 50px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    background: linear-gradient(left, $base-color-light, $base-color);
  }
</style>
