<script setup lang="ts">
const props = defineProps({
  title: String,
  value: String,
  icon: String,
})
</script>

<template>
  <div class="bg-white rounded-lg border border-accented p-5 space-y-4 flex flex-col min-h-0">
    <div class="flex items-center space-x-2">
      <u-icon
        :name="props.icon"
        size="32"
      />
      <p class="text-xl font-semibold">
        {{ props.title }}
      </p>
    </div>

    <u-separator />

    <slot name="default" />
  </div>
</template>
