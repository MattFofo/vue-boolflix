<template>
  <main>
    <div v-if="emptySearchControl == true">Inserisci un titolo per la ricerca</div>
    <div v-if="missingData == true">Non sono riuscito a prendere i dati dal server</div>
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
    missingData: Boolean,
    emptySearchControl: Boolean,
  },
};
</script>

<style>

</style>
