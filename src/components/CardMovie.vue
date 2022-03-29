<template>
  <div class="card-movie">
    <img :src="'https://image.tmdb.org/t/p/w500' + movieFiltered.backdrop_path" :alt="movieFiltered.title">
    <h1>{{movieFiltered.title}}</h1>
  </div>
</template>

<script>
export default {
  name: 'CardMovie',
  props: {
    movieFiltered: Object,
  },
};
</script>

<style>

</style>
