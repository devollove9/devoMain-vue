<template>
  <div
    class="signup">
    <div class="signup-container">
      <div class="signup-header">
        <h1>Join Now</h1>
        <p class="signup-header-lead">Whatever reason you doing this, do it!</p>
        <ol class="steps">
          <li class="current">
            <svg aria-hidden="true" class="stepicon stepicon-user" height="32" width="24">
              <font-awesome-icon icon="user" />
            </svg>
            <strong class="step">Step 1:</strong>
            Create personal account
          </li>
          <li>
            <svg class="stepicon stepicon-spinner" height="32" width="24">
              <font-awesome-icon icon="spinner" spin/>
            </svg>
            <strong class="step">Step 2:</strong>
            Wait for verification
          </li>
          <li>
            <svg class="stepicon stepicon-comment-alt" height="32" width="24">
              <font-awesome-icon icon="comment-alt"/>
            </svg>
            <strong class="step">Step 3:</strong>
            Leave a comment
          </li>
        </ol>
      </div>
      <div class="signup-main">
        <div class="form-container">
          <form accept-charset="UTF-8" autocomplete="off" class="signup-form" id="signup-form" @submit.prevent="signUpSubmit">
            <h2 class="h2-l">
              {{singupH2Label}}
            </h2>
            <div class="form-group compact">
              <p :class="{ 'control': true }">
                <!--div class="label-tag"><label>{{ usernameLabel }}</label></div-->
                <input v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('username') }" v-model="username" name="username" :placeHolder="usernameLabel" autocapitallize="off" autofocus="autofocus" size="30" type="text" >
                <span v-show="errors.has('username')" class="help is-danger">{{ validUsername }}</span>
              </p>
            </div>
            <div class="form-group compact">
              <input v-validate="'required|min:8'"v-model="password" :class="{'input': true, 'is-danger': errors.has('password') }" name="password" type="password" :placeHolder="passwordLabel" autocapitallize="off" autofocus="autofocus" size="30">
              <span v-show="errors.has('password')" class="help is-danger">{{ validPassword }}</span>
            </div>
            <div class="form-group compact">
              <input v-validate="'numeric'" :class="{'input': true, 'is-danger': errors.has('phone') }" v-model="phone"  name="phone" :placeHolder="phoneLabel" autocapitallize="off" autofocus="autofocus" size="30" type="text" >
              <span v-show="errors.has('phone')" class="help is-danger">{{ validPhone }}</span>
            </div>
            <div class="g-recaptcha" data-sitekey="6LcTakcUAAAAAAfRa1fV5jc5Q6oPvwFE0I4Ynqg0">
              <div style="width: 304px; height: 78px;">
                <div>
                  <iframe src="https://www.google.com/recaptcha/api2/anchor?k=6LcTakcUAAAAAAfRa1fV5jc5Q6oPvwFE0I4Ynqg0&co=aHR0cHM6Ly93d3cudjJleC5jb206NDQz&hl=zh-CN&v=v1518566665321&size=normal&cb=7flrz1b1ryia" width="304" height="78" role="presentation" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe>
                </div>
                <textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid #c1c1c1; margin: 10px 25px; padding: 0px; resize: none;  display: none; "></textarea>
              </div>
            </div>
            <span class="agreement">By clicking Continue, you agree to the <a tabindex="1" href="/terms">Terms of Service</a>, and <a tabindex="1" href="/privacy">Privacy Policy.</a></span>
            <input id="signup-continue" class="signup-continue submit-bottom" type="submit" value="Continue">
          </form>
        </div>
      </div>
    </div>
    This is SignUp view
  </div>
</template>
<script>
  import Vue from 'vue'
  import VeeValidate from 'vee-validate'
  import i18n from '@/library/i18n'
  import localeMessage from './SignUp.i18n.js'

  Vue.use(VeeValidate)

  export default {
    name: 'SignUp',
    beforeCreate () {
      i18n(localeMessage)
    },
    data () {
      return {
        lastName: '',
        firstName: '',
        username: '',
        password: '',
        phone: '',
        singupH2Label: 'Create your account !'
      }
    },
    computed: {
      usernameLabel: function () {
        return this.$t('username')
      },
      passwordLabel: function () {
        return this.$t('password')
      },
      firstNameLabel: function () {
        return this.$t('firstName')
      },
      lastNameLabel: function () {
        return this.$t('lastName')
      },
      phoneLabel: function () {
        return this.$t('phone')
      },
      validUsername: function () {
        return this.$t('valid-email')
      },
      validPassword: function () {
        return this.$t('password-length')
      },
      validPhone: function () {
        return this.$t('valid-phone')
      },
      validName: function () {
        return this.$t('valid-name')
      }
    },
    methods: {
      signUpSubmit () {
        let self = this
        let userInfo = {}
        userInfo.firstName = self.firstName
        userInfo.lastName = self.lastName
        userInfo.username = self.username
        userInfo.password = self.password
      }
    }

  }
</script>

<style lang="scss">
  .help.is-danger {
    color: #ff3860;
  }
  .help {
    display: block;
    font-size: 11px;
    margin-top: 5px;
  }
.signup{
  margin: 0 auto;
  max-width: 52.4375em;
  .signup-container{
    min-height: 520px;
    width: 100%;
    margin: 30px auto 20px auto;
    .signup-header{

      .steps{
        display: table;
        width: 100%;
        padding: 0;
        margin: 30px auto 0;
        overflow: hidden;
        list-style: none;
        border: 1px solid #dfe2e5;
        border-radius: 3px;
        box-shadow: 0 1px 3px rgba(27,31,35,0.05);
        li.current {
          color: #24292e;
          background-color: #fff;
        }
        li .step {
          display:block;
        }
        li .stepicon {
          float: left;
          margin-right: 15px;
          margin-bottom: 5px
        }
        li {
          display: table-cell;
          width: 33.3%;
          padding: 10px 15px;
          color: #c6cbd1;
          cursor: default;
          background-color: #fafbfc;
          border-left: 1px solid #dfe2e5;
        }
      }
    }
    .signup-main{

      .form-container{

        width:100%;
        .signup-form{
          width:100%;
          .form-group{
            position: relative;
            margin: 12px 0 10px;
          }
          .form-group.compact {
            margin-top: 10px;
            .label-tag {
              text-align: right;
              display: inline-block;
              width: 80px;
            }
            .input {
              height: 35px;
              max-width: 300px;
              border: 1px solid #5f697a;
              border-radius: 3px;
              padding-left: 10px;
              width: 100%;
            }
          }
        }
      }
    }
  }
}

</style>
