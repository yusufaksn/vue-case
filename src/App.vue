<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import router from './router/index';
export default {
  router,
  name: 'App',
  components: {

  },
  created() {
    this.redirect();
  },
  methods:{
    redirect(){
      this.$router.push({name :'homePage'})
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
