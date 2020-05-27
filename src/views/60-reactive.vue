<template>
  <div>Key: <input v-model="propertyKey" /></div>
  <div>Value: <input v-model="propertyValue" /></div>
  <div><button @click="addProperty">Add property</button></div>
  <div><pre>{{ JSON.stringify(myObject, null, '  ') }}</pre></div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  setup () {
    const propertyKey = ref('')
    const propertyValue = ref('')

    const myObject = reactive({
      aaa: 'bbb'
    })

    function addProperty () {
      myObject[propertyKey.value] = propertyValue.value
    }

    return {
      propertyKey,
      propertyValue,
      addProperty,
      myObject
    }
  }
}
</script>
