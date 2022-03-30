<template>
  <div class="col-6 col-sm-4 col-md-4 col-lg-3">
    <div class="card_my">
      <div class="card_content position-relative">
        <!-- card front -->
        <div class="card_front">
          <img
          :src="'https://image.tmdb.org/t/p/w342' + movieFiltered.poster_path == 'https://image.tmdb.org/t/p/w342null'
          ? 'https://picsum.photos/342'
          : 'https://image.tmdb.org/t/p/w342' + movieFiltered.poster_path"
          :alt="movieFiltered.title"
          class="img-fluid"
          >
        </div>
        <!-- card back -->
        <div class="card_back position-absolute">
          <!-- title -->
          <h2 class="title">{{ movieFiltered.title }}</h2>
          <!-- language -->
          <div class="lang">
            Lingua Originale:
            <lang-flag v-show="!controlFlagsIncluded(movieFiltered.original_language)"
            :squared="false" :iso="movieFiltered.original_language" />
            <span v-show="controlFlagsIncluded(movieFiltered.original_language) ">
              {{ movieFiltered.original_language }}
            </span>
          </div>
          <!-- original title -->
          <div class="original_title" v-if="movieFiltered.original_title != movieFiltered.title">
            Titolo Originale: {{ movieFiltered.original_title }}
          </div>
          <!-- rating -->
          <div class="rating">
            Voto: {{ movieFiltered.vote_average }}
            <font-awesome-icon :icon="movieRating >= 1
              ? 'fa-solid fa-star' : 'fa-regular fa-star'" />
            <font-awesome-icon :icon="movieRating >= 2
              ? 'fa-solid fa-star' : 'fa-regular fa-star'" />
            <font-awesome-icon :icon="movieRating >= 3
              ? 'fa-solid fa-star' : 'fa-regular fa-star'" />
            <font-awesome-icon :icon="movieRating >= 4
              ? 'fa-solid fa-star' : 'fa-regular fa-star'" />
            <font-awesome-icon :icon="movieRating >= 5
              ? 'fa-solid fa-star' : 'fa-regular fa-star'" />
          </div>
        </div>
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
      arrISO631Flags: [
        'ar',
        'am',
        'az',
        'be',
        'bn',
        'bg',
        'zh',
        'ca',
        'cs',
        'en',
        'et',
        'fr',
        'de',
        'ha',
        'hi',
        'hu',
        'it',
        'ja',
        'jv',
        'km',
        'ko',
        'lv',
        'ms',
        'mr',
        'fa',
        'pl',
        'pt',
        'ro',
        'ru',
        'es',
        'sw',
        'ta',
        'te',
        'th',
        'tr',
        'uz',
        'vi',
      ],
    };
  },
  methods: {
    controlFlagsIncluded(str) {
      if (!this.arrISO631Flags.includes(str)) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style scoped lang="scss">
@import '../assets/styles/partials/card--transition.scss';
</style>
