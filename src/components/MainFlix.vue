<template>
  <main>Main
    <CardMovie :movie-filtered="movie"
    v-for="movie in moviesFiltered" :key="movie.id"/>
  </main>
</template>

<script>
import CardMovie from './CardMovie.vue';

export default {
  name: 'MainFlix',
  components: {
    CardMovie,
  },
  props: {
    moviesFiltered: Array,
  },
};
</script>

<style>

</style>
