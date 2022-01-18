import ThePlaceholder from './ThePlaceholder.vue';

export default {
  component: ThePlaceholder,
  title: 'Components/Placeholder',
};

export const Default = () => ({
  components: { ThePlaceholder },
  template: '<the-placeholder title="No items found" />',
});
