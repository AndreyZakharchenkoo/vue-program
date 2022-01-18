<template>
  <input
    type="text"
    class="input"
    v-bind="$attrs"
    :value="value"
    v-on="inputListeners"
  />
</template>

<script>
export default {
  name: 'TheInput',
  props: ['value'],
  inheritAttrs: true,
  computed: {
    inputListeners: function () {
      const vm = this

      return Object.assign({},
        this.$listeners,
        {
          input: function (event) {
            vm.$emit('input', event.target.value)
          }
        }
      )
    }
  }
}
</script>

<style scoped>
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
}

.input:focus {
  outline: none;
  border-color: #f65261;
}
</style>
