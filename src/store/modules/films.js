import ApiService from '@/core/api';
import { SEARCH_PARAMS, SORT_PARAMS } from '@/core/constants';

export default {
  state: {
    searchValue: '',
    searchParam: SEARCH_PARAMS.title,
    sortParam: SORT_PARAMS.date,
    currentFilm: {},
    films: [],
    totalFoundedFilms: 0,
    offset: 0,
  },
  getters: {},
  mutations: {
    SET_FILMS(state, payload) {
      state.films = payload;
    },
    SET_TOTAL_FOUNDED_FILMS(state, payload) {
      state.totalFoundedFilms = payload;
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
    UPDATE_OFFSET(state, payload) {
      state.offset = payload;
    },
  },
  actions: {
    FETCH_FILMS_BY_PARAMS({ commit }, params) {
      ApiService.fetchFilmsByParams(params)
        .then((res) => {
          commit('SET_FILMS', res.data.data);
          commit('SET_TOTAL_FOUNDED_FILMS', res.data.total);
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
};
