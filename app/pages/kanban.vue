<script setup>
import { useDraggable } from '@vue-dnd-kit/core'

const {
  elementRef,
  isDragging,
  isOvered,
  isAllowed,
  handleDragStart,
  pointerPosition,
  id,
} = useDraggable({
  id: 'test-draggable',
  // Additional options can be specified here
})
</script>

<template>
  <div
    ref="elementRef"
    :class="{ dragging: isDragging }"
    @pointerdown="handleDragStart"
  >
    Drag me to test installation
    <div v-if="isDragging">
      Current position: {{ pointerPosition.current.value.x }},
      {{ pointerPosition.current.value.y }}
    </div>
  </div>
</template>

<style scoped>
  div {
    padding: 20px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    cursor: grab;
    user-select: none;
    width: 200px;
  }

  .dragging {
    opacity: 0.5;
    cursor: grabbing;
    background-color: #e0e0e0;
  }
</style>
