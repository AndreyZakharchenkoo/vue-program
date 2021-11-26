<template>
  <button class="button" :class="`button-color--${color}`">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    color: {
      type: String,
      default: 'normal' // 'normal' or 'primary'
    }
  }
}
</script>

<style scoped>
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
}
</style>
