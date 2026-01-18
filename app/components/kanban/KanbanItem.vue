<script setup lang="ts" generic="T extends Record<string, unknown>">
import { useDraggable } from '@vue-dnd-kit/core'
import { computed } from 'vue'

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

const { elementRef, handleDragStart, isDragging } = useDraggable({
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
    class="border border-accented rounded-lg p-4 space-y-3 cursor-pointer bg-white hover:bg-primary/5 transition select-none"
    :class="{ 'bg-primary/5!': isDragging }"
    @pointerdown.self="handleDragStart"
  >
    <div class="flex items-center justify-between pointer-events-none">
      <p class="text-xl font-semibold">
        {{ props.task.title }}
      </p>

      <task-priority-badge :priority="props.task.priority" />
    </div>

    <p class="text-sm text-gray-500 line-clamp-2 text-justify pointer-events-none">
      {{ props.task.description }}
    </p>

    <u-separator class="pointer-events-none" />

    <div class="flex items-center justify-between pointer-events-none">
      <p class="text-sm font-medium">
        Deadline: {{ formatDate(props.task.deadlineAt, 'dd/MM/yyyy HH:mm') }}
      </p>

      <u-button
        size="sm"
        variant="link"
        label="Detail"
        trailing-icon="material-symbols:chevron-right-rounded"
        class="pointer-events-auto"
        @click="onClick"
      />
    </div>
  </div>
</template>
