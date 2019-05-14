<template>
  <a-layout id="components-layout-demo-responsive">
    <navTemplate></navTemplate>
    <contentTemplate></contentTemplate>
  </a-layout>
</template>

<script>
import navTemplate from './components/nav/nav.vue'
import contentTemplate from './components/content/content.vue'

export default {
  name: 'app',
  components: {
    navTemplate,
    contentTemplate
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
