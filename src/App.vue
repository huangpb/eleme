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
#app {
}
</style>
