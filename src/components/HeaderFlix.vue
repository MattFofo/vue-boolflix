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
  // button:active {
  //   background-color: black;
  //   color: white;
  //   transition-property: background-color;
  //   transition-duration: .2s;
  //   transition-timing-function: ease-in-out;
  // }
  button {
  position: relative;
  background-color: #04AA6D;
  border: none;
  color: #FFFFFF;
  text-align: center;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
}

button:after {
  content: "";
  background: #90EE90;
  display: block;
  position: absolute;
  padding-top: 300%;
  padding-left: 350%;
  margin-left: -20px!important;
  margin-top: -120%;
  opacity: 0;
  transition: all 0.8s
}

button:active:after {
  padding: 0;
  margin: 0;
  opacity: 1;
  transition: 0s
}
</style>
