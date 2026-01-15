<script setup lang="ts">
const props = defineProps({
  title: String,
})
</script>

<template>
  <div class="flex justify-between items-center space-x-8">
    <div class="space-x-5 flex items-center">
      <slot name="prefix" />
      <p class="text-2xl font-semibold">
        {{ props.title }}
      </p>
    </div>

    <slot name="suffix" />
  </div>
</template>
