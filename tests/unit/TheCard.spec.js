import { createLocalVue, shallowMount } from '@vue/test-utils'
import TheCard from '@/stories/TheCard.vue'

/*
 * NOTE:
 * Avoiding error with custom directive
 * For correct test executing
 */

import lazyLoadImg from '@/plugins/lazy-loading.js'
const localVue = createLocalVue()
localVue.use(lazyLoadImg)

describe('ThePlaceholder.vue', () => {
  it('Check correct duration transformation', () => {
    const wrapper = shallowMount(TheCard, {
      localVue,
      stubs: ['router-link', 'router-view'],
      propsData: {
        card: {
          id: 353081,
          title: 'Mission: Impossible - Fallout',
          tagline: '',
          vote_average: 0,
          vote_count: 3,
          release_date: '2018-07-26',
          poster_path: 'https://image.tmdb.org/t/p/w500/A2W75CVz9l8gEeWhQiiftlOCkgi.jpg',
          overview: 'The sixth installment in the "Mission: Impossible". When an IMF mission ends badly, the world is faced with dire consequences. As Ethan Hunt takes it upon himself to fulfil his original briefing, the CIA begin to question his loyalty and his motives. The IMF team find themselves in a race against time, hunted by assassins while trying to prevent a global catastrophe.',
          budget: 0,
          revenue: 0,
          genres: [
            'Adventure',
            'Action',
            'Thriller'
          ],
          duration: '1h 24min',
          runtime: null
        },
        isExtended: true
      }
    })

    const duration = wrapper.get('[data-test="duration"]')

    expect(duration.text()).toBe('84 min')
  })
})
