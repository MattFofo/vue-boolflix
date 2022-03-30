<template>
  <div class="col-6 col-sm-4 col-md-4 col-lg-3">
    <div class="card card-serie">
      <img
      :src="'https://image.tmdb.org/t/p/w342' + serieFiltered.poster_path == 'https://image.tmdb.org/t/p/w342null'
      ? 'https://picsum.photos/200/300'
      : 'https://image.tmdb.org/t/p/w342' + serieFiltered.poster_path"
      :alt="serieFiltered.title"
      class="img-fluid"
      >
      <h2>{{ serieFiltered.name }}</h2>
      <div>
        Lingua Originale:
        <lang-flag v-show="!controlFlagsIncluded(serieFiltered.original_language)"
        :squared="false" :iso="serieFiltered.original_language" />
        <span v-show="controlFlagsIncluded(serieFiltered.original_language)">
          {{ serieFiltered.original_language }}
        </span>
      </div>
      <div>
        Paese produzione:
        <flag :squared="false" style="font-size:1rem" :iso="serieFiltered.origin_country[0]" />
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

</style>
