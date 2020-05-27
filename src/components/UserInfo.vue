<template>
  <p>Name: {{ fullName }}</p>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'UserInfo',

  props: {
    firstName: {
      type: String,
      default: 'John'
    },
    lastName: {
      type: String,
      default: 'Doe'
    }
  },

  setup (props) {
    return {
      fullName: computed(() => props.firstName + ' ' + props.lastName)
    }
  }
}
</script>

<style scoped>

</style>
