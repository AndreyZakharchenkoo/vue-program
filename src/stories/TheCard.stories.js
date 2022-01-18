import TheCard from './TheCard.vue';

export default {
  component: TheCard,
  title: 'Components/Card',
};

const Template = (args, { argTypes }) => ({
  components: { TheCard },
  props: Object.keys(argTypes),
  template: '<the-card v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  card: {
    id: 353081,
    title: 'Mission: Impossible - Fallout',
    tagline: '',
    vote_average: 0,
    vote_count: 3,
    release_date: '2018-07-26',
    poster_path: 'https://image.tmdb.org/t/p/w500/A2W75CVz9l8gEeWhQiiftlOCkgi.jpg',
    overview: 'The sixth installment in the "Mission: Impossible". When an IMF mission ends badly, the world is faced with dire consequences. As Ethan Hunt takes it upon himself to fulfil his original briefing, the CIA begin to question his loyalty and his motives. The IMF team find themselves in a race against time, hunted by assassins while trying to prevent a global catastrophe.',
    budget: 0,
    revenue: 0,
    genres: [
      'Adventure',
      'Action',
      'Thriller',
    ],
    runtime: null,
  },
};

export const Extended = Template.bind({});
Extended.args = {
  card: {
    id: 353081,
    title: 'Mission: Impossible - Fallout',
    tagline: '',
    vote_average: 0,
    vote_count: 3,
    release_date: '2018-07-26',
    poster_path: 'https://image.tmdb.org/t/p/w500/A2W75CVz9l8gEeWhQiiftlOCkgi.jpg',
    overview: 'The sixth installment in the "Mission: Impossible". When an IMF mission ends badly, the world is faced with dire consequences. As Ethan Hunt takes it upon himself to fulfil his original briefing, the CIA begin to question his loyalty and his motives. The IMF team find themselves in a race against time, hunted by assassins while trying to prevent a global catastrophe.',
    budget: 0,
    revenue: 0,
    genres: [
      'Adventure',
      'Action',
      'Thriller',
    ],
    runtime: null,
  },
  isExtended: true,
};
