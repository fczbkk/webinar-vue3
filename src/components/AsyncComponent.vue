<template>
  <h1>Async component</h1>
  <p>{{ lastName }}, {{ firstName }}</p>
</template>

<script>

function getUserData () {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve({firstName: 'Riki', lastName: 'Fridrich'})
    }, 3000)
  })
}

export default {
  async setup () {
    const { firstName, lastName } = await getUserData()
    return { firstName, lastName }
  }
}
</script>
