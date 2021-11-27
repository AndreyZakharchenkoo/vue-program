<template>
  <div>
    <section class="box-info">
      <div class="container">
        <the-card
          :card="filmById"
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
            v-for="item in sortedFilmsByGenre"
            :key="item.id"
          >
            <the-card :card="item"/>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TheCard from '@/stories/TheCard.vue'

export default {
  name: 'Film',
  components: {
    TheCard
  },
  computed: {
    ...mapState({
      gallery: state => state.gallery
    }),
    sortedFilmsByGenre () {
      return this.$store.getters.GET_FILMS_BY_GENRE(this.currentGenre)
    },
    filmById () {
      const id = this.$route.params.id
      return this.gallery.find(item => item.id === id)
    },
    currentGenre () {
      return this.filmById.genres[0]
    }
  }
}
</script>

<style lang="scss" scoped>
.box-gallery__top .container {
  justify-content: flex-start;
  font-weight: bold;
}
</style>
