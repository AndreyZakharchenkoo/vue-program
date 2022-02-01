<template>
  <div>
    <section class="box-search">
      <div class="container">
        <h1>FIND YOUR MOVIE</h1>
        <form
          class="search"
          @submit.prevent>
          <div class="search__input">
            <the-input
              placeholder="Search"
              v-model.trim="searchValue"
              @input="searchFilmsWithDelay"
            />
          </div>
          <the-button type="submit" class="large">Search</the-button>
        </form>
        <div class="sort">
          <div class="sort__label">Search by</div>
          <div class="button-group">
            <the-button
              :class="{ 'active': searchParam === SEARCH_PARAMS.title }"
              @click="changeParam(SEARCH_PARAMS.title, true, $event)"
            >
              Title
            </the-button>
            <the-button
              :class="{ 'active': searchParam === SEARCH_PARAMS.genres }"
              @click="changeParam(SEARCH_PARAMS.genres, true, $event)"
            >
              Genre
            </the-button>
          </div>
        </div>
      </div>
    </section>
    <section class="box-gallery">
      <div class="box-gallery__top">
        <div class="container">
          <div
            v-if="searchValue"
            class="quantity"
          >
            {{ totalFoundedFilms }} movie found
          </div>
          <div class="sort">
            <div class="sort__label">Sort by</div>
            <div class="button-group">
              <the-button
                :class="{ 'active': sortParam === SORT_PARAMS.date }"
                @click="changeParam(SORT_PARAMS.date, false, $event)"
              >
                Release date
              </the-button>
              <the-button
                :class="{ 'active': sortParam === SORT_PARAMS.rating }"
                @click="changeParam(SORT_PARAMS.rating, false, $event)"
              >
                Rating
              </the-button>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <template v-if="films.length" >
          <ul class="gallery post">
            <li
              class="post__item"
              v-for="item in films"
              :key="item.id"
            >
              <the-card :card="item" />
            </li>
          </ul>
          <the-pagination
            :current-page="currentPage"
            :total-pages="totalPages"
            @pagechanged="changePage"
          />
        </template>
        <the-placeholder
          v-else
          title="No films found"
        />
      </div>
    </section>
  </div>
</template>

<script>
import { debounce } from 'lodash';
import { mapState, mapMutations, mapActions } from 'vuex';
import { SEARCH_PARAMS, SORT_PARAMS } from '../core/constants';
import TheInput from '@/stories/TheInput.vue';
import TheButton from '@/stories/TheButton.vue';
import TheCard from '@/stories/TheCard.vue';
import ThePlaceholder from '@/stories/ThePlaceholder.vue';
import ThePagination from '@/components/ThePagination.vue';

export default {
  name: 'Home',
  components: {
    TheButton,
    TheInput,
    TheCard,
    ThePlaceholder,
    ThePagination,
  },
  mounted() {
    const {
      searchVal, searchBy, sortBy, offset,
    } = this.$route.query;
    const offsetParam = offset ?? 0;

    if (searchVal) {
      this.searchValue = searchVal;
      this.UPDATE_SEARCH_PARAM(searchBy);
      this.UPDATE_SORT_PARAM(sortBy);
    }

    this.UPDATE_OFFSET(offsetParam);
    this.fetchFilmsByParams();
  },
  data: () => ({
    SEARCH_PARAMS,
    SORT_PARAMS,
    limit: 9,
  }),
  computed: {
    ...mapState({
      films: (state) => state.films.films,
      sortParam: (state) => state.films.sortParam,
      searchParam: (state) => state.films.searchParam,
      totalFoundedFilms: (state) => state.films.totalFoundedFilms,
    }),
    searchValue: {
      get() {
        return this.$store.state.films.searchValue;
      },
      set(val) {
        this.UPDATE_SEARCH_VALUE(val);
      },
    },
    offset: {
      get() {
        return this.$store.state.films.offset;
      },
      set(val) {
        this.UPDATE_OFFSET(val);
      },
    },
    currentPage() {
      if (this.offset) {
        return Math.trunc(this.offset / this.limit) + 1;
      }

      return 1;
    },
    totalPages() {
      return Math.ceil(this.totalFoundedFilms / this.limit);
    },
  },
  methods: {
    ...mapActions([
      'FETCH_FILMS_BY_PARAMS',
    ]),
    ...mapMutations([
      'UPDATE_SEARCH_VALUE',
      'UPDATE_SEARCH_PARAM',
      'UPDATE_SORT_PARAM',
      'UPDATE_OFFSET',
    ]),
    changeParam(param, isSearchParam, event) {
      this.switchActiveButton(event);

      if (isSearchParam) {
        this.UPDATE_SEARCH_PARAM(param);
      } else {
        this.UPDATE_SORT_PARAM(param);
      }

      this.fetchFilmsByParams();
    },
    switchActiveButton(event) {
      const buttonsGroup = event.path[1].querySelectorAll('button');

      buttonsGroup.forEach((elem) => {
        elem.classList.remove('active');
      });

      event.target.classList.add('active');
    },
    // eslint-disable-next-line func-names
    searchFilmsWithDelay: debounce(function () {
      this.fetchFilmsByParams();
    }, 300),
    async fetchFilmsByParams() {
      const params = {
        limit: this.limit,
        searchVal: this.searchValue,
        searchBy: this.searchParam,
        sortBy: this.sortParam,
        offset: this.offset,
      };

      await this.FETCH_FILMS_BY_PARAMS(params)
        .then(() => {
          this.addParamsToQuery(params);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    addParamsToQuery(params) {
      // eslint-disable-next-line no-restricted-globals
      history.pushState(
        {},
        null,
        `${this.$route.path}?${
          Object.keys(params)
            .map((key) => (
              `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
            ))
            .join('&')}`,
      );
    },
    changePage(page) {
      this.offset = (page - 1) * this.limit;
      this.fetchFilmsByParams();
      this.scrollToTop();
    },
    scrollToTop() {
      window.scroll({
        top: 415,
        left: 0,
        behavior: 'smooth',
      });
    },
  },
};
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

.pagination {
  margin: 20px 0 50px;
}
</style>
