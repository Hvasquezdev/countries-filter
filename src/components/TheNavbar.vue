<template>
  <div class="the-navbar w-full flex items-center justify-between">
    <div class="left-nav">
      <h1 class="brand-title font-bold font-body">
        What in the world?
      </h1>
    </div>
    <div class="right-nav">
      <span class="theme-text mr-3">{{ state.isDark ? 'Dark' : 'Light' }} Theme</span>
      <base-switch :value="state.isDark" @change="onChange" />
    </div>
  </div>
</template>

<script>
import { reactive, onBeforeMount } from 'vue'
import BaseSwitch from './BaseSwitch.vue'

export default {
  name: 'TheNavbar',

  components: {
    BaseSwitch
  },

  setup(props, { emit }) {
    let state = reactive({
      isDark: false
    })

    onBeforeMount(() => {
      const isDark = window.localStorage.getItem('dark')
      state.isDark = isDark
      emit('update-theme', isDark)
    })

    const onChange = (e) => {
      state.isDark = e.target.checked
      window.localStorage.setItem('dark', state.isDark)

      emit('update-theme', state.isDark)
    }

    return {
      state,
      onChange
    }
  }
}
</script>

<style>
.the-navbar {
  background-color: var(--bg-elements);
  box-shadow: 0 0 6px var(--shadow-color);
  padding: 25px 15px;
}
.the-navbar > * {
  color: var(--color-text);
}
.the-navbar .left-nav .brand-title {
  font-size: 18px;
}
</style>