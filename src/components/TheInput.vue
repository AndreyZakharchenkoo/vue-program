<template>
  <input
    type="text"
    class="input"
  />
</template>

<script>
export default {
  name: 'TheInput'
}
</script>

<style lang="scss" scoped>
.input {
  display: inline-flex;
  width: 100%;
  height: 55px;
  padding: 0 20px;
  border-radius: 4px;
  border: 2px solid transparent;
  background-color: rgba(29, 29, 29, 0.8);
  color: #fff;
  font-family: inherit;
  font-size: 20px;
  line-height: 1.5;
  font-weight: 500;
  transition: .2s;

  &:focus {
    outline: none;
    border-color: #f65261;
  }
}
</style>
