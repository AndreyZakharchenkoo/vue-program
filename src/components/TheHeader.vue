<template>
  <header class="header">
    <div class="container">
      <the-logo/>
      <router-link to="/" class="header__icon">
        <img src="../assets/icon-search.svg" alt="Search icon">
      </router-link>
    </div>
  </header>
</template>

<script>
import TheLogo from '@/stories/TheLogo.vue'

export default {
  name: 'TheHeader',
  components: {
    TheLogo
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 70px;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  &__icon {
    width: 32px;
  }
}
</style>
