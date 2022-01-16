import Vue from 'vue'
import Vuex from 'vuex'
import ApiService from '../core/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchValue: '',
    searchParam: 'title',
    sortParam: 'date',
    currentFilm: {},
    films: []
  },
  getters: {
    GET_FILMS: state => {
      if (!state.searchValue) {
        switch (state.sortParam) {
          case 'date':
            return state.films.sort((a, b) => (a.release_date > b.release_date ? 1 : -1))
          case 'rating':
            return state.films.sort((a, b) => (a.vote_count < b.vote_count ? 1 : -1))
          default:
            return state.films
        }
      }

      const searchedFilms = state.films.filter(item => item[state.searchParam].toString().toLowerCase()
        .includes(state.searchValue.toLowerCase()))

      switch (state.sortParam) {
        case 'date':
          return searchedFilms.sort((a, b) => (a.release_date > b.release_date ? 1 : -1))
        case 'rating':
          return searchedFilms.sort((a, b) => (a.vote_count < b.vote_count ? 1 : -1))
        default:
          return searchedFilms
      }
    },
    GET_FILMS_BY_GENRE: state => (genre, id) => {
      return state.films.filter(item => item.genres.includes(genre) && item.id !== id)
    }
  },
  mutations: {
    SET_FILMS (state, payload) {
      state.films = payload
    },
    SET_CURRENT_FILM (state, payload) {
      state.currentFilm = payload
    },
    UPDATE_SEARCH_VALUE (state, payload) {
      state.searchValue = payload
    },
    UPDATE_SEARCH_PARAM (state, payload) {
      state.searchParam = payload
    },
    UPDATE_SORT_PARAM (state, payload) {
      state.sortParam = payload
    }
  },
  actions: {
    FETCH_FILMS ({ commit, state }) {
      if (!state.films.length) {
        ApiService.fetchFilms()
          .then(res => {
            commit('SET_FILMS', res.data.data)
          })
          .catch((err) => {
            throw err
          })
      }
    },
    FETCH_FILM_BY_ID ({ commit }, id) {
      ApiService.fetchFilmById(id)
        .then(res => {
          commit('SET_CURRENT_FILM', res.data)
        })
        .catch((err) => {
          throw err
        })
    }
  },
  modules: {}
})
