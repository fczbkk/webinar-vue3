<template>
  <Suspense>
    <template #default>
      <AsyncComponent />
    </template>
    <template #fallback>
      Wait for it...
    </template>
  </Suspense>
</template>

<script>
import AsyncComponent from '../components/AsyncComponent'

export default {
  components: {
    AsyncComponent
  }
}
</script>
