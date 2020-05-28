<template>
  <div>{{ revert(capitalize(name)) }}</div>
</template>

<script>
import { capitalize, revert } from '../reusable/string-utilities'

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
