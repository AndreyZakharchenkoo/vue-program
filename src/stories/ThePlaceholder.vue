<template>
  <div class="placeholder">
    <h2>{{ title }}</h2>
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
.placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 500px);
  padding: 80px 0;
}

.placeholder h2 {
  max-width: 40ch;
  font-size: 40px;
  font-weight: 300;
  color: lightgray;
  opacity: .8;
  text-align: center;
  text-transform: none;
}
</style>
