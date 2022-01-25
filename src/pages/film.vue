<template>
  <div>
    <section class="box-info">
      <div class="container">
        <the-card
          v-if="currentFilm"
          :card="currentFilm"
          is-extended
        />
      </div>
    </section>
    <section class="box-gallery">
      <div class="box-gallery__top">
        <div class="container">
          <h2>Films by {{ currentGenre }} genre</h2>
        </div>
      </div>
      <div class="container">
        <h2 hidden>Films gallery</h2>
        <ul
          v-if="films.length"
          class="gallery"
        >
          <li
            class="post__item"
            v-for="item in films"
            :key="item.id"
          >
            <the-card :card="item" />
          </li>
        </ul>
        <the-placeholder
          v-else
          title="No films found"
        />
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { SEARCH_PARAMS } from '../core/constants';
import TheCard from '@/stories/TheCard.vue';
import ThePlaceholder from '@/stories/ThePlaceholder.vue';

export default {
  name: 'Film',
  components: {
    TheCard,
    ThePlaceholder,
  },
  async mounted() {
    await this.FETCH_FILM_BY_ID(this.id)
      .then(() => {})
      .catch((err) => {
        console.error(err);
      });
  },
  props: ['id'],
  computed: {
    ...mapState({
      currentFilm: (state) => state.films.currentFilm,
      films: (state) => state.films.films,
    }),
    currentGenre() {
      const genres = this.currentFilm.genres || [];
      return genres[0];
    },
  },
  watch: {
    currentGenre() {
      this.fetchFilmsByParams();
    },
  },
  methods: {
    ...mapActions([
      'FETCH_FILM_BY_ID',
      'FETCH_FILMS_BY_PARAMS',
    ]),
    fetchFilmsByParams() {
      this.FETCH_FILMS_BY_PARAMS({
        limit: 9,
        searchBy: SEARCH_PARAMS.genres,
        searchVal: this.currentGenre,
      })
        .then(() => {})
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.box-gallery__top .container {
  justify-content: flex-start;
  font-weight: bold;
}
</style>
