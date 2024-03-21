<script lang="ts" setup>

type ButtonTypeAttribute = 'submit' | 'reset' | 'button';

defineProps({
  type: {
    type: String as () => ButtonTypeAttribute,
    default: "button"
  },
  label: {
    type: String,
    default: "Submit"
  },
  plain: {
    type: Boolean,
    default: false
  }
})

defineEmits(['onClick'])

</script>
<template>
  <button class="button" :type="type" :class="{ plain: plain }" @click="$emit('onClick')">
    <slot name="icon" />
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

  svg {
    margin-right: 8px;
  }

  &:hover {
    background-color: var(--background-hover-button-primary)
  }

  &:active {
    transform: scale(.9);
  }
}

button.button.plain {
  background-color: var(--primary-button-plain);
  color: var(--color-button-plain);

}
</style>