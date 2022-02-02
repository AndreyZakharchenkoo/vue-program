import { createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import lazyLoadImg from '@/plugins/lazy-loading';
import Film from '@/pages/film.vue';

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(lazyLoadImg);
localVue.use(Vuex);

describe('Film.vue', () => {
  let wrapper;
  let store;
  let state;
  let actions;
  const fetchFilmByIdMock = jest.fn();
  const fetchFilmsByParamsMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    // router
    const router = new VueRouter({
      routes: [
        {
          path: '/film/:id',
          name: 'Film',
          component: Film,
        },
      ],
    });
    router.push('http://localhost:8080/film/412302');

    // store
    actions = {
      FETCH_FILM_BY_ID: fetchFilmByIdMock,
      FETCH_FILMS_BY_PARAMS: fetchFilmsByParamsMock,
    };
    state = {
      currentFilm: {
        id: 412302, title: 'Gemini', tagline: '', vote_average: 10, vote_count: 3, release_date: '2018-03-30', poster_path: 'https://image.tmdb.org/t/p/w500/oIltQs7MPk7VQFG3DJfgC63mShU.jpg', overview: 'A heinous crime tests the complex relationship between a tenacious personal assistant and her Hollywood starlet boss. As the assistant travels across Los Angeles to unravel the mystery, she must stay one step ahead of a determined policeman and confront her own understanding of friendship, truth and celebrity.', budget: 0, revenue: 0, genres: ['Mystery', 'Thriller'], runtime: 92,
      },
      films: [
        {
          id: 198663, title: 'The Maze Runner', tagline: 'Remember. Survive. Run.', vote_average: 7, vote_count: 7502, release_date: '2014-09-10', poster_path: 'https://image.tmdb.org/t/p/w500/coss7RgL0NH6g4fC2s5atvf3dFO.jpg', overview: "Set in a post-apocalyptic world, young Thomas is deposited in a community of boys after his memory is erased, soon learning they're all trapped in a maze that will require him to join forces with fellow “runners” for a shot at escape.", budget: 34000000, revenue: 348300000, genres: ['Action', 'Mystery', 'Science Fiction', 'Thriller'], runtime: 113,
        },
        {
          id: 335984, title: 'Blade Runner 2049', tagline: "There's still a page left.", vote_average: 7.3, vote_count: 3955, release_date: '2017-10-04', poster_path: 'https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg', overview: "Thirty years after the events of the first film, a new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. K's discovery leads him on a quest to find Rick Deckard, a former LAPD blade runner who has been missing for 30 years.", budget: 150000000, revenue: 259239658, genres: ['Mystery', 'Science Fiction', 'Thriller'], runtime: 163,
        },
      ],
    };
    store = new Vuex.Store({
      modules: {
        films: {
          state,
          actions,
        },
      },
    });

    wrapper = mount(Film, {
      localVue,
      store,
      router,
      stubs: ['router-link', 'router-view'],
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('Snapshot', () => {
    expect(wrapper.vm.$el).toMatchSnapshot();
  });

  it('Should display films in gallery from store', () => {
    expect(wrapper.text()).toContain('The Maze Runner');
  });

  describe('Computed properties', () => {
    it('"currentGenre" should return correct value', () => {
      const genre = wrapper.get('.box-gallery__top h2');
      expect(genre.text()).toContain('Mystery');
    });
  });

  describe('Action methods', () => {
    it('Should executes action "FETCH_FILM_BY_ID" after rendering', () => {
      expect(actions.FETCH_FILM_BY_ID).toHaveBeenCalled();
    });
  });
});
