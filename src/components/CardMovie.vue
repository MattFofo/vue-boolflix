<template>
  <div class="col-6 col-sm-4 col-md-4 col-lg-3 py-4">
    <div class="card_my">
      <div class="card_content position-relative">
        <!-- card front -->
        <div
        @mouseleave="resetScrollTop()"
        @focusout="resetScrollTop()"
        class="card_front"
        >
          <!-- poster -->
          <img
          :src="'https://image.tmdb.org/t/p/w342' + movieFiltered.poster_path == 'https://image.tmdb.org/t/p/w342null'
          ? 'https://picsum.photos/342/500'
          : 'https://image.tmdb.org/t/p/w342' + movieFiltered.poster_path"
          :alt="movieFiltered.title"
          class="img-fluid"
          >
        </div>
        <!-- card back -->
        <div ref="CardBack" class="card_back position-absolute styled-scrollbars bg-dark"
        @click="cardClicked = true" @keydown="cardClicked = !cardClicked"
        @mouseleave="cardClicked = false" @focusout="cardClicked = false"
        :class="cardClicked ? 'overflow-auto' : 'overflow-hidden'"
        >
          <!-- title -->
          <h2 class="title pb-3">{{ movieFiltered.title }}</h2>
          <!-- language -->
          <div class="lang pb-2">
            <span class="lang-text fw-bold">Lingua Originale: </span>
            <!-- language flag -->
            <lang-flag v-show="!controlFlagsIncluded(movieFiltered.original_language)"
            :squared="false" :iso="movieFiltered.original_language"
            />
            <!-- control if missing flag -->
            <span v-show="controlFlagsIncluded(movieFiltered.original_language) ">
              {{ movieFiltered.original_language }}
            </span>
          </div>
          <!-- original title -->
          <div class="original_title pb-1"
          v-if="movieFiltered.original_title != movieFiltered.title"
          >
            <span class="fw-bold">Titolo Originale: </span>
            <span> {{ movieFiltered.original_title }} </span>
          </div>
          <!-- rating -->
          <div class="rating pb-1">
            <!-- dex rating -->
            <span class="fw-bold">Voto: </span>
            <span> {{ movieFiltered.vote_average }} </span>
            <!-- stars -->
            <font-awesome-icon
            v-for="i in 5" :key="i"
            :id="getStarsRating() >= i ? `gold-star${i}` : 'empty-star'"
            :icon="getStarsRating() >= i ? 'fa-solid fa-star' : 'fa-regular fa-star'"
            />
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
    resetScrollTop() {
      if (this.cardClicked === false) {
        this.$refs.CardBack.scrollTop = 0;
      }
    },
    getStarsRating() {
      if (this.movieFiltered.vote_average >= 7) {
        return Math.ceil(this.movieFiltered.vote_average * 0.5);
      }
      return Math.floor(this.movieFiltered.vote_average * 0.5);
    },
  },
};
</script>

<style scoped lang="scss">
  @import '../assets/styles/partials/variables.scss';
  @import '../assets/styles/partials/card--transition.scss';
  @import '../assets/styles/partials/scrollbar--style.scss';
  @import '../assets/styles/partials/stars-rating.scss';
</style>
