<script setup lang="ts" generic="T extends Record<string, unknown>">
const { columns } = defineProps<{
  columns: T[]
}>()
</script>

<template>
  <ul class="grow grid grid-cols-3 gap-5">
    <slot :columns="columns" />
  </ul>
</template>
