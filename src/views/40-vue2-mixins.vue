<template>
  <div>
    <div><input v-model="baseValue" type="number" /></div>
    <div>{{ adjustedValue }}</div>
  </div>
</template>

<script>
import doubleMixin from '../reusable/mixin-double'
import tripleMixin from '../reusable/mixin-triple'

export default {
  mixins: [ doubleMixin, tripleMixin ],
  data () {
    return {
      baseValue: 1
    }
  }
}
</script>
