<template>
  <div class="placeholder-wrap">
    <h1 class="placeholder">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'ThePlaceholder',
  props: {
    title: {
      type: String,
      required: true,
      default: 'No items found'
    }
  }
}
</script>

<style scoped>
.placeholder-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 500px);
  padding: 80px 0;
}

.placeholder {
  color: lightgray;
  text-align: center;
  max-width: 40ch;
  opacity: .8;
  text-transform: none;
}
</style>
