<template>
  <div class="base-dropdown relative">
    <button
      class="dropdown-target relative z-10 appearance-none border-none rounded w-full py-6 px-6 leading-tight focus:outline-none"
      id="username"
      type="text"
      placeholder="Username"
      @click="state.isOpen = !state.isOpen"
    >
      {{ label }}
    </button>

    <button
      v-if="state.isOpen"
      @click="state.isOpen = false"
      tabindex="-1"
      class="fixed inset-0 h-full w-full bg-black opacity-50 cursor-default"
    ></button>
    <div
      v-if="state.isOpen"
      class="dropdown-list absolute w-full left-0 top-10 mt-2 py-2 w-48 rounded"
    >
      <a
        v-for="(option, key) in options"
        :key="key"
        class="block px-6 py-3 cursor-pointer"
        :class="{ 'selected': option === selected }"
        @click="onSelectOption(option)"
      >
        {{ option }}
      </a>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, onBeforeUnmount } from 'vue'

export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    selected: {
      type: [String, Number],
      default: null
    },
    options: {
      type: Array,
      default: () => []
    }
  },

  setup(props, { emit }) {
    const state = reactive({
      isOpen: false,
    })

    const handleEscape = (e) => {
      if (e.key === 'Esc' || e.key === 'Escape') {
        state.isOpen = false
      }
    }

    const onSelectOption = (option) => {
      emit('selected', option)
    }

    onMounted(() => {
      document.addEventListener('keydown', handleEscape)
    })

    onBeforeUnmount(() => {
      document.removeEventListener('keydown', handleEscape)
    })

    return {
      state,
      onSelectOption
    }
  }
}
</script>

<style>
.base-dropdown .dropdown-target {
  background-color: var(--bg-elements);
  color: var(--color-text);
  box-shadow: 0 0 6px var(--shadow-color);
  font-size: 18px;
  text-align: left;
}
.base-dropdown .dropdown-list {
  background-color: var(--bg-elements);
  color: var(--color-text);
  box-shadow: 0 0 6px var(--shadow-color);
  font-size: 16px;
  text-align: left;
}
.base-dropdown .dropdown-list .selected {
  background-color: var(--bg-page);
}
</style>
