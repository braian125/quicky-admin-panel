import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import Http from "./modules/http";

Vue.use(Vuex);

/* export default new Vuex.Store({
  state: {
    api: axios.create({ baseURL: process.env.VUE_APP_API }),
    loading: false,
  },
  getters: {
    api: (state) => state.api,
    loading: (state) => state.loading,
  },
  mutations: {
    SET_LOADING: (state, payload) => (state.loading = payload),
  },
  actions: {
    fetch({ commit, state }, payload) {
      commit("SET_LOADING", true);
      return new Promise((res, rej) => {
        state.api
          .get(
            payload.endpoint,
            payload.params ? { params: payload.params } : {}
          )
          .then((response) => {
            res(response.data);
          })
          .catch((error) => {
            rej(error);
          })
          .then(() => {
            commit("SET_LOADING", false);
          });
      });
    },
  },
});
 */

const store = new Vuex.Store({
  modules: {
    Http,
  },
});

export default store;
