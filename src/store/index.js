import Vue from 'vue';
import Vuex from 'vuex';
import { SEARCH_PARAMS, SORT_PARAMS } from '../core/constants';
import ApiService from '../core/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchValue: '',
    searchParam: SEARCH_PARAMS.title,
    sortParam: SORT_PARAMS.date,
    currentFilm: {},
    films: [],
  },
  getters: {
    GET_FILMS: (state) => {
      const isEmptySearchValue = !state.searchValue;
      const sortByDate = (a, b) => (a.release_date < b.release_date ? 1 : -1);
      const sortByVote = (a, b) => (a.vote_average < b.vote_average ? 1 : -1);

      if (isEmptySearchValue) {
        switch (state.sortParam) {
          case SORT_PARAMS.date:
            return state.films.sort(sortByDate);
          case SORT_PARAMS.rating:
            return state.films.sort(sortByVote);
          default:
            return state.films;
        }
      }

      const searchedFilms = state.films.filter((item) => item[state.searchParam]
        .toString().toLowerCase()
        .includes(state.searchValue.toLowerCase()));

      switch (state.sortParam) {
        case SORT_PARAMS.date:
          return searchedFilms.sort(sortByDate);
        case SORT_PARAMS.rating:
          return searchedFilms.sort(sortByVote);
        default:
          return searchedFilms;
      }
    },
    GET_FILMS_BY_GENRE: (state) => (genre, id) => state.films
      .filter((item) => item.genres.includes(genre) && item.id !== id),
  },
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
    FETCH_FILMS({ commit, state }) {
      if (!state.films.length) {
        ApiService.fetchFilms()
          .then((res) => {
            commit('SET_FILMS', res.data.data);
          })
          .catch((err) => {
            throw err;
          });
      }
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
