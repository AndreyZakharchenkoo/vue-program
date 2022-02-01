import { shallowMount } from '@vue/test-utils';
import TheButton from '@/stories/TheButton.vue';

describe('TheButton.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(TheButton, {});
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('Renders correctly', () => {
    expect(wrapper.vm.$el).toMatchSnapshot();
  });
});
