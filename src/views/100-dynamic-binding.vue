<template>
  <div>
    <button @[activationEvent]="handleActivation">Activate this button</button>
  </div>
  <ul>
    <li><label><input type="radio" v-model="activationEvent" value="click"> Click</label></li>
    <li><label><input type="radio" v-model="activationEvent" value="mouseenter"> Mouse Enter</label></li>
  </ul>

</template>

<script>
import {ref} from 'vue'

export default {
  setup () {
    const activationEvent = ref('click')
    function handleActivation (event) {
      console.log('activated by', event.type)
    }
    return {
      activationEvent,
      handleActivation
    }
  }
}
</script>
