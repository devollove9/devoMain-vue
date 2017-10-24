<template>
  <div id="app">
    <AppHeader></AppHeader>
    <img src="./assets/logo.png">
    <router-view/>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppHeader from '@/components/Header/Header.vue'
import AppFooter from '@/components/Footer/Footer.vue'
export default {
  name: 'app',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
