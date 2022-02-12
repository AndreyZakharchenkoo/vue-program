<template>
  <ul class="pagination">
    <li>
      <a
        href="#"
        @click.prevent="changePage('first')"
        :class="isInFirstPage ? 'disabled' : ''"
      >
        First
      </a>
    </li>
    <li>
      <a
        href="#"
        @click.prevent="changePage('prev')"
        :class="isInFirstPage ? 'disabled' : ''"
      >
        «
      </a>
    </li>
    <li
      v-for="page in pages"
      :key="page"
    >
      <a
        href="#"
        :class="{ 'active': isPageActive(page) }"
        @click.prevent="changePage(page)"
      >
        {{ page }}
      </a>
    </li>
    <li>
      <a
        href="#"
        @click.prevent="changePage('next')"
        :class="isInLastPage ? 'disabled' : ''"
      >
        »
      </a>
    </li>
    <li>
      <a
        href="#"
        @click.prevent="changePage('last')"
        :class="isInLastPage ? 'disabled' : ''"
      >
        Last
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'pagination',
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 5,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    },
    startPage() {
      // When on the first page
      if (this.currentPage === 1 || this.currentPage === 2) return 1;
      // When on the last page
      if (this.totalPages < this.maxVisibleButtons) return 1;
      if (this.currentPage === this.totalPages) return this.totalPages - this.maxVisibleButtons + 1;
      // When in between

      return this.currentPage - 2;
    },
    endPage() {
      if (this.totalPages === 0) return 1;
      if (this.totalPages < this.maxVisibleButtons) return this.totalPages;

      return Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
    },
    pages() {
      const range = [];
      // eslint-disable-next-line no-plusplus
      for (let i = this.startPage; i <= this.endPage; i++) {
        range.push(i);
      }

      return range;
    },
  },
  methods: {
    isPageActive(page) {
      return this.currentPage === page;
    },
    changePage(page) {
      switch (page) {
        case 'first':
          this.$emit('pagechanged', 1);
          break;
        case 'prev':
          if (this.isInFirstPage) {
            return;
          }
          this.$emit('pagechanged', this.currentPage - 1);
          break;
        case 'next':
          this.$emit('pagechanged', 1);
          if (this.isInLastPage) {
            return;
          }
          this.$emit('pagechanged', this.currentPage + 1);
          break;
        case 'last':
          this.$emit('pagechanged', this.totalPages);
          break;
        default:
          this.$emit('pagechanged', page);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: flex-end;

  li {
    margin: 0 3px;
    font-size: 20px;
    color: #fff;

    &:first-child {
      margin-right: 10px;
      font-size: 18px;
    }

    &:last-child {
      margin-left: 10px;
      font-size: 18px;
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 40px;
      height: 40px;
      border-radius: 50%;
      padding: 3px 8px;
      color: #fff;
      line-height: 1;
      text-decoration: none;
      text-align: center;
      transition: .2s;

      &:hover {
        color: #f65261;
      }
    }

    a.disabled {
      color: rgba(255, 255, 255, 0.5);
      pointer-events: none;
    }

    .active {
      background-color: #f65261;
      color: #fff !important;
      font-weight: bold;
      pointer-events: none;
    }
  }
}
</style>
