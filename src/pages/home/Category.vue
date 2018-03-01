<template>
  <div class="category">
    <div class="one-category">
      <ul>
        <li>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </li>
        <li>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="one-category"></div>
    <div class="pagnation">
      <span class="item"
            :class="{active: index === active}"
            v-for="(n, index) in categoryItems.length"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Category',
  data () {
    return {
      active: 0,
      categoryItems: [[], []]
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
  @import "../../styles/base";
  .category {
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
</style>
