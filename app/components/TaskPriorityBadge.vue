<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
  priority: {
    type: String as PropType<TaskPriorityType>,
    required: true,
  },
})

const label: Record<TaskPriorityType, string> = {
  LOW: 'Low',
  MEDIUM: 'Medium',
  HIGH: 'High',
}

const color: Record<TaskPriorityType, 'success' | 'warning' | 'error'> = {
  LOW: 'success',
  MEDIUM: 'warning',
  HIGH: 'error',
}
</script>

<template>
  <u-badge
    variant="soft"
    :color="color[props.priority]"
    :label="label[props.priority]"
    class="rounded-full"
  />
</template>
