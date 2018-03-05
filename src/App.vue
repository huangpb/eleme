<template>
  <div id="app">
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',
  computed: Object.assign(
    mapState(['count'])
  )
}
</script>

<style lang="scss">
@import './styles/base';

#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding-bottom: $footer-height;
}
</style>
