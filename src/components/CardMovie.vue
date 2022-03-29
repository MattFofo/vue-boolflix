<template>
  <div class="col-3">
    <div class="card-movie">
      <img :src="'https://image.tmdb.org/t/p/w342' + movieFiltered.poster_path"
      :alt="movieFiltered.title"
      class="img-fluid">
      <h3>{{ movieFiltered.title }}</h3>
      <div>
        Lingua Originale:
        <flag style="font-size:1rem" :iso="formattingStrLang(movieFiltered.original_language)" />
      </div>
      <div v-if="movieFiltered.original_title != movieFiltered.title">
        Titolo Originale: {{ movieFiltered.original_title }}
      </div>
      <div>
        Voto: {{ movieFiltered.vote_average }}
        <font-awesome-icon :icon="movieRating >= 1 ? 'fa-solid fa-star' : 'fa-regular fa-star'" />
        <font-awesome-icon :icon="movieRating >= 2 ? 'fa-solid fa-star' : 'fa-regular fa-star'" />
        <font-awesome-icon :icon="movieRating >= 3 ? 'fa-solid fa-star' : 'fa-regular fa-star'" />
        <font-awesome-icon :icon="movieRating >= 4 ? 'fa-solid fa-star' : 'fa-regular fa-star'" />
        <font-awesome-icon :icon="movieRating >= 5 ? 'fa-solid fa-star' : 'fa-regular fa-star'" />
      </div>
    </div>
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
      movieRating: this.movieFiltered.vote_average * 0.5,
    };
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

</style>
