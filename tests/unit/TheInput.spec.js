import { shallowMount } from '@vue/test-utils';
import TheInput from '@/components/TheInput.vue';

describe('TheInput.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(TheInput, {});
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('Should display value after typing', async () => {
    const input = wrapper.find('input');
    expect(input.exists()).toBe(true);

    await input.setValue('Fifty');
    expect(input.element.value).toBe('Fifty');
  });
});
