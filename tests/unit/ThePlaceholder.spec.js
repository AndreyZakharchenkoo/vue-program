import { shallowMount } from '@vue/test-utils';
import ThePlaceholder from '@/stories/ThePlaceholder.vue';

describe('ThePlaceholder.vue', () => {
  let wrapper;

  beforeEach(() => {
    const text = 'default placeholder';
    wrapper = shallowMount(ThePlaceholder, {
      propsData: {
        title: text,
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('Displays default placeholder', () => {
    expect(wrapper.props().title).toBe('default placeholder');
  });

  it('Renders correctly', () => {
    expect(wrapper.vm.$el).toMatchSnapshot();
  });
});
