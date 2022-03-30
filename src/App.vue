<template>
  <div id="app">
    <HeaderFlix @search-init="(strSearchFromUser) => searchQuery(strSearchFromUser)"/>
    <MainFlix
    :movies-filtered="responseMoviesFiltered"
    :series-filtered="responseSeriesFiltered"
    :missing-data="failedToRetrieveData"
    :empty-search-control="emptySearch"/>
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
      responseSeriesFiltered: null,
      responseMoviesFiltered: null,
      failedToRetrieveData: false,
      emptySearch: false,
      searched: false,
    };
  },
  methods: {
    searchQuery(strSearch) {
      this.emptySearch = false;
      this.failedToRetrieveData = false;
      this.getFilteredMovies(strSearch);
      this.getFilteredSeries(strSearch);
    },
    getFilteredMovies(str) {
      if (str !== '') {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=5c6ab89fe79676535107954e4924807b&language=it_IT&query=${str}`)
          .then((response) => { this.responseMoviesFiltered = response.data.results; })
          .catch(() => {
            this.failedToRetrieveData = true;
          });
      } else {
        this.emptySearch = true;
      }
    },
    getFilteredSeries(str) {
      if (str !== '') {
        axios.get(`https://api.themoviedb.org/3/search/tv?api_key=5c6ab89fe79676535107954e4924807b&query=${str}`)
          .then((response) => { this.responseSeriesFiltered = response.data.results; })
          .catch(() => {
            this.failedToRetrieveData = true;
          });
      } else {
        this.emptySearch = true;
      }
    },
  },
};
</script>

<style lang="scss">
  @import 'bootstrap'
</style>
