<template>
  <header class="bg-dark">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <h1 class="text-danger">BOOLFLIX</h1>
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
            <button class="btn ">CERCA</button>
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
</style>
