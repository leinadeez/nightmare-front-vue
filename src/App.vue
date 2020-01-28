<template>
  <div id="app">
    <incredible-menu />
    <router-view/>    
  </div>
</template>

<script>
import IncredibleMenu from '@/views/menu/menu'

export default {
  name: 'App',
  created() {
    this.$store.dispatch('getPosts')
  },
  components: {
    'incredible-menu' : IncredibleMenu
  }
}
</script>

<style lang="scss">


</style>
