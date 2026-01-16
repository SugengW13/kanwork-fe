<script setup lang="ts">
import { format } from 'date-fns'
import type { PropType } from 'vue'

const props = defineProps({
  task: {
    type: Object as PropType<Task | null>,
    default: null,
  },
})

const { isOpenModal, selectedTask } = useTask()

const onClickTask = () => {
  selectedTask.value = props.task
  isOpenModal.value.detail = true
}
</script>

<template>
  <div
    v-if="props.task"
    class="border border-accented rounded-lg p-4 space-y-3 cursor-pointer hover:bg-black/5 transition"
    @click.self="onClickTask"
  >
    <div class="flex items-center justify-between pointer-events-none">
      <div class="flex items-center space-x-3">
        <p class="text-xl font-semibold">
          {{ props.task.title }}
        </p>

        <task-priority-badge :priority="props.task.priority" />
      </div>

      <u-button
        variant="ghost"
        icon="material-symbols:more-vert"
        class="rounded-full pointer-events-auto"
      />
    </div>

    <p class="text-sm text-gray-500 pointer-events-none line-clamp-2 text-justify">
      {{ props.task.description }}
    </p>

    <u-separator class="pointer-events-none" />

    <p class="text-sm font-medium pointer-events-none">
      Deadline: {{ format(props.task.deadlineAt, 'dd/MM/yyyy HH:mm') }}
    </p>
  </div>
</template>
