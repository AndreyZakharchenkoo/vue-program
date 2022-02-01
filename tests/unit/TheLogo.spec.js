import { shallowMount } from '@vue/test-utils';
import TheLogo from '@/stories/TheLogo.vue';

describe('TheLogo.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(TheLogo, {
      stubs: ['router-link', 'router-view'],
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('Displays default logo text', () => {
    expect(wrapper.text()).toContain('netflix');
  });

  it('Renders correctly', () => {
    expect(wrapper.vm.$el).toMatchSnapshot();
  });
});
