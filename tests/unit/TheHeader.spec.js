import { shallowMount } from '@vue/test-utils';
import TheHeader from '@/components/TheHeader.vue';

describe('TheHeader.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(TheHeader, {
      stubs: ['router-link', 'router-view'],
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('Renders correctly', () => {
    expect(wrapper.vm.$el).toMatchSnapshot();
  });
});
