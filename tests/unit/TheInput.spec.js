import { shallowMount } from '@vue/test-utils';
import TheInput from '@/stories/TheInput.vue';

describe('TheInput.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(TheInput, {});
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('Renders correctly', () => {
    expect(wrapper.vm.$el).toMatchSnapshot();
  });
});
