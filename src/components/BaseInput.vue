<template>
  <input
    class="base-input appearance-none block w-full rounded py-6 px-6 leading-tight focus:outline-none"
    :type="type"
    :placeholder="placeholder"
    :value="query"
    @input="onInput"
  >
</template>

<script>
import { onMounted } from 'vue'

export default {
  name: 'BaseInput',

  props: {
    query: {
      type: [String, Number],
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },

  setup(props, { emit }) {
    const onInput = (e) => {
      emit('update:query', e.target.value)
    }

    return {
      onInput
    }
  }
}
</script>

<style>
.base-input {
  background-color: var(--bg-elements);
  color: var(--color-text);
  box-shadow: 0 0 6px var(--shadow-color);
  font-size: 18px;
  text-align: left;
}
</style>