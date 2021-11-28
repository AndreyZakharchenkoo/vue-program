<template>
  <div>
    <section class="box-info">
      <div class="container">
        <the-card
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
import TheCard from '@/stories/TheCard.vue'

export default {
  name: 'Film',
  components: {
    TheCard
  },
  mounted () {
    const id = this.$route.params.id

    this.currentFilm = this.$store.getters.GET_FILM_BY_ID(id)
    this.currentGenre = this.currentFilm.genres[0]
    this.sortedFilmsByParam = this.$store.getters.GET_FILMS_BY_PARAM(this.currentGenre)
  },
  data: () => ({
    sortedFilmsByParam: [],
    currentFilm: {},
    currentGenre: ''
  })
}
</script>

<style lang="scss" scoped>
.box-gallery__top .container {
  justify-content: flex-start;
  font-weight: bold;
}
</style>
