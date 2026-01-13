<script setup lang="ts">
const props = defineProps({
  title: String,
})
</script>

<template>
  <div class="flex justify-between items-center space-x-8">
    <p class="text-2xl font-semibold">
      {{ props.title }}
    </p>

    <slot name="suffix" />
  </div>
</template>
