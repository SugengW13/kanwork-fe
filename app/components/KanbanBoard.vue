<script setup lang="ts">
const { tasks } = useTask()
</script>

<template>
  <div class="grid grid-cols-3 gap-8 grow min-h-0">
    <task-container
      status="TODO"
      :tasks="tasks['TODO']"
    />

    <task-container
      status="DOING"
      :tasks="tasks['DOING']"
    />

    <task-container
      status="DONE"
      :tasks="tasks['DONE']"
    />
  </div>
</template>
