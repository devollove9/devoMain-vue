<template>
  <header class="Header">
    <div class="header-container">
      <div class="logo-panel left">
        <router-link :to="{ name: 'home'}" class="home__nav__logo" > <span>{{ $t('title') }}</span> </router-link>
      </div>
      <select class="language-panel" v-model="defaultLocale" @change="onChangeLocale( $event )" >
          <option v-for="locale in languageOptions" :value="locale.value">{{locale.text}}</option>
      </select>
    </div>
  </header>
</template>

<script>
  import i18n from '@/library/i18n'
  import localeMessage from './Header.i18n.js'
  let languageOptions = [
    {value: 'en-US', text: 'English'},
    {value: 'zh-CN', text: '中文'}
  ]

  export default {
    name: 'Header',
    beforeCreate () {
      i18n(localeMessage)
    },
    data () {
      return {
        defaultLocale: 'en-US',
        languageOptions: languageOptions
      }
    },
    components: {

    },
    methods: {
      onSignUp () {
        this.$router.push({name: 'signup'})
      },
      onSignIn () {
        this.$router.push({name: 'signin'})
      },
      onChangeLocale (event) {
        let payload = {
          target: this,
          activeLocale: event.target.value
        }
        this.$store.commit('changeLocale', payload)
      }
    },
    created () {
    }
  }
</script>

<style lang="scss">


</style>
