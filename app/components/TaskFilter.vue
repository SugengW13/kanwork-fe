<script setup lang="ts">
import type { SelectMenuItem } from '@nuxt/ui'

const { filterState, resetFilters } = useTask()

const isOpen = ref(false)

const priorityItems = ref<SelectMenuItem[]>([
  { label: 'Low', id: 'LOW' },
  { label: 'Medium', id: 'MEDIUM' },
  { label: 'High', id: 'HIGH' },
])

// Local filter state for editing
const localFilter = ref({
  priority: [] as string[],
  deadlineAt: undefined as any,
  startedAt: undefined as any,
  finishedAt: undefined as any,
})

// Sync local filter with URL state when opening
watch(isOpen, (open) => {
  if (open) {
    localFilter.value = {
      priority: [...(filterState.value.priority || [])],
      deadlineAt: filterState.value.deadlineAt,
      startedAt: filterState.value.startedAt,
      finishedAt: filterState.value.finishedAt,
    }
  }
})

// Apply filters to URL
const applyFilters = () => {
  filterState.value = localFilter.value
  isOpen.value = false
}

// Reset filters
const onReset = () => {
  localFilter.value = {
    priority: [],
    deadlineAt: undefined,
    startedAt: undefined,
    finishedAt: undefined,
  }
  resetFilters()
  isOpen.value = false
}
</script>

<template>
  <u-popover v-model:open="isOpen">
    <u-button
      size="lg"
      label="Filter"
      trailing-icon="material-symbols:filter-list-rounded"
    />

    <template #content>
      <u-form
        class="w-sm p-4 space-y-3"
        @submit.prevent="applyFilters"
      >
        <p class="text-lg font-medium">
          Filter
        </p>

        <u-separator />

        <u-form-field label="Priority">
          <u-select
            v-model="localFilter.priority"
            multiple
            size="lg"
            value-key="id"
            placeholder="Select Priority"
            :items="priorityItems"
            class="w-full"
          />
        </u-form-field>

        <u-form-field label="Deadline At">
          <date-range-picker
            v-model="localFilter.deadlineAt"
            class="w-full"
          />
        </u-form-field>

        <u-form-field label="Started At">
          <date-range-picker
            v-model="localFilter.startedAt"
            class="w-full"
          />
        </u-form-field>

        <u-form-field label="Finished At">
          <date-range-picker
            v-model="localFilter.finishedAt"
            class="w-full"
          />
        </u-form-field>

        <u-separator />

        <div class="flex justify-between">
          <u-button
            size="lg"
            label="Reset"
            variant="outline"
            color="red"
            @click="onReset"
          />

          <div class="space-x-3 flex">
            <u-button
              size="lg"
              label="Cancel"
              variant="outline"
              @click="isOpen = false"
            />

            <u-button
              size="lg"
              label="Confirm"
              type="submit"
            />
          </div>
        </div>
      </u-form>
    </template>
  </u-popover>
</template>
