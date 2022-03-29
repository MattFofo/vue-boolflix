<template>
  <main>
    <div v-if="emptySearchControl == true">Inserisci un titolo per la ricerca</div>
    <div v-if="missingData == true">Non sono riuscito a prendere i dati dal server</div>
    <div class="container">
      <div class="movies">
        <h2>MOVIES</h2>
        <div class="row py-5">
            <CardMovie
            :movie-filtered="movie"
            v-for="movie in moviesFiltered" :key="movie.id"/>
        </div>
      </div>
      <div class="series">
        <h2>SERIES</h2>
        <div class="row py-5">
          <CardSerie
          :serie-filtered="serie"
          v-for="serie in seriesFiltered" :key="serie.id"/>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import CardMovie from './CardMovie.vue';
import CardSerie from './CardSerie.vue';

export default {
  name: 'MainFlix',
  components: {
    CardMovie,
    CardSerie,
  },
  props: {
    moviesFiltered: Array,
    seriesFiltered: Array,
    missingData: Boolean,
    emptySearchControl: Boolean,
  },
};
</script>

<style>

</style>
