<template>
  <header>
    <h1>BOOLFLIX</h1>
    <form @submit.prevent="$emit('search-init', strSearchFromUser)" action="">
      <label for="btn-search">
        <input v-model="strSearchFromUser" type="text" name="btn-search" id="btn-search">
      </label>
      <button>CERCA</button>
    </form>
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
