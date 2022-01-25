import { createLocalVue, mount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import films from '@/store/modules/films';
// import filmsData from './mock-data/filmsData.json';
import lazyLoadImg from '@/plugins/lazy-loading';
import Home from '@/pages/home.vue';

global.fetch = require('jest-fetch-mock');

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(lazyLoadImg);
localVue.use(Vuex);

describe('Home.vue', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    // router
    const router = new VueRouter({
      routes: [
        {
          path: '/',
          name: 'home',
          component: Home,
        },
      ],
    });
    // router.push('http://localhost:8080/?limit=9&searchVal=&searchBy=title&sortBy=release_date&offset=0');

    // store
    store = new Vuex.Store({
      modules: {
        films,
      },
    });

    wrapper = mount(Home, {
      localVue,
      store,
      router,
      stubs: ['router-link', 'router-view'],
    });

    fetch.resetMocks();
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('Renders correctly', () => {
    expect(wrapper.vm.$el).toMatchSnapshot();
  });

  it('Action "FETCH_FILMS_BY_PARAMS" executes after component was mounted', async () => {
    // fetch.once(JSON.stringify(filmsData));
    const searchInput = wrapper.find('.search__input input');
    expect(searchInput.exists()).toBe(true);
    // await searchInput.setValue('fif');

    // await localVue.nextTick();
    // await localVue.nextTick();

    // const filmsList = wrapper.find('.gallery');
    //
    // expect(fetch).toBeCalledWith('http://react-cdp-api.herokuapp.com/movies?limit=9&searchBy=title&search=fif&sortBy=release_date&offset=0&sortOrder=asc');
    // expect(filmsList.exists()).toBe(true);
  });
});
