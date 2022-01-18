import axios from 'axios';

const ApiService = {
  init() {
    axios.defaults.baseURL = 'http://react-cdp-api.herokuapp.com/';
  },

  fetchFilms() {
    return axios.get('movies');
  },

  fetchFilmById(id) {
    return axios.get(`movies/${id}`);
  },
};

export default ApiService;
