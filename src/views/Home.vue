<template>
  <div class="home">
    <ul>
      <li>
        <router-link :to="{name: 'Reactivity'}">Reactivity</router-link>
      </li>
      <li>
        <router-link :to="{name: 'Install'}">Installation</router-link>
      </li>
      <li>
        <router-link :to="{name: 'Reactivity'}">Reactivity</router-link>
      </li>
      <li>
        <router-link :to="{name: 'CompositionApi'}">Composition API</router-link>
      </li>
      <li>
        <router-link :to="{name: 'Props'}">Props</router-link>
      </li>
      <li>
        <router-link :to="{name: 'Filters'}">Filters</router-link>
      </li>
      <li>
        <router-link :to="{name: 'DynamicBinding'}">Dynamic binding</router-link>
      </li>
      <li>
        <router-link :to="{name: 'Teleport'}">Teleport</router-link>
      </li>
      <li>
        <router-link :to="{name: 'Suspense'}">Suspense</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>
