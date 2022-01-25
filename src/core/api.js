import axios from 'axios';

const ApiService = {
  init() {
    axios.defaults.baseURL = 'http://react-cdp-api.herokuapp.com/';
  },

  fetchFilmsByParams(params) {
    let query = `movies?limit=${params.limit}`;
    if (params.searchBy) query += `&searchBy=${params.searchBy}`;
    if (params.searchVal) query += `&search=${params.searchVal}`;
    if (params.sortBy) query += `&sortBy=${params.sortBy}`;
    if (params.offset) query += `&offset=${params.offset}`;
    if (params.searchVal) {
      query += '&sortOrder=asc';
    } else {
      query += '&sortOrder=desc';
    }

    return axios.get(query);
  },

  fetchFilmById(id) {
    return axios.get(`movies/${id}`);
  },
};

export default ApiService;
