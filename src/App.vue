<template>
  <div class="header">
    <div class="homeLink">
    <router-link :to="{name: 'Home'}">Vue 3 features</router-link>
    </div>
    <div id="insideHeader"></div>
  </div>
  <router-view/>

</template>

<style>
  body {
    padding: 3em;
    font-family: sans-serif;
  }

  .header {
    border-bottom: 1px solid #ccc;
    padding-bottom: 2em;
    margin-bottom: 2em;
  }

  .homeLink {
    font-weight: bold;
  }
</style>
