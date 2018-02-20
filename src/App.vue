<template>
  <div id="app">
    <AppHeader></AppHeader>
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
  @import url('https://fonts.googleapis.com/css?family=Roboto+Sans');
  html {
    height: 100%;
  }
  body {
    margin: 0;
    flex-direction: column;
    height: 100%;
    width: 100%;
    display: flex;
    font-family: 'Roboto', sans-serif;
  }
  body a {
    text-decoration: none;
  }
  #app {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;

    width:100%;
    display: block;
  }
  .wrapper{
    flex: 1 0 auto;
    padding-top: 0.2rem;
    height: 100%;
    width: 99%;
    margin: auto;
    min-height: 60rem;
    margin-bottom: 8rem;

  }
  .fade-enter-active, .fade-leave-active {
    transition-property: opacity;
    transition-duration: .15s;
  }

  .fade-enter-active {
    transition-delay: .15s;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  .left {
    float: left!important;
  }
  .right {
    float: right!important;
  }
</style>
