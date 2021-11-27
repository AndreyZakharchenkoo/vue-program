<template>
  <header class="header">
    <div class="container">
      <the-logo/>
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
    align-items: center;
    min-height: 70px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
}
</style>
