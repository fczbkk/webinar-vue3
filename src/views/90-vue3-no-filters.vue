<template>
  <div>{{ revert(capitalize(name)) }}</div>
</template>

<script>

function capitalize (input) {
  return input.toUpperCase()
}

function revert (input) {
  return input.split('').reverse().join('')
}

export default {
  setup () {
    const name = 'Riki Fridrich'

    return {
      name,
      capitalize,
      revert
    }
  }
}
</script>
