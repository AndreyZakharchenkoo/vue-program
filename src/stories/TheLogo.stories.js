import TheLogo from './TheLogo.vue';

export default {
  component: TheLogo,
  title: 'Components/Logo',
};

const Template = (args, { argTypes }) => ({
  components: { TheLogo },
  props: Object.keys(argTypes),
  template: '<the-logo />',
});

export const Primary = Template.bind({});
Primary.args = {};
