import { shallowMount } from '@vue/test-utils';
import ThePlaceholder from '@/components/ThePlaceholder.vue';

describe('ThePlaceholder.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ThePlaceholder, {});
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('Should displays default placeholder', () => {
    expect(wrapper.props().title).toBe('No items found');
  });

  it('Should displays title from props', async () => {
    await wrapper.setProps({ title: 'Default placeholder' });
    expect(wrapper.props().title).toBe('Default placeholder');
  });
});
