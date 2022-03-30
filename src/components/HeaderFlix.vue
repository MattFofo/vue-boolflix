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
            <button class="btn btn-dark btn-outline-light">CERCA</button>
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
  // button:active {
  //   background-color: black;
  //   color: white;
  //   transition-property: background-color;
  //   transition-duration: .2s;
  //   transition-timing-function: ease-in-out;
  // }
  button {
  position: relative;
  background-color: $bg_btn_dark;
  border: none;
  color: #FFFFFF;
  text-align: center;
  -webkit-transition-duration: 0.5s; /* Safari */
  transition-duration: 0.5s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
}

button:after {
  content: "";
  background: $bg_secondary;
  display: block;
  position: absolute;
  padding-top: 300%;
  padding-left: 350%;
  margin-left: -100px!important;
  margin-top: -120%;
  opacity: 0;
  transition: all 0.9s
}

button:active:after {
  padding: 0;
  margin: 0;
  opacity: 1;
  transition: 0s
}

button:focus {
  box-shadow: none;
  background-color: $bg_btn_dark;
  color: white;
}

</style>
