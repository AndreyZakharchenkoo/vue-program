import { shallowMount } from '@vue/test-utils'
import ThePlaceholder from '@/stories/ThePlaceholder.vue'

describe('ThePlaceholder.vue', () => {
  it('Displays default placeholder', () => {
    const text = 'default placeholder'
    const wrapper = shallowMount(ThePlaceholder, {
      propsData: {
        title: text
      }
    })
    expect(wrapper.props().title).toBe(text)
  })
})
