<script setup lang="ts">
import { taskStorage } from '~/utils/storages'

const { isOpenModal, selectedTask, searchQuery, filterState, resetSearch, resetAll, getTasks } = useTask()

const hasAnyTasks = computed(() => taskStorage.value.length > 0)

const activeFilterCount = computed(() => {
  let count = 0
  if (filterState.value.priority && filterState.value.priority.length > 0) count++
  if (filterState.value.deadlineAt) count++
  if (filterState.value.startedAt) count++
  if (filterState.value.finishedAt) count++
  return count
})

const hasActiveFilters = computed(() => searchQuery.value || activeFilterCount.value > 0)

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
            v-model="searchQuery"
            size="lg"
            placeholder="Search tasks by title or description..."
            leading-icon="material-symbols:search-rounded"
            :ui="{ trailing: 'pe-1' }"
          >
            <template
              v-if="searchQuery"
              #trailing
            >
              <u-button
                color="neutral"
                variant="link"
                size="sm"
                icon="material-symbols:close-rounded"
                aria-label="Clear search"
                @click="resetSearch"
              />
            </template>
          </u-input>

          <div
            v-if="hasAnyTasks"
            class="relative"
          >
            <task-filter />
            <span
              v-if="activeFilterCount > 0"
              class="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold"
            >
              {{ activeFilterCount }}
            </span>
          </div>

          <u-button
            v-if="hasActiveFilters"
            size="lg"
            label="Clear All"
            variant="outline"
            color="red"
            @click="resetAll"
          />
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
