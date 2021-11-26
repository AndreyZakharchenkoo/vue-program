import TheButton from './TheButton.vue'

export default {
  title: 'TheButton'
}

export const normalButton = () => ({
  components: { TheButton },
  template: '<the-button>Normal Button</the-button>'
})

// export const primaryButton = () => ({
//   components: { TheButton },
//   template: '<the-button color="primary">Normal Button</the-button>'
// })
