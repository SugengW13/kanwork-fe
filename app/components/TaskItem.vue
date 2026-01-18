<script setup lang="ts">
import { useDraggable } from '@vue-dnd-kit/core'
import { format } from 'date-fns'
import type { PropType } from 'vue'

const props = defineProps({
  task: {
    type: Object as PropType<Task | null>,
    default: null,
  },
  tasks: {
    type: Array as PropType<Task[]>,
    deault: () => [],
  },
  index: Number,
})

const { isOpenModal, selectedTask } = useTask()

const { elementRef, isDragging, handleDragStart } = useDraggable({
  groups: ['task'],
  data: computed(() => ({
    source: props.tasks,
    index: props.index,
  })),
})

const onClick = () => {
  selectedTask.value = props.task
  isOpenModal.value.detail = true
}
</script>

<template>
  <div
    v-if="props.task"
    ref="elementRef"
    class="border border-accented rounded-lg p-4 space-y-3 cursor-pointer bg-white hover:bg-black/5 transition select-none"
    :class="{ 'bg-black/5!': isDragging }"
    @click="onClick"
    @pointerdown="handleDragStart"
  >
    <div class="flex items-center justify-between pointer-events-none">
      <p class="text-xl font-semibold">
        {{ props.task.title }}
      </p>

      <task-priority-badge :priority="props.task.priority" />
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
