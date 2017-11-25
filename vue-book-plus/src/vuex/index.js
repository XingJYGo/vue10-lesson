import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger'
Vue.use(Vuex);

let state = {
  cartList:[]
};

export default new Vuex.Store({
  state,
  strict:true,
  plugins: [createLogger()]
})
