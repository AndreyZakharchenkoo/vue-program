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
        <ul class="gallery">
          <li
            class="post__item"
            v-for="item in sortedFilmsByParam"
            :key="item.id"
          >
            <the-card :card="item" />
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import TheCard from '@/stories/TheCard.vue';

export default {
  name: 'Film',
  components: {
    TheCard,
  },
  async mounted() {
    await this.FETCH_FILM_BY_ID(this.id)
      .then(() => {})
      .catch((err) => {
        console.error(err);
      });

    await this.FETCH_FILMS()
      .then(() => {})
      .catch((err) => {
        console.error(err);
      });
  },
  computed: {
    ...mapState([
      'currentFilm',
    ]),
    id() {
      return +this.$route.params.id;
    },
    currentGenre() {
      const genres = this.currentFilm?.genres || [];
      return genres[0];
    },
    sortedFilmsByParam() {
      return this.$store.getters.GET_FILMS_BY_GENRE(this.currentGenre, this.id);
    },
  },
  methods: {
    ...mapActions([
      'FETCH_FILMS',
      'FETCH_FILM_BY_ID',
    ]),
  },
};
</script>

<style lang="scss" scoped>
.box-gallery__top .container {
  justify-content: flex-start;
  font-weight: bold;
}
</style>
