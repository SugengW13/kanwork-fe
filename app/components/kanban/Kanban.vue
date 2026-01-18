<script setup lang="ts">
const { tasks } = useTask()
</script>

<template>
  <div class="grid grid-cols-3 gap-8 grow min-h-0">
    <kanban-column
      :tasks="tasks['TODO']"
      status="TODO"
    />

    <kanban-column
      :tasks="tasks['DOING']"
      status="DOING"
    />

    <kanban-column
      :tasks="tasks['DONE']"
      status="DONE"
    />
  </div>
</template>
