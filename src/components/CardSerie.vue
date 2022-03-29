<template>
  <div class="col-3">
    <div class="card-movie">
      <img :src="'https://image.tmdb.org/t/p/w342' + serieFiltered.poster_path"
      :alt="serieFiltered.name"
      class="img-fluid">
      <h1>{{ serieFiltered.name }}</h1>
      <div>
        Lingua Originale:
        <flag style="font-size:1rem" :iso="formattingStrLang(serieFiltered.original_language)" />
      </div>
      <div v-if="serieFiltered.original_name != serieFiltered.name">
        Titolo Originale: {{ serieFiltered.original_name }}
      </div>
      <div>
        Voto: {{ serieFiltered.vote_average }}
        <font-awesome-icon :icon="serieRating >= 1 ? 'fa-solid fa-star' : 'fa-regular fa-star'" />
        <font-awesome-icon :icon="serieRating >= 2 ? 'fa-solid fa-star' : 'fa-regular fa-star'" />
        <font-awesome-icon :icon="serieRating >= 3 ? 'fa-solid fa-star' : 'fa-regular fa-star'" />
        <font-awesome-icon :icon="serieRating >= 4 ? 'fa-solid fa-star' : 'fa-regular fa-star'" />
        <font-awesome-icon :icon="serieRating >= 5 ? 'fa-solid fa-star' : 'fa-regular fa-star'" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardSerie',
  props: {
    serieFiltered: Object,
  },
  data() {
    return {
      serieRating: this.serieFiltered.vote_average * 0.5,
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
      return this.serieFiltered.original_language;
    },
  },
};
</script>

<style scoped lang="scss">

</style>
