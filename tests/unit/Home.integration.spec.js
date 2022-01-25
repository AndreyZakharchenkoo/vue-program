import { createLocalVue, shallowMount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import state from '@/store';
import filmsData from './mock-data/filmsData.json';
import lazyLoadImg from '@/plugins/lazy-loading';
import Home from '@/views/Home.vue';

global.fetch = require('jest-fetch-mock');

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(lazyLoadImg);
localVue.use(Vuex);

describe('Home.vue', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = new Vuex.Store(
      state,
    );

    wrapper = shallowMount(Home, {
      localVue,
      store,
      stubs: ['router-link', 'router-view'],
    });

    fetch.resetMocks();
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('Action "FETCH_FILMS_BY_PARAMS" executes after component was mounted', async () => {
    fetch.once(JSON.stringify(filmsData));

    expect(fetch).toBeCalledWith('http://react-cdp-api.herokuapp.com/movies?limit=9&searchBy=title&sortBy=release_date&sortOrder=desc');
  });
});
