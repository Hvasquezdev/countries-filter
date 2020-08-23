<template>
  <div :class="[`${theme}-theme`]" class="app-wrapper w-full h-full flex flex-col">
    <the-navbar />
    <router-view />
  </div>
</template>

<script>
import { ref } from 'vue'
import TheNavbar from './components/TheNavbar.vue'

export default {
  name: 'App',

  components: {
    TheNavbar
  },

  setup() {
    const theme = ref('dark')

    return {
      theme
    }
  }
}
</script>

<style>
.app-wrapper {
  --bg-elements: theme('colors.color-1');
  --bg-page: theme('colors.color-2');
  --color-text: theme('colors.color-6');

  min-height: 100vh;
  background-color: var(--bg-page);
  color: var(--color-text);
}
</style>
