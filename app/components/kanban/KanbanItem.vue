<script setup lang="ts" generic="T extends Record<string, unknown>">
import { useDraggable } from '@vue-dnd-kit/core'
import { computed } from 'vue'

const {
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
  <li
    ref="elementRef"
    class="vue-dnd-kanban-item"
    :class="{ 'vue-dnd-kanban-item-dragging': isDragging }"
    @pointerdown="handleDragStart"
  >
    <slot :item="item" />
  </li>
</template>
