<script setup lang="ts">
import { format } from 'date-fns'
import type { PropType } from 'vue'

const props = defineProps({
  task: Object as PropType<Task | null>,
})
</script>

<template>
  <div
    v-if="props.task"
    class="border border-accented rounded-lg p-4 space-x-3 flex items-center cursor-pointer hover:bg-black/5 transition"
  >
    <div class="grow space-y-3 overflow-hidden">
      <div class="flex items-center space-x-3">
        <p class="text-xl font-semibold">
          {{ props.task.title }}
        </p>

        <u-badge
          variant="soft"
          :label="props.task.category"
          class="rounded-full"
        />

        <u-badge
          variant="soft"
          :label="props.task.priority"
          class="rounded-full"
        />
      </div>

      <p class="truncate text-sm text-gray-500">
        {{ props.task.description }}
      </p>

      <u-separator />

      <div class="flex space-x-4 text-sm font-medium">
        <p>Asignee: {{ props.task.asignee }}</p>
        <p>Finished at: {{ format(props.task.finishedAt, 'dd/MM/yyyy HH:mm') }}</p>
        <p>Duration: {{ props.task.duration }}</p>
      </div>
    </div>

    <u-icon
      size="24"
      name="material-symbols:chevron-right-rounded"
    />
  </div>
</template>
