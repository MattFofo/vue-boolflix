<template>
  <header>
    <h1>BOOLFLIX</h1>
    <form @submit.prevent="" action="">
      <label for="btn-search">
        <input type="text" name="btn-search" id="btn-search">
      </label>
      <button>CERCA</button>
    </form>
  </header>
</template>

<script>
export default {
  name: 'HeaderFlix',
};
</script>

<style>

</style>
