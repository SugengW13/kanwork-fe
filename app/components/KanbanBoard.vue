<script setup lang="ts">
</script>

<template>
  <div class="grid grid-cols-3 gap-8 grow min-h-0 overflow-y-hidden">
    <task-container status="TODO" />

    <task-container status="DOING" />

    <task-container status="DONE" />
  </div>
</template>
