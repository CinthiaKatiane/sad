<template>
    <v-app>
      <Header/>
      <router-view></router-view>
    </v-app>
</template>

<script>
import Header from "./components/sharedComponents/header"
export default {
  name: 'app',
  components:{
    Header
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
