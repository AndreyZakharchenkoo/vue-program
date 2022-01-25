<template>
  <div class="box-info">
    <h1>404</h1>
    <p>Page not found</p>
  </div>
</template>

<script>
export default {
  name: 'Error',
};
</script>

<style scoped>
.box-info {
  min-height: calc(100vh - 70px);
  text-align: center;
}

h1 {
  font-size: 100px;
  margin-top: 150px;
  margin-bottom: 25px;
}

p {
  font-size: 24px;
}
</style>
