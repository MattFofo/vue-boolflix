<template>
  <div class="card-movie">
    <img :src="'https://image.tmdb.org/t/p/w342' + serieFiltered.backdrop_path" :alt="serieFiltered.name">
    <h1>{{ serieFiltered.name }}</h1>
    <flag :iso="formattingStrLang(serieFiltered.original_language)" />
    <div>Lingua Originale: {{ serieFiltered.original_language }}</div>
    <div>Titolo Originale: {{ serieFiltered.original_name }}</div>
    <div>Voto: {{ serieFiltered.vote_average }}</div>
  </div>
</template>

<script>
export default {
  name: 'CardSerie',
  props: {
    serieFiltered: Object,
  },
  methods: {
    formattingStrLang(str) {
      if (str === 'en') {
        return 'us';
      } if (str === 'ja') {
        return 'jp';
      } if (str === 'ko') {
        return 'kr';
      }
      return this.serieFiltered.original_language;
    },
  },
};
</script>

<style>

</style>
