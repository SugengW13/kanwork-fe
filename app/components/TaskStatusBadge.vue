<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
  status: {
    type: String as PropType<TaskStatusType>,
    required: true,
  },
})

const label: Record<TaskStatusType, string> = {
  TODO: 'To Do',
  DOING: 'Doing',
  DONE: 'Done',
}

const color: Record<TaskStatusType, 'error' | 'info' | 'success'> = {
  TODO: 'error',
  DOING: 'info',
  DONE: 'success',
}
</script>

<template>
  <u-badge
    variant="soft"
    :color="color[props.status]"
    :label="label[props.status]"
    class="rounded-full"
  />
</template>
