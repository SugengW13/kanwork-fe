<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
  status: {
    type: String as PropType<'TODO' | 'DOING' | 'DONE'>,
    required: true,
  },
})

const { tasks } = useTask()
const { onDrag, onDrop } = useKanban()

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

const onDragOver = (event: DragEvent) => {
  event.preventDefault()
}
</script>

<template>
  <div class="border bg-white rounded-lg border-accented flex flex-col min-h-0">
    <div class="p-5 flex items-center justify-between">
      <p class="text-xl font-semibold">
        {{ title[props.status] }}
      </p>

      <div
        class="aspect-square w-8 rounded-full flex items-center justify-center"
        :class="color[props.status]"
      >
        <p class="text-sm font-medium">
          {{ tasks[props.status].length }}
        </p>
      </div>
    </div>

    <u-separator />

    <div class="grow min-h-0 p-5 space-y-4 flex flex-col">
      <u-button
        v-if="props.status === 'TODO'"
        block
        size="lg"
        label="Order Tasks"
      />

      <div
        class="grow overflow-y-auto space-y-4"
        @dragover="onDragOver"
        @drop.prevent="onDrop(props.status)"
      >
        <task-item
          v-for="(task, i) in tasks[props.status]"
          :key="`task-${task.status}-${task.id}`"
          :task="task"
          @on-drag="onDrag(task, i)"
        />
      </div>
    </div>
  </div>
</template>
