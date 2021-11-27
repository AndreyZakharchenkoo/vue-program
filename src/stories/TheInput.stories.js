import TheInput from './TheInput.vue'

export default {
  component: TheInput,
  title: 'Components/Input'
}

const Template = (args, { argTypes }) => ({
  components: { TheInput },
  props: Object.keys(argTypes),
  template: '<the-input v-bind="$props" v-on="$props" />'
})

export const Primary = Template.bind({})
Primary.args = {}
