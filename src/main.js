import FlagIcon from 'vue-flag-icon';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import LangFlag from 'vue-lang-code-flags';

import Vue from 'vue';
import App from './App.vue';

library.add(farStar, fasStar);

Vue.component('lang-flag', LangFlag);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(FlagIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
