<template>
  <div id="app">
    <Registration v-if="currentComponent === 'registration'"/>
    <Login v-if="currentComponent === 'login'"/>
    <AlreadyExists v-if="currentComponent === 'alreadyexists'"/>
    <RegistrationComplete v-if="currentComponent === 'registrationcomplete'"/>
    <PasswordRecovery v-if="currentComponent === 'passwordrecovery'"/>
    <!-- <router-link to="/registration">Go to registration</router-link> -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import Registration from './components/Registration.vue'
import Login from './components/Login.vue'
import AlreadyExists from './components/AlreadyExists'
import RegistrationComplete from './components/RegistrationComplete'
import PasswordRecovery from './components/PasswordRecovery'

import _ from 'lodash'

export default {
  name: 'app',
  components: {
    Registration,
    Login,
    AlreadyExists,
    RegistrationComplete,
    PasswordRecovery
  },
  data() {
    return {
      currentComponent: 'registration'
    }
  },
  created() {
    if(window.location.pathname.toLowerCase() === '/oauth/passwordrecovery') {
      this.currentComponent = 'passwordrecovery'
    }
    if(window.location.pathname.toLowerCase() === '/oauth/phonenumberforimportantnotificationsfromclients') {
      this.currentComponent = 'registrationcomplete'
    }
    if(_.includes(window.location.pathname.toLowerCase(), 'oauthcallback')) {
      this.currentComponent = 'alreadyexists'
    }
    if(window.location.pathname.toLowerCase() === '/oauth/registration') {
      this.currentComponent = 'registration'
    }
    if(window.location.pathname.toLowerCase() === '/oauth/login') {
      this.currentComponent = 'login'
    } else {
      // console.log('unknown pathname: ', window.location.pathname.toLowerCase())
    }
  }
}
</script>

<style lang="less">
// @import url('https://fonts.googleapis.com/css?family=PT Sans');
#app {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 100vh;
  // font-family: 'PT Sans', 'Avenir', Helvetica, Arial, sans-serif;
  font-family: 'PT Sans';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f5f5f5;
  margin-top: 60px;
  @media screen and (max-width: 469px) {
    margin-top: 18px;
  }
}
</style>
