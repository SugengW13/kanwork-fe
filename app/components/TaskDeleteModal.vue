<script setup lang="ts">
const { isOpenModal, selectedTask, deleteTask } = useTask()
</script>

<template>
  <u-modal
    v-model:open="isOpenModal.delete"
    :ui="{ content: 'w-lg' }"
  >
    <template #content>
      <div
        v-if="selectedTask"
        class="p-5 space-y-4 flex flex-col items-center"
      >
        <p class="text-xl text-center font-semibold">
          Delete Task
        </p>

        <div class="aspect-square w-15 flex items-center justify-center rounded-full bg-error/10">
          <u-icon
            size="40"
            name="material-symbols:error-outline-rounded"
            class="text-error"
          />
        </div>

        <p class="text-center text-gray-500 text-sm">
          Are you sure want to delete
          <span class="text-black font-medium">
            {{ selectedTask.title }}
          </span>
          ? <br>
          This action cannot be undone.
        </p>

        <div class="grid grid-cols-2 gap-4 w-full">
          <u-button
            size="lg"
            label="Cancel"
            color="error"
            class="justify-center"
            @click="isOpenModal.delete = false"
          />

          <u-button
            size="lg"
            label="Confirm"
            color="error"
            variant="outline"
            class="justify-center"
            @click="deleteTask(selectedTask.id)"
          />
        </div>
      </div>
    </template>
  </u-modal>
</template>
