<template>
  <div class="col-6 col-sm-4 col-md-4 col-lg-3 py-4">
    <div class="card_my">
      <div class="card_content position-relative">
        <!-- card front -->
        <div class="card_front">
          <img
          :src="'https://image.tmdb.org/t/p/w342' + movieFiltered.poster_path == 'https://image.tmdb.org/t/p/w342null'
          ? 'https://picsum.photos/342/500'
          : 'https://image.tmdb.org/t/p/w342' + movieFiltered.poster_path"
          :alt="movieFiltered.title"
          class="img-fluid"
          >
        </div>
        <!-- card back -->
        <div class="card_back position-absolute styled-scrollbars bg-dark"
        @click="cardClicked = true" @keydown="cardClicked = !cardClicked"
        @mouseleave="cardClicked = false" @focusout="cardClicked = false"
        :class="cardClicked ? 'overflowY-auto' : 'overflowY-hidden'">
          <!-- title -->
          <h2 class="title pb-3">{{ movieFiltered.title }}</h2>
          <!-- language -->
          <div class="lang pb-2">
            <span class="lang-text fw-bold">Lingua Originale: </span>
            <lang-flag v-show="!controlFlagsIncluded(movieFiltered.original_language)"
            :squared="false" :iso="movieFiltered.original_language" />
            <span v-show="controlFlagsIncluded(movieFiltered.original_language) ">
              {{ movieFiltered.original_language }}
            </span>
          </div>
          <!-- original title -->
          <div class="original_title pb-1"
          v-if="movieFiltered.original_title != movieFiltered.title">
            <span class="fw-bold">Titolo Originale: </span>
            <span> {{ movieFiltered.original_title }} </span>
          </div>
          <!-- rating -->
          <div class="rating pb-1">
            <span class="fw-bold">Voto: </span>
            <span> {{ movieFiltered.vote_average }} </span>
            <font-awesome-icon
            :id="movieRating >= 1 ? 'gold-star1' : 'empty-star'"
            :icon="movieRating >= 1 ? 'fa-solid fa-star' : 'fa-regular fa-star'"
            />
            <font-awesome-icon
            :id="movieRating >= 2 ? 'gold-star2' : 'empty-star'"
            :icon="movieRating >= 2 ? 'fa-solid fa-star' : 'fa-regular fa-star'" />

            <font-awesome-icon
            :id="movieRating >= 3 ? 'gold-star3' : 'empty-star'"
            :icon="movieRating >= 3 ? 'fa-solid fa-star' : 'fa-regular fa-star'" />

            <font-awesome-icon
            :id="movieRating >= 4 ? 'gold-star4' : 'empty-star'"
            :icon="movieRating >= 4 ? 'fa-solid fa-star' : 'fa-regular fa-star'" />

            <font-awesome-icon
            :id="movieRating >= 5 ? 'gold-star5' : 'empty-star'"
            :icon="movieRating >= 5 ? 'fa-solid fa-star' : 'fa-regular fa-star'" />
          </div>
          <!-- overview -->
          <div class="overview">
            <span class="fw-bold">Overview: </span>
            <span>{{ movieFiltered.overview }}</span>
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
      cardClicked: false,
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
  @import '../assets/styles/partials/variables.scss';
  @import '../assets/styles/partials/card--transition.scss';
  @import '../assets/styles/partials/scrollbar--style.scss';
  @import '../assets/styles/partials/stars-rating.scss';

  .overflowY-auto {
    overflow-y: auto!important;
  }
  .overflowY-hidden {
    overflow-y: hidden!important;
  }
</style>
