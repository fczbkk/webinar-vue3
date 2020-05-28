<template>
  <div>{{ name | capitalize | revert }}</div>
</template>

<script>
import { capitalize, revert } from '../reusable/string-utilities'

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
