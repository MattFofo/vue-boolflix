<template>
  <div id="app">
    <HeaderFlix @search-init="(strSearchFromUser) => searchQuery(strSearchFromUser)"/>
    <MainFlix :movies-filtered="responseMoviesFiltered"/>
  </div>
</template>

<script>
import axios from 'axios';
import HeaderFlix from './components/HeaderFlix.vue';
import MainFlix from './components/MainFlix.vue';

export default {
  name: 'App',
  components: {
    HeaderFlix,
    MainFlix,
  },
  data() {
    return {
      responseMoviesFiltered: null,
    };
  },
  methods: {
    searchQuery(strSearch) {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=5c6ab89fe79676535107954e4924807b&query=${strSearch}`)
        .then((response) => {
          this.responseMoviesFiltered = response.data.results;
        });
    },
  },
};
</script>

<style lang="scss">

</style>
