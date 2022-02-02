import { createLocalVue, shallowMount } from '@vue/test-utils';
import TheCard from '@/components/TheCard.vue';

/*
 * NOTE:
 * Avoiding error with custom directive
 * For correct test executing
 */

import lazyLoadImg from '@/plugins/lazy-loading';

const localVue = createLocalVue();
localVue.use(lazyLoadImg);

describe('ThePlaceholder.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(TheCard, {
      localVue,
      stubs: ['router-link', 'router-view'],
      propsData: {
        card: {
          budget: 55000000,
          genres: ['Drama', 'Romance'],
          id: 337167,
          overview: 'Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.',
          poster_path: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
          release_date: '2018-02-07',
          revenue: 136906000,
          runtime: 106,
          tagline: "Don't miss the climax",
          title: 'Fifty Shades Freed',
          vote_average: 6.1,
          vote_count: 1195,
        },
        isExtended: true,
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  describe('Props properties', () => {
    it('"isExtended === true" should display description and hide link', async () => {
      await wrapper.setProps({ isExtended: true });

      expect(wrapper.find('.card__link').exists()).toBe(false);
      expect(wrapper.find('.card__description').exists()).toBe(true);
    });

    it('"isExtended === false" should hide description and show link', async () => {
      await wrapper.setProps({ isExtended: false });

      expect(wrapper.find('.card__link').exists()).toBe(true);
      expect(wrapper.find('.card__description').exists()).toBe(false);
    });
  });

  describe('Computed properties', () => {
    it('"genre" should return correct value', () => {
      const genre = wrapper.get('.card__genre');
      expect(genre.text()).toBe('Drama');
    });

    it('"year" should return correct value', () => {
      const year = wrapper.get('.card__year');
      expect(year.text()).toBe('2018');
    });

    it('"duration" should transform to correct value', () => {
      const duration = wrapper.get('[data-aqa="duration"]');
      expect(duration.text()).toBe('1h 46min');
    });
  });
});
