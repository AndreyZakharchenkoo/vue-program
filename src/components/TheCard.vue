<template>
  <div class="card">
    <picture class="card__img">
      <img width="300" height="450" :src="card.poster_path" :alt="card.overview">
    </picture>
    <div class="card__info">
      <h2 class="card__name">{{ card.title }}</h2>
      <p class="card__genre">{{ card.genres[0] }}</p>
      <div class="card__year">{{ card.release_date }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheCard',
  props: {
    card: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  img {
    width: 100%;
    height: auto;
    aspect-ratio: 2 / 3;
    object-position: center center;
    object-fit: cover;
  }

  &__info {
    display: grid;
    margin-top: 10px;
    grid-gap: 5px;
    align-items: baseline;
    grid-template-columns: 1fr max-content;
    grid-template-areas:
      'name year'
      'genre genre';
    font-weight: 500;
  }

  &__name {
    grid-area: name;
    margin: 0;
    font-size: 18px;
    opacity: .7;
  }

  &__genre {
    grid-area: genre;
    margin: 0;
    font-size: 14px;
    opacity: .5;
  }

  &__year {
    grid-area: year;
    padding: 5px 10px;
    border: 1px solid #979797;
    opacity: 0.5;
    border-radius: 4px;
  }
}
</style>
