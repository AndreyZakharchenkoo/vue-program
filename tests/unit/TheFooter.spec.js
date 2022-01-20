import { shallowMount } from '@vue/test-utils';
import TheFooter from '@/components/TheFooter.vue';

describe('TheFooter.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(TheFooter, {});
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('Renders correctly', () => {
    expect(wrapper.vm.$el).toMatchSnapshot();
  });
});
