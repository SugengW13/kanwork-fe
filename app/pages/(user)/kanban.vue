<script setup lang="ts">
import { taskStorage } from '~/utils/storages'

const { isOpenModal, selectedTask, getTasks } = useTask()

const hasAnyTasks = computed(() => taskStorage.value.length > 0)

const onClickAdd = () => {
  selectedTask.value = null
  isOpenModal.value.form = true
}

onMounted(async () => {
  await getTasks()
})
</script>

<template>
  <div class="space-y-8 flex flex-col h-full">
    <div class="space-y-8 flex flex-col min-h-0 grow">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-4">
          <u-input
            v-if="hasAnyTasks"
            size="lg"
            placeholder="Search"
            leading-icon="material-symbols:search-rounded"
          />

          <task-filter v-if="hasAnyTasks" />
        </div>

        <u-button
          size="lg"
          label="Add New"
          trailing-icon="material-symbols:add-rounded"
          @click="onClickAdd"
        />
      </div>

      <!-- Empty State: Show when no tasks -->
      <empty-kanban v-if="!hasAnyTasks" />

      <!-- Normal Kanban: Show when tasks exist -->
      <kanban-board v-else />
    </div>
  </div>
</template>
