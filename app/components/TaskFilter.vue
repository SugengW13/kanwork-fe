<script setup lang="ts">
import type { SelectMenuItem } from '@nuxt/ui'

const isOpen = ref(false)

const filter = reactive({
  priority: [],
  deadlineAt: undefined,
  startedAt: undefined,
  finishedAt: undefined,
})

const priorityItems = ref<SelectMenuItem[]>([
  { label: 'Low', id: 'LOW' },
  { label: 'Medium', id: 'MEDIUM' },
  { label: 'High', id: 'HIGH' },
])
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
        @submit.prevent="isOpen = false"
      >
        <p class="text-lg font-medium">
          Filter
        </p>

        <u-separator />

        <u-form-field label="Priority">
          <u-select
            v-model="filter.priority"
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
            v-model="filter.deadlineAt"
            class="w-full"
          />
        </u-form-field>

        <u-form-field label="Started At">
          <date-range-picker
            v-model="filter.startedAt"
            class="w-full"
          />
        </u-form-field>

        <u-form-field label="Finished At">
          <date-range-picker
            v-model="filter.finishedAt"
            class="w-full"
          />
        </u-form-field>

        <u-separator />

        <div class="space-x-3 flex justify-end">
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
      </u-form>
    </template>
  </u-popover>
</template>
