<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import HomePage from './views/HomePage.vue';

export default {
  name: 'App',
  components: {
    HomePage,
  },
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  color: #333;
}
</style>
