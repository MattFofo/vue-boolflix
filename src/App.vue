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
      apiUrl: 'https://api.themoviedb.org/3/',
      apiKey: '5c6ab89fe79676535107954e4924807b',
      responseSeriesFiltered: null,
      responseMoviesFiltered: null,
      failedToRetrieveData: false,
      emptySearch: false,
      searched: false,
    };
  },
  methods: {
    axiosCall(searchType, objParams) {
      axios.get(`${this.apiUrl}search/${searchType}`, {
        params: objParams,
      })
        .then((response) => {
          if (searchType === 'movie') {
            this.responseMoviesFiltered = response.data.results;
          } else {
            this.responseSeriesFiltered = response.data.results;
          }
        })
        .catch(() => {
          this.failedToRetrieveData = true;
        });
    },
    searchQuery(strSearch) {
      // this.emptySearch = false;
      // this.failedToRetrieveData = false;
      if (strSearch !== '') {
        const objParams = {
          api_key: this.apiKey,
          language: 'it-IT',
          query: strSearch,
        };
        this.axiosCall('movie', objParams);
        this.axiosCall('tv', objParams);
      } else {
        this.emptySearch = true;
      }
    },
  },
};
</script>

<style lang="scss">
  $primary: #303030;
  @import 'bootstrap'
</style>
