<template>
  <div>
    <div><input v-model="baseValue" type="number" /></div>
    <div>{{ adjustedValue }}</div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      baseValue: 1
    }
  },
  computed: {
    adjustedValue () {
      return this.baseValue * 2
    }
  }
}
</script>
