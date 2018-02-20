<template>
  <header class="header">
    <div class="header-container">
      <div class="logo-panel left">
        <router-link :to="{ name: 'home'}" class="home__nav__logo" > <span>{{ $t('title') }}</span> </router-link>
      </div>
      <dSelect :selectionLocales="selectionLocales" :options="languageOptions" :selectController="onChangeLocale"></dSelect>

      <signInPanel></signInPanel>
      <button @click="current">Test Only</button>
    </div>
  </header>
</template>

<script>
  import i18n from '@/library/i18n'
  import signInPanel from '@/components/Header/SignInPanel/SignInPanel.vue'
  import dSelect from '@/ui/select'
  import localeMessage from './Header.i18n.js'
  let languageOptions = [
    {value: 'en-US', text: 'English'},
    {value: 'zh-CN', text: '中文'}
  ]
  var classA = {
    template: ``
  }
  var classB = {
    template: `<div>状态2</div>`
  }
  export default {
    name: 'Header',
    beforeCreate () {
      i18n(localeMessage)
    },
    data () {
      return {
        userPanel: classA,
        selectionLocales: {},
        defaultLocale: 'en-US',
        languageOptions: languageOptions
      }
    },
    components: {
      dSelect,
      signInPanel
    },
    methods: {
      current () {
        if (this.userPanel === classA) {
          this.userPanel = classB
        } else if (this.userPanel === classB) {
          this.userPanel = classA
        } else {
          this.userPanel = classA
        }
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
  .header {
    flex: 0 0 auto;
    display:    inline-block;
    top:        0.1rem;
    width:      100%;
    height:     3.5rem;
    z-index:    9999;
    background: transparentize(#FEFEFE, 0.01);
    box-shadow: 0px 4px 8px -3px rgba(17, 17, 17, .06);
  img {
    height: 4.9rem;
  }
  .header-container {
    height: 100%;
    width: 85%;
    max-width: 92.5rem;
    min-width: 62.5rem;
    margin: 0 auto;
    .logo-panel {
      margin:       0 1.5rem 0 0;
      font-size:    1.5rem;
      height: 100%;

    a {
      display: inline-block;
      color: black;
      padding-left: 52px;


      }
    }
  .language-panel {

  }
  }
}

</style>
