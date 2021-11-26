<template>
  <button
    type="button"
    class="button"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'TheButton'
}
</script>

<style lang="scss" scoped>
.button {
  height: 35px;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 4px;
  border: 2px solid #f65261;
  background-color: #f65261;
  color: #fff;
  font-family: inherit;
  font-size: 15px;
  line-height: 1.5;
  font-weight: 500;
  text-transform: uppercase;
  padding: 0 40px;
  cursor: pointer;
  transition: .2s;

  &:hover {
    background-color: transparent;
    border-color: #f65261;
  }

  &.large {
    height: 55px;
    font-size: 20px;
  }
}
</style>
