<template>
  <div>{{ name | capitalize | revert }}</div>
</template>

<script>

function capitalize (input) {
  return input.toUpperCase()
}

function revert (input) {
  return input.split('').reverse().join('')
}

export default {
  data () {
    return {
      name: 'Riki Fridrich'
    }
  },
  filters: {
    capitalize,
    revert
  }
}
</script>
