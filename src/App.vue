<template>
  <div id="app">
    <HeaderFlix />
    <MainFlix />
  </div>
</template>

<script>
import HeaderFlix from './components/HeaderFlix.vue';
import MainFlix from './components/MainFlix.vue';

export default {
  name: 'App',
  components: {
    HeaderFlix,
    MainFlix,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
