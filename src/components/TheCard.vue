<template>
  <div
    class="card"
    :class="{ extended: isExtended }"
  >
    <router-link
      v-if="!isExtended"
      class="card__link"
      :to="{ name: 'Film', params: { id: card.id }  }"
      @click.native="scrollToTop"
    />
    <picture class="card__img">
      <img
        v-lazyload
        width="327"
        height="590"
        :data-src="card.poster_path"
        :alt="card.title"
        :key="card.poster_path"
      >
    </picture>
    <div class="card__info">
      <h3 class="card__name">{{ card.title }}</h3>
      <p class="card__genre">{{ genre }}</p>
      <div class="card__year">{{ year }}</div>
      <template v-if="isExtended">
        <div v-if="card.vote_average" class="card__rating">{{ card.vote_average }}</div>
        <div v-if="card.runtime" class="card__duration" data-aqa="duration">{{ duration }}</div>
        <div class="card__description">{{ card.overview }}</div>
      </template>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TheCard',
  props: {
    card: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    isExtended: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    genre() {
      const genres = this.card?.genres || [];
      return genres[0];
    },
    year() {
      const year = this.card.release_date || '';
      return year.split('-')[0];
    },
    duration() {
      return `${Math.trunc(this.card.runtime / 60)}h ${this.card.runtime % 60}min`;
    },
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style scoped>
.card {
  position: relative;
}

.card__img {
  display: block;
  background: url('https://www.lyon-ortho-clinic.com/files/cto_layout/img/placeholder/book.jpg') no-repeat center center;
  background-size: cover;
}

.card__img.loaded img {
  transition: 1s;
  opacity: 1;
}

.card img {
  width: 100%;
  height: auto;
  aspect-ratio: 0.6666666667;
  object-position: center center;
  object-fit: cover;
  opacity: 0;
}

.card__info {
  display: grid;
  margin-top: 20px;
  grid-gap: 5px;
  align-items: baseline;
  grid-template-columns: 1fr max-content;
  grid-template-areas: 'name year' 'genre genre';
  font-weight: 500;
}

.card__name {
  grid-area: name;
  margin: 0;
  font-size: 18px;
  opacity: 0.7;
}

.card__genre {
  grid-area: genre;
  margin: 0;
  font-size: 14px;
  opacity: 0.5;
}

.card__year {
  grid-area: year;
  padding: 2px 10px;
  border: 1px solid #979797;
  border-radius: 4px;
  font-size: 14px;
  opacity: 0.75;
}

.card__rating {
  grid-area: rating;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border: 1px solid #fff;
  border-radius: 50%;
  color: #a1e66f;
  font-size: 26px;
}

.card__description {
  grid-area: description;
  font-size: 17px;
  line-height: 1.25;
  opacity: 0.8;
}

.card__duration {
  grid-area: duration;
  color: #f65261;
  font-size: 26px;
  opacity: 0.75;
}

.card__link {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.card__link:hover ~ .card__info h3 {
  color: #f65261;
}

.card h3 {
  transition: 0.2s;
}

.card.extended {
  display: flex;
  align-items: center;
}

.card.extended .card__img {
  width: 280px;
  margin-right: 60px;
}

.card.extended .card__info {
  flex: 1;
  grid-gap: 20px;
  align-items: baseline;
  grid-template-columns: 100px 150px 1fr 70px;
  grid-template-areas:
    'name name name rating'
    'genre genre genre .'
    'year duration . .'
    'description description description description';
  margin-top: 0;
}

.card.extended .card__genre {
  margin-top: 10px;
}

.card.extended .card__year {
  border: none;
  padding: 0;
  color: #f65261;
  font-size: 26px;
}

.card.extended h3 {
  font-size: 53px;
  line-height: 1.1;
  font-weight: 300;
  opacity: 0.7;
}
</style>
