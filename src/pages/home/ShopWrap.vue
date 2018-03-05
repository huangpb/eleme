<template>
  <div class="shop-wrap">
    <Shop v-for="shop in homeShops"
          :shop="shop"
         :key="shop.img">
    </Shop>
  </div>
</template>

<script>
import Shop from './Shop.vue'

export default {
  name: 'ShopWrap',
  props: {
    homeShops: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    Shop
  }
}
</script>

<style lang="scss" scoped>
  .shop-wrap {

  }
</style>
