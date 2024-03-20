<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

type ButtonTypeAttribute = 'submit' | 'reset' | 'button';

defineProps({
  type: {
    type: String as () => ButtonTypeAttribute,
    default: "button"
  },
  label: {
    type: String,
    default: "Submit"
  }
})

</script>
<template>
  <button class="button" :type="type">
    <font-awesome-icon icon="fa-solid fa-plus" style="margin-right: 8px;" />
    <span>{{ label }}</span>
  </button>
</template>
<style>
button.button {
  border: none;
  padding: 8px 12px;
  min-width: 8rem;
  border-radius: 4px;
  background-color: var(--primary);
  color: var(--color-button-primary);
  transition: all .1s;

  &:hover {
    background-color: var(--background-hover-button-primary)
  }

  &:active {
    transform: scale(.9);
  }

}
</style>