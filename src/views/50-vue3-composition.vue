<template>
  <div><input v-model="baseValue" type="number" /></div>
  <div>{{ baseValue }}, {{ doubleValue }}, {{ tripleValue }}</div>
</template>

<script>
import { ref } from 'vue'

import useDouble from '../reusable/use-double'
import useTriple from '../reusable/use-triple'

export default {
  setup () {
    const baseValue = ref(1)

    const { adjustedValue: doubleValue } = useDouble(baseValue)
    const { adjustedValue: tripleValue } = useTriple(baseValue)

    return {
      baseValue,
      doubleValue,
      tripleValue
    }
  }
}
</script>
