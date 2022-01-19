import Vue from 'vue';
import Vuex from 'vuex';
import ApiService from '../core/api';
import { SEARCH_PARAMS, SORT_PARAMS } from '../core/constants';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchValue: '',
    searchParam: SEARCH_PARAMS.title,
    sortParam: SORT_PARAMS.date,
    currentFilm: {},
    films: [],
  },
  getters: {},
  mutations: {
    SET_FILMS(state, payload) {
      state.films = payload;
    },
    SET_CURRENT_FILM(state, payload) {
      state.currentFilm = payload;
    },
    UPDATE_SEARCH_VALUE(state, payload) {
      state.searchValue = payload;
    },
    UPDATE_SEARCH_PARAM(state, payload) {
      state.searchParam = payload;
    },
    UPDATE_SORT_PARAM(state, payload) {
      state.sortParam = payload;
    },
  },
  actions: {
    FETCH_FILMS_BY_PARAMS({ commit }, params) {
      ApiService.fetchFilmsByParams(params)
        .then((res) => {
          commit('SET_FILMS', res.data.data);
        })
        .catch((err) => {
          throw err;
        });
    },
    FETCH_FILM_BY_ID({ commit }, id) {
      ApiService.fetchFilmById(id)
        .then((res) => {
          commit('SET_CURRENT_FILM', res.data);
        })
        .catch((err) => {
          throw err;
        });
    },
  },
  modules: {},
});
