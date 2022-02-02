import { createLocalVue, mount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import axios from 'axios';
import FilmsModule from '@/store/modules/films';
import films from '../data/films.json';
import lazyLoadImg from '@/plugins/lazy-loading';
import Home from '@/pages/home.vue';

jest.mock('axios');

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(lazyLoadImg);
localVue.use(Vuex);

describe('Home.vue', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    jest.clearAllMocks();

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

    // store
    store = new Vuex.Store({
      modules: {
        films: FilmsModule,
      },
    });

    wrapper = mount(Home, {
      localVue,
      store,
      router,
      stubs: ['router-link', 'router-view'],
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('Action "FETCH_FILMS_BY_PARAMS" executes after component was mounted', () => {
    axios.get.mockResolvedValue(films);
    expect(axios.get).toBeCalledWith('movies?limit=9&searchBy=title&sortBy=release_date&sortOrder=desc');
  });
});
