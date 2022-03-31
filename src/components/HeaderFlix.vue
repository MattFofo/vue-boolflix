<template>
  <header class="bg-dark">
    <div class="container h-100">
      <div class="row h-100">
        <div class="col-6 h-100">
          <div class="h-100 d-flex align-items-center">
            <h1 class="text-danger">BOOLFLIX</h1>
          </div>
        </div>
        <div class="col-6">
          <form @submit.prevent="$emit('search-init', strSearchFromUser)" action=""
          class="h-100 d-flex justify-content-end align-items-center">
            <label for="btn-search">
              <input v-model="strSearchFromUser"
              type="text"
              name="btn-search"
              id="btn-search"
              class="me-2"
              placeholder="Inserisci un titolo...">
            </label>
            <button class="btn d-flex justify-content-center">
              <font-awesome-icon class="d-block d-sm-block d-md-none d-lg-none d-xl-none"
              icon="fa-solid fa-magnifying-glass" />
              <span class="d-none d-sm-none d-md-block d-lg-block d-xl-block text-center">
                CERCA
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderFlix',
  data() {
    return {
      strSearchFromUser: '',
    };
  },
};
</script>

<style scoped lang="scss">
  @import '../assets/styles/partials/variables';
  @import '../assets/styles/partials/button-header';
  header {
    height: $height_header;
  }
</style>
