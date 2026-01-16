<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
  type: {
    type: String as PropType<'TODO' | 'DOING' | 'DONE'>,
    required: true,
  },
})

const { tasks } = useTask()

const title: Record<'TODO' | 'DOING' | 'DONE', string> = {
  TODO: 'To Do',
  DOING: 'Doing',
  DONE: 'Done',
}

const color: Record<'TODO' | 'DOING' | 'DONE', string> = {
  TODO: 'bg-warning/15 text-warning',
  DOING: 'bg-info/15 text-info',
  DONE: 'bg-success/15 text-success',
}

const totalTasks = computed(() => {
  switch (props.type) {
    case 'TODO': return tasks.value.todo.length
    case 'DOING': return tasks.value.doing.length
    case 'DONE': return tasks.value.done.length
    default: return 0
  }
})

const taskData = computed(() => {
  switch (props.type) {
    case 'TODO': return tasks.value.todo
    case 'DOING': return tasks.value.doing
    case 'DONE': return tasks.value.done
    default: return []
  }
})
</script>

<template>
  <div class="border bg-white rounded-lg border-accented flex flex-col min-h-0">
    <div class="p-5 flex items-center justify-between">
      <p class="text-xl font-semibold">
        {{ title[props.type] }}
      </p>

      <div
        class="aspect-square w-8 rounded-full flex items-center justify-center"
        :class="color[props.type]"
      >
        <p class="text-sm font-medium">
          {{ totalTasks }}
        </p>
      </div>
    </div>

    <u-separator />

    <div class="grow min-h-0 p-5 space-y-4 flex flex-col">
      <u-button
        v-if="props.type === 'TODO'"
        block
        size="lg"
        label="Order Tasks"
      />

      <div class="grow overflow-y-auto space-y-4">
        <task-item
          v-for="task in taskData"
          :key="`task-${task.status}-${task.id}`"
          :task="task"
        />
      </div>
    </div>
  </div>
</template>
