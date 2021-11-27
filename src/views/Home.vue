<template>
  <div>
    <section class="box-search">
      <div class="container">
        <h1>FIND YOUR MOVIE</h1>
        <form class="search" @submit.prevent>
          <div class="search__input">
            <the-input placeholder="Search" v-model.trim="searchValue" @input="searchFilms" />
          </div>
          <the-button type="submit" class="large">Search</the-button>
        </form>
        <div class="sort">
          <div class="sort__label">Search by</div>
          <div class="button-group">
            <the-button class="active" @click="searchByParam('title', $event)">Title</the-button>
            <the-button @click="searchByParam('genres', $event)">Genre</the-button>
          </div>
        </div>
      </div>
    </section>
    <section class="box-gallery">
      <div class="box-gallery__top">
        <div class="container">
          <div v-if="results.length" class="quantity">{{ results.length }} movie found</div>
          <div class="sort">
            <div class="sort__label">Sort by</div>
            <div class="button-group">
              <the-button class="active" @click="sortGallery('date', $event)">Release date</the-button>
              <the-button @click="sortGallery('rating', $event)">Rating</the-button>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <h2 hidden>Films gallery</h2>
        <ul v-if="!searchValue.length" class="gallery">
          <li
            class="post__item"
            v-for="item in gallery"
            :key="item.id"
          >
            <the-card :card="item" />
          </li>
        </ul>
        <ul v-else-if="results.length" class="gallery">
          <li
            class="post__item"
            v-for="item in results"
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
import { mapState } from 'vuex'
import TheInput from '@/stories/TheInput.vue'
import TheButton from '@/stories/TheButton.vue'
import TheCard from '@/stories/TheCard.vue'
import ThePlaceholder from '@/stories/ThePlaceholder.vue'

export default {
  name: 'Home',
  components: {
    TheButton,
    TheInput,
    TheCard,
    ThePlaceholder
  },
  data: () => ({
    searchValue: '',
    searchType: 'title',
    results: '',
    sortParam: 'date'
  }),
  computed: {
    ...mapState({
      gallery: state => state.gallery
    }),
    sortedGallery () {
      const { gallery } = this

      switch (this.sortParam) {
        case 'date':
          return gallery.sort((a, b) => (a.release_date > b.release_date ? 1 : -1))
        case 'rating':
          return gallery.sort((a, b) => (a.vote_count < b.vote_count ? 1 : -1))
        default:
          return gallery
      }
    }
  },
  methods: {
    sortGallery (param, event) {
      this.sortParam = param

      const buttonsGroup = event.path[1].querySelectorAll('button')
      buttonsGroup.forEach((elem) => {
        elem.classList.remove('active')
      })
      event.target.classList.add('active')
    },
    searchByParam (param, event) {
      this.searchType = param

      const buttonsGroup = event.path[1].querySelectorAll('button')
      buttonsGroup.forEach((elem) => {
        elem.classList.remove('active')
      })
      event.target.classList.add('active')
    },
    searchFilms () {
      this.results = this.gallery.filter((item) => item[this.searchType].toString().toLowerCase()
        .includes(this.searchValue.toLowerCase()))
    }
  }
}
</script>

<style lang="scss" scoped>
.box-search {
  .search {
    margin: 40px 0 25px;
  }
}

.search {
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 1fr min-content;
}

.quantity {
  font-weight: bold;
}

.sort {
  display: flex;
  align-items: center;

  &:only-child {
    margin-left: auto;
  }

  &__label {
    margin-right: 16px;
    opacity: 0.8;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.89px;
    line-height: 19px;
    text-transform: uppercase;
  }
}
</style>
