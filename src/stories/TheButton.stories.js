import TheButton from '../components/TheButton.vue';

export default {
  component: TheButton,
  title: 'Components/Button',
};

const Template = (args, { argTypes }) => ({
  components: { TheButton },
  props: Object.keys(argTypes),
  template: '<the-button v-bind="$props" v-on="$props">Button</the-button>',
});

export const Primary = Template.bind({});
Primary.args = {};

export const Large = Template.bind({});
Large.args = {
  isLarge: true,
};
