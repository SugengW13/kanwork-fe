<script setup lang="ts" generic="T extends Record<string, unknown>, S extends any[]">
import { DnDOperations, useDroppable } from '@vue-dnd-kit/core'

const {
  bodyGroups = ['kanban-column-body'],
  bodySource,
  column,
} = defineProps<{
  bodyGroups?: string[]
  bodySource: S
  column: T
}>()

const { elementRef, isOvered } = useDroppable({
  groups: bodyGroups,
  data: computed(() => ({
    source: bodySource,
  })),
  events: {
    onDrop: DnDOperations.applyTransfer,
  },
})
</script>

<template>
  <li
    ref="elementRef"
    class="border bg-white rounded-lg border-accented flex flex-col min-h-0 transition-transform"
    :class="{ '-translate-y-1 shadow-lg': isOvered }"
  >
    <div class="p-5 flex items-center justify-between">
      <p class="text-xl font-semibold">
        {{ column.title }}
      </p>

      <!-- <div
        class="aspect-square w-8 rounded-full flex items-center justify-center"
        :class="color[props.status]"
      >
        <p class="text-sm font-medium">
          {{ tasks.length }}
        </p>
      </div> -->
    </div>

    <u-separator />

    <div class="grow min-h-0 p-5 space-y-4 flex flex-col">
      <!-- <u-button
        v-if="props.status === 'TODO'"
        block
        size="lg"
        label="Order Tasks"
      /> -->

      <div
        ref="droppableRef"
        class="grow overflow-y-auto space-y-4"
      >
        <slot name="default" />
      </div>
    </div>
  </li>
</template>
