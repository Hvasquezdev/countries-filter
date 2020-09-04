<template>
  <label class="base-switch relative inline-block">
    <input
      class="opacity-0 w-0 h-0"
      type="checkbox"
      role="switch"
      :checked="isChecked"
      :value="isChecked"
      @change="onChange"
    >
    <span class="slider absolute cursor-pointer left-0 right-0 top-0 bottom-0" />
  </label>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'BaseSwitch',

  props: {
    value: [Boolean, String]
  },

  setup(props, { emit }) {
    const isChecked = computed(() => props.value === true || props.value == 'true' ? true : false)

    const onChange = (e) => {
      emit('update:value', e.target.checked)
    }

    return {
      isChecked,
      onChange
    }
  }
}
</script>

<style>
.base-switch {
  width: 60px;
  height: 25px;
}
.base-switch .slider {
  --dot-size: 20px;
  background-color: var(--bg-elements);
  box-shadow: 0 0 2px var(--color-text);
  -webkit-transition: .25s;
  transition: .25s;
  border-radius: 4px;
}
.base-switch .slider::before {
  content: "";
  position: absolute;
  height: var(--dot-size);
  width: var(--dot-size);
  left: 3px;
  top: 50%;
  transform: translateY(-52%);
  background-color: var(--color-text);
  -webkit-transition: .25s;
  transition: .25s;
  border-radius: 4px;
}
.base-switch input:checked + .slider::before {
  left: calc(100% - (var(--dot-size) + 3px))
}
</style>
