<template>
  <div :class="[`${state.theme}-theme`]" class="app-wrapper w-full h-full flex flex-col">
    <the-navbar @update-theme="onUpdateTheme" />
    <router-view />
  </div>
</template>

<script>
import { reactive } from 'vue'
import TheNavbar from './components/TheNavbar.vue'

export default {
  name: 'App',

  components: {
    TheNavbar
  },

  setup() {
    let state = reactive({
      theme: 'dark'
    })

    const onUpdateTheme = (isDark) => {
      state.theme = isDark === true || isDark == 'true' ? 'dark' : 'light'
      console.log(state.theme, isDark)
    }

    return {
      state,
      onUpdateTheme
    }
  }
}
</script>

<style>
.app-wrapper {
  --bg-elements: theme('colors.color-6');
  --bg-page: theme('colors.color-5');
  --color-text: theme('colors.color-3');
  --shadow-color: theme('colors.color-7');

  min-height: 100vh;
  background-color: var(--bg-page);
  color: var(--color-text);
}
.app-wrapper.dark-theme {
  --bg-elements: theme('colors.color-1');
  --bg-page: theme('colors.color-2');
  --color-text: theme('colors.color-6');
  --shadow-color: theme('colors.color-2');
}
</style>
