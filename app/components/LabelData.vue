<script setup lang="ts">
const props = defineProps({
  label: String,
  data: String,
})
</script>

<template>
  <div class="w-full space-y-1">
    <p class="text-gray-500 text-xs">
      {{ props.label }}
    </p>

    <div>
      <slot name="default" />

      <p
        v-if="!$slots.default"
        class="font-medium text-sm"
      >
        {{ props.data }}
      </p>
    </div>
  </div>
</template>
