<script setup lang="ts">
const { selectedTask } = useTask()
</script>

<template>
  <div
    v-if="selectedTask"
    class="p-5 space-y-4"
  >
    <div class="flex items-center justify-between">
      <p class="text-xl font-semibold">
        {{ selectedTask.title }}
      </p>

      <div class="flex space-x-3">
        <u-button
          size="lg"
          color="neutral"
          variant="outline"
          label="Update"
          leading-icon="material-symbols:edit-outline-rounded"
        />

        <u-button
          size="lg"
          color="error"
          variant="outline"
          label="Delete"
          leading-icon="material-symbols:delete-outline-rounded"
        />
      </div>
    </div>

    <p
      v-if="selectedTask.description?.length"
      class="text-sm text-gray-500 text-justify"
    >
      {{ selectedTask.description }}
    </p>

    <u-separator />

    <div class="grid grid-cols-3 gap-4">
      <label-data label="Status">
        <task-status-badge :status="selectedTask.status" />
      </label-data>

      <label-data label="Priority">
        <task-priority-badge :priority="selectedTask.priority" />
      </label-data>

      <label-data
        label="Deadline"
        :data="formatDate(selectedTask.deadlineAt, 'dd MMMM, yyyy HH:mm')"
      />

      <label-data
        label="Started At"
        :data="formatDate(selectedTask.startedAt, 'dd MMMM, yyyy HH:mm')"
      />

      <label-data
        label="Finished At"
        :data="formatDate(selectedTask.finishedAt, 'dd MMMM, yyyy HH:mm')"
      />

      <label-data
        label="Duration"
        :data="secondsToDuration(selectedTask.duration)"
      />
    </div>
  </div>
</template>
