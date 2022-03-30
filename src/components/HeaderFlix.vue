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
              <input v-model="strSearchFromUser" type="text" name="btn-search" id="btn-search"
              placeholder="Inserisci un titolo...">
            </label>
            <button class="btn-light">CERCA</button>
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

<style>

</style>
