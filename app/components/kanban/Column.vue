<script setup lang="ts">
import { DnDOperations, useDroppable } from '@vue-dnd-kit/core'
import type { PropType } from 'vue'

const props = defineProps({
  status: {
    type: String as PropType<'TODO' | 'DOING' | 'DONE'>,
    required: true,
  },
  tasks: {
    type: Array as PropType<Task[]>,
    default: () => [],
  },
})

const { isOpenModal } = useTask()

const { elementRef, isOvered } = useDroppable({
  groups: ['kanban'],
  data: computed(() => ({
    source: props.tasks,
  })),
  events: {
    onDrop: DnDOperations.applyTransfer,
  },
})

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
</script>

<template>
  <li
    v-if="props.tasks"
    ref="elementRef"
    class="border bg-white rounded-lg border-accented flex flex-col min-h-0 transition-all"
    :class="{ '-translate-y-1 shadow-lg': isOvered }"
  >
    <div class="p-5 flex items-center justify-between">
      <div class="flex space-x-3">
        <u-tooltip
          text="Auto Sort"
          :delay-duration="100"
        >
          <u-button
            v-if="props.status === 'TODO'"
            icon="material-symbols:sort-rounded"
            @click="isOpenModal.autoSort = true"
          />
        </u-tooltip>

        <p class="text-xl font-semibold">
          {{ title[props.status] }}
        </p>
      </div>

      <div
        class="aspect-square w-8 rounded-full flex items-center justify-center"
        :class="color[props.status]"
      >
        <p class="text-sm font-medium">
          {{ props.tasks.length }}
        </p>
      </div>
    </div>

    <u-separator />

    <div class="grow min-h-0 p-5 space-y-4 flex flex-col">
      <div
        ref="droppableRef"
        class="grow overflow-y-auto space-y-4"
      >
        <kanban-item
          v-for="(task, index) in props.tasks"
          :key="task.id"
          :task="task"
          :tasks="props.tasks"
          :index="index"
        />
      </div>
    </div>
  </li>
</template>
