<template>
  <div class="col-3">
    <div class="card-movie">
      <img :src="'https://image.tmdb.org/t/p/w342' + movieFiltered.poster_path"
      :alt="movieFiltered.title"
      class="img-fluid">
      <h3>{{ movieFiltered.title }}</h3>
      <flag :iso="formattingStrLang(movieFiltered.original_language)" />
      <div>Lingua Originale: {{ movieFiltered.original_language }}</div>
      <div v-if="movieFiltered.original_title != movieFiltered.title">
        Titolo Originale: {{ movieFiltered.original_title }}
      </div>
      <div>Voto: {{ movieFiltered.vote_average }}</div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'CardMovie',
  props: {
    movieFiltered: Object,
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
      return this.movieFiltered.original_language;
    },
  },
};
</script>

<style scoped lang="scss">
  .card-movie {
    height: 400px;
  }
</style>
