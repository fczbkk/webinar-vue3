<template>
  <div><input v-model="baseValue" type="number" /></div>
  <div>{{ adjustedValue }}</div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  setup () {
    const baseValue = ref(1)
    const adjustedValue = computed(() => baseValue.value * 2)

    return {
      baseValue,
      adjustedValue
    }
  }
}
</script>
