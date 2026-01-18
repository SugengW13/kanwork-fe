<script setup lang="ts" generic="T extends Record<string, unknown>">
import { useDraggable } from '@vue-dnd-kit/core'
import { computed } from 'vue'

const {
  item,
  items,
  itemIndex,
  groups = ['kanban-column-body'],
} = defineProps<{
  item: T
  items: T[]
  itemIndex: number
  groups?: string[]
}>()

const { elementRef, handleDragStart, isDragging } = useDraggable({
  groups,
  data: computed(() => ({
    source: items,
    index: itemIndex,
  })),
})
</script>

<template>
  <div
    ref="elementRef"
    class="border border-accented rounded-lg p-4 space-y-3 cursor-pointer bg-white hover:bg-black/5 transition select-none"
    :class="{ 'bg-black/5!': isDragging }"
    @pointerdown="handleDragStart"
  >
    <!-- <div class="flex items-center justify-between pointer-events-none">
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
    </p> -->

    <slot :item="item" />
  </div>
</template>
