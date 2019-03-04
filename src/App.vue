<template>
  <div id="app">
    <Registration v-if="currentComponent === 'registration'"/>
    <Login v-if="currentComponent === 'login'"/>
    <AlreadyExists v-if="currentComponent === 'alreadyexists'"/>
    <!-- <router-link to="/registration">Go to registration</router-link> -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import Registration from './components/Registration.vue'
import Login from './components/Login.vue'
import AlreadyExists from './components/AlreadyExists'

import _ from 'lodash'

export default {
  name: 'app',
  components: {
    Registration,
    Login,
    AlreadyExists
  },
  data() {
    return {
      currentComponent: 'registration'
    }
  },
  created() {
    if(_.includes(window.location.pathname.toLowerCase(), 'oauthcallback')) {
      this.currentComponent = 'alreadyexists'
    }
    if(window.location.pathname.toLowerCase() === '/oauth/registration') {
      this.currentComponent = 'registration'
    }
    if(window.location.pathname.toLowerCase() === '/oauth/login') {
      this.currentComponent = 'login'
    } else {
      console.log('unknown pathname: ', window.location.pathname.toLowerCase())
    }
  }
}
</script>

<style lang="less">
// @import url('https://fonts.googleapis.com/css?family=PT Sans');
#app {
  // font-family: 'PT Sans', 'Avenir', Helvetica, Arial, sans-serif;
  font-family: 'PT Sans';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
