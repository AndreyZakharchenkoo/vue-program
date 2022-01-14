import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchValue: '',
    searchParam: 'title',
    sortParam: 'date',
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
    GET_FILM_BY_ID: state => id => {
      return state.films.find(item => item.id === id)
    },
    GET_FILMS_BY_GENRE: state => (param, id) => {
      return state.films.filter(item => item.genres.includes(param) && item.id !== id)
    }
  },
  mutations: {
    SET_FILMS (state, payload) {
      state.films = payload
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
    FETCH_FILMS ({ commit }) {
      axios.get('http://react-cdp-api.herokuapp.com/movies')
        .then(res => {
          commit('SET_FILMS', res.data.data)
        })
        .catch((err) => {
          console.error(err)
        })
    }
  },
  modules: {}
})
