<template>
  <main>
    <section class="box-search">
      <div class="container">
        <h1>FIND YOUR MOVIE</h1>
        <form class="search" @submit.prevent="searchFilms">
          <the-input placeholder="Search" v-model.trim.lazy="searchValue" />
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
          <the-card
            class="post__item"
            v-for="item in gallery"
            :card="item"
            :key="item.id"
          />
        </ul>
        <ul v-else-if="results.length" class="gallery">
          <the-card
            class="post__item"
            v-for="item in results"
            :card="item"
            :key="item.id"
          />
        </ul>
        <the-placeholder
          v-else
          title="No films found"
        />
      </div>
    </section>
  </main>
</template>

<script>
import TheButton from '@/components/TheButton.vue'
import TheInput from '@/components/TheInput.vue'
import TheCard from '@/components/TheCard.vue'
import ThePlaceholder from '@/components/ThePlaceholder.vue'

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
    sortParam: 'date',
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
  }),
  computed: {
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
  position: relative;
  overflow: hidden;
  padding: 100px 0;

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: #333 url("https://i2.wp.com/onhike.com/wp-content/uploads/2021/07/free-streaming-movies-to-find-some-of-the-best-movies-of-the-past.jpg?fit=1478%2C829&ssl=1") no-repeat center center;
    background-size: cover;
    filter: blur(4px);
    background-blend-mode: darken;
  }

  .search {
    margin: 40px 0 25px;
  }
}

.box-gallery {
  &__top {
    background-color: #888888;

    .container {
      min-height: 70px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
}

.gallery {
  display: grid;
  grid-gap: 60px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  padding: 70px 0;
}

.sort {
  display: flex;
  align-items: center;

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

.search {
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 1fr min-content;
}
</style>
