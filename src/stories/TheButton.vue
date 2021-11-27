<template>
  <button
    class="button"
    :type="type"
    :class="{ large: isLarge }"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  data: () => ({
    class: 'large'
  }),
  props: {
    type: {
      type: String,
      default: 'button'
    },
    isLarge: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.button {
  height: 35px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
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

.button.large {
  height: 55px;
  font-size: 20px;
}
</style>
