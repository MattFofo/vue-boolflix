<template>
  <div class="card-movie">
    <img :src="'https://image.tmdb.org/t/p/w500' + movieFiltered.backdrop_path" :alt="movieFiltered.title">
    <h1>{{ movieFiltered.title }}</h1>
    <flag :iso="formattingStrLang(movieFiltered.original_language)" />
    <div>Lingua Originale: {{ movieFiltered.original_language }}</div>
    <div>Titolo Originale: {{ movieFiltered.original_title }}</div>
    <div>Voto: {{ movieFiltered.vote_average }}</div>
  </div>
</template>

<script>
export default {
  name: 'CardMovie',
  props: {
    movieFiltered: Object,
  },
  data() {
    return {
      movieLang: '',
    };
  },
  methods: {
    formattingStrLang(str) {
      if (str === 'en') {
        return 'us';
      } if (str === 'ja') {
        return 'jp';
      }
      return this.movieFiltered.original_language;
    },
  },
};
</script>

<style>

</style>
switch (str) {
  case str === 'en':
    return 'us';
    [break;]
  case str === 'ja':
    return 'jp';
    [break;]
