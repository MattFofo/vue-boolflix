<template>
  <main class="bg-primary"
  :class="moviesFiltered == null || seriesFiltered == null ? 'vh-100' : 'h-100' ">
    <div class="alert-miss-search-input d-flex justify-content-center align-items-center"
    :class="emptySearchControl == true || moviesFiltered == null ? 'visible' : 'invisible height0'">
      Inserisci un titolo per la ricerca
    </div>
    <div v-if="missingData == true">Non sono riuscito a prendere i dati dal server</div>
    <div class="container">
      <div class="movies">
        <h2 v-show="moviesFiltered != null" class="text-white">MOVIES</h2>
        <div v-if="moviesFiltered == ''">nessun risultato</div>
        <div class="row py-5">
            <CardMovie
            :movie-filtered="movie"
            v-for="movie in moviesFiltered" :key="movie.id"/>
        </div>
      </div>
      <div class="series">
        <h2 v-show="seriesFiltered != null" class="text-white">SERIES</h2>
        <div v-if="seriesFiltered == ''">nessun risultato</div>
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

<style scoped lang="scss">
  .alert-miss-search-input {
    height: 3rem;
    background-color: lightblue;
    transition-property: height, visibility;
    transition-duration: .5s;
    transition-timing-function: ease-in-out;
  }
  .height0 {
    height: 0;
  }

</style>
