<template>
  <div class="layout">
    <the-header />
    <main>
      <transition name="fade" mode="out-in">
        <router-view :key="$route.fullPath" />
      </transition>
    </main>
    <the-footer />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  components: {
    TheFooter,
    TheHeader
  }
}
</script>

<style lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  main {
    flex: 1;
  }
}
</style>
