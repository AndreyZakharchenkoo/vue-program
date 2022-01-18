<template>
  <footer class="footer">
    <div class="container">
      <the-logo/>
    </div>
  </footer>
</template>

<script>
import TheLogo from '@/stories/TheLogo.vue';

export default {
  name: 'TheFooter',
  components: {
    TheLogo,
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: #424242;
  color: #fff;

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 70px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
}
</style>
