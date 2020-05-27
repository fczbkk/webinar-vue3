import { computed } from 'vue'

export default function (baseValue) {
  const adjustedValue = computed(() => baseValue.value * 3)
  return { adjustedValue }
}
