<template>
  <div
    class="card"
    :class="{ extended: isExtended }"
  >
    <router-link
      v-if="!isExtended"
      class="card__link"
      :to="{ name: 'Film', params: { id: card.id }  }"
    />
    <picture class="card__img">
      <img width="300" height="450" :src="card.poster_path" :alt="card.title">
    </picture>
    <div class="card__info">
      <h3 class="card__name">{{ card.title }}</h3>
      <p class="card__genre">{{ card.genres[0] }}</p>
      <div class="card__year">{{ card.release_date }}</div>
      <template v-if="isExtended">
        <div class="card__rating">{{ card.vote_count }}</div>
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
      required: true
    },
    isExtended: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    gallery: [
      {
        id: 447365,
        title: 'Guardians of the Galaxy Vol. 3',
        tagline: '',
        vote_average: 0,
        vote_count: 9,
        release_date: '2020-05-01',
        poster_path: 'https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg',
        overview: 'The third film based on Marvel\'s Guardians of the Galaxy.',
        budget: 0,
        revenue: 0,
        genres: [
          'Action',
          'Adventure',
          'Science Fiction'
        ],
        runtime: null
      },
      {
        id: 424785,
        title: 'Transformers 7',
        tagline: '',
        vote_average: 0,
        vote_count: 0,
        release_date: '2019-06-26',
        poster_path: 'https://image.tmdb.org/t/p/w500/432BowXw7a4fWXSONxBaFKqvW4f.jpg',
        overview: 'Plot unknown.',
        budget: 0,
        revenue: 0,
        genres: [
          'Science Fiction',
          'Action',
          'Adventure'
        ],
        runtime: null
      },
      {
        id: 299534,
        title: 'Untitled Avengers',
        tagline: '',
        vote_average: 0,
        vote_count: 9,
        release_date: '2019-04-24',
        poster_path: 'https://image.tmdb.org/t/p/w500/aMETsaNNcDc6g5ZatQtVbySnSaA.jpg',
        overview: 'The culmination of the Marvel Cinematic Universe.',
        budget: 0,
        revenue: 0,
        genres: [
          'Action',
          'Adventure',
          'Science Fiction'
        ],
        runtime: null
      },
      {
        id: 287947,
        title: 'Shazam!',
        tagline: '',
        vote_average: 0,
        vote_count: 5,
        release_date: '2019-04-05',
        poster_path: 'https://image.tmdb.org/t/p/w500/yUOJHa9XmB1H0iYodG9Kb3YCc9T.jpg',
        overview: 'We all have a superhero inside us, it just takes a bit of magic to bring it out. In Billy Batson\'s case, by shouting out one word--SHAZAM!--this streetwise 14-year-old foster kid can turn into the adult superhero Shazam, courtesy of an ancient wizard.Still a kid at heart--inside a ripped, godlike body--Shazam revels in this adult version of himself by doing what any teen would do with superpowers: have fun with them! Can he fly? Does he have X-ray vision? Can he shoot lightning out of his hands? Can he skip his social studies test? Shazam sets out to test the limits of his abilities with the joyful recklessness of a child. But he\'ll need to master these powers quickly in order to fight the deadly forces of evil controlled by Doctor Thaddeus Sivana.',
        budget: 0,
        revenue: 0,
        genres: [
          'Action',
          'Adventure',
          'Fantasy',
          'Science Fiction'
        ],
        runtime: null
      },
      {
        id: 320288,
        title: 'X-Men: Dark Phoenix',
        tagline: '',
        vote_average: 0,
        vote_count: 0,
        release_date: '2019-02-14',
        poster_path: 'https://image.tmdb.org/t/p/w500/6qmsupE0opYPIaBGe7T5D2FBzLs.jpg',
        overview: 'Gathered together by Professor Charles Xavier to protect a world that fears and hates them, the X-Men had fought many battles, been on adventures that spanned galaxies, grappled enemies of limitless might, but none of this could prepare them for the most shocking struggle they would ever face. One of their own members, Jean Grey, has gained power beyond all comprehension, and that power has corrupted her absolutely! Now, they must decide if the life of the woman they cherish is worth the existence of the entire universe!',
        budget: 0,
        revenue: 0,
        genres: [
          'Action',
          'Science Fiction'
        ],
        runtime: null
      },
      {
        id: 181790,
        title: 'Journey 3: From the Earth to the Moon',
        tagline: '',
        vote_average: 0,
        vote_count: 7,
        release_date: '2018-12-31',
        poster_path: 'https://image.tmdb.org/t/p/w500/98tbNloMBztAVnWpAznKKVUdi2O.jpg',
        overview: 'Sean and Hank go on their biggest adventure yet, to the moon.',
        budget: 0,
        revenue: 0,
        genres: [
          'Action',
          'Adventure',
          'Fantasy',
          'Science Fiction'
        ],
        runtime: null
      },
      {
        id: 297802,
        title: 'Aquaman',
        tagline: '',
        vote_average: 0,
        vote_count: 0,
        release_date: '2018-12-19',
        poster_path: 'https://image.tmdb.org/t/p/w500/sshNRCbtU2ON8SiWLycQzr05doX.jpg',
        overview: 'Following the events of Justice League, Arthur Curry, the reluctant ruler of the underwater kingdom of Atlantis, is caught between surface dwellers and his own people who are ready to lash out and invade the surface.',
        budget: 160000000,
        revenue: 0,
        genres: [
          'Action',
          'Fantasy',
          'Science Fiction'
        ],
        runtime: null
      },
      {
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
          'Thriller'
        ],
        runtime: null
      },
      {
        id: 351286,
        title: 'Jurassic World: Fallen Kingdom',
        tagline: 'Life finds a way',
        vote_average: 0,
        vote_count: 28,
        release_date: '2018-06-01',
        poster_path: 'https://image.tmdb.org/t/p/w500/ln6d5Okr6VK5vfQVobJTiYxeD0l.jpg',
        overview: 'A volcanic eruption threatens the remaining dinosaurs on the island of Isla Nublar, where the creatures have freely roamed for several years after the demise of an animal theme park known as Jurassic World. Claire Dearing, the former park manager, has now founded the Dinosaur Protection Group, an organization dedicated to protecting the dinosaurs. To help with her cause, Claire has recruited Owen Grady, a former dinosaur trainer who worked at the park, to prevent the extinction of the dinosaurs once again.',
        budget: 0,
        revenue: 0,
        genres: [
          'Action',
          'Adventure',
          'Drama',
          'Science Fiction',
          'Thriller'
        ],
        runtime: null
      },
      {
        id: 348350,
        title: 'Solo: A Star Wars Story',
        tagline: '',
        vote_average: 0,
        vote_count: 2,
        release_date: '2018-05-23',
        poster_path: 'https://image.tmdb.org/t/p/w500/uJ6OnE3CzGWq6buLINAbdBqa0gV.jpg',
        overview: 'Through a series of daring escapades deep within a dark and dangerous criminal underworld, Han Solo meets his mighty future copilot Chewbacca and encounters the notorious gambler Lando Calrissian.',
        budget: 0,
        revenue: 0,
        genres: [
          'Action',
          'Adventure',
          'Family',
          'Science Fiction'
        ],
        runtime: null
      }
    ]
  })
}
</script>

<style scoped>
.card {
  position: relative;
}

.card img {
  height: auto;
  aspect-ratio: 0.6666666667;
  object-position: center center;
  object-fit: cover;
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
  padding: 5px 10px;
  border: 1px solid #979797;
  border-radius: 4px;
  font-size: 14px;
  opacity: 0.5;
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

.card.extended img {
  max-width: 280px;
}

.card.extended .card__info {
  flex: 1;
  grid-gap: 20px;
  align-items: center;
  grid-template-columns: repeat(2, max-content);
  grid-template-areas: 'name rating' 'genre .' 'year .' 'description description';
  margin-top: 0;
}

.card.extended .card__genre {
  margin-top: 30px;
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
