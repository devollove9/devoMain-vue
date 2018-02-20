<template>
    <div class="sign-in-panel right flex-auto">
      <span name="signUpLink" @click="onSignUp">{{ $t('sign-up') }}</span>
      <span name="signInLink" @click="onSignIn">{{ $t('sign-in') }}</span>
    </div>
</template>

<script>
  import i18n from '@/library/i18n'
  import localeMessage from './SignInPanel.i18n.js'
  export default {
    name: 'SignInPanel',
    beforeCreate () {
      i18n(localeMessage)
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js Apasdasdp'
      }
    },
    methods: {
      onSignUp () {
        this.$router.push({path: '/signup?source=header-signup'})
      },
      onSignIn () {
        this.$router.push({name: 'signin'})
      }
    }
  }
</script>


<style lang="scss">
  .sign-in-panel {
    font-size:  1.124rem;
    color:      white;
    min-width:      11rem;
    margin: 10px 0 0 0;

    span {
      padding-left: 15px;
      padding-right: 15px;
      line-height:  2.2rem;
      color:        #777777;
      margin: 0px 10px 0px 10px;
      font-weight: 600;
      cursor: pointer;
      float: left;
      border: 1px solid #5f697a;
      border-radius: 5px;
      &:hover {
         color: #5BA6CD;
         border-color: #5BA6CD;
         box-shadow: inset 0 0 0 1px #5BA6CD, inset 0 0 0 1px #5BA6CD, inset 0 0 0 1px #5BA6CD;
      }
    }
    .logged {
      height: 2.5rem;
      line-height: 2.5rem;
      span:nth-of-type(2):hover{
        color: #000;
        text-decoration: underline;
      }
      .logged-name {
        display: inline-block;
        width: 9rem;
        overflow: hidden;
      }
    }

    .sign-out {
      color: #75623A;
      font-size: 1rem;
    }
  }
</style>

