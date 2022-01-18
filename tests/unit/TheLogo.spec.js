import { shallowMount } from '@vue/test-utils';
import TheLogo from '@/stories/TheLogo.vue';

describe('TheLogo.vue', () => {
  it('Displays default logo text', () => {
    const wrapper = shallowMount(TheLogo, {
      stubs: ['router-link', 'router-view'],
    });
    expect(wrapper.text()).toContain('netflix');
  });
});
