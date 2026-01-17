<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'
import { format } from 'date-fns'
import type { PropType } from 'vue'

const props = defineProps({
  task: {
    type: Object as PropType<Task | null>,
    default: null,
  },
})

const emit = defineEmits(['on-drag'])

const { isOpenModal, selectedTask } = useTask()

const dropdownItems = ref<DropdownMenuItem[]>([
  {
    color: 'neutral',
    label: 'Update',
    icon: 'material-symbols:edit-outline-rounded',
  },
  {
    color: 'error',
    label: 'Delete',
    icon: 'material-symbols:delete-outline-rounded',
  },
])

const onClick = () => {
  selectedTask.value = props.task
  isOpenModal.value.detail = true
}
</script>

<template>
  <div
    v-if="props.task"
    draggable="true"
    class="border border-accented rounded-lg p-4 space-y-3 cursor-pointer hover:bg-black/5 transition select-none"
    @click.self="onClick"
    @dragstart="emit('on-drag')"
  >
    <div class="flex items-center justify-between pointer-events-none">
      <div class="flex items-center space-x-3">
        <p class="text-xl font-semibold">
          {{ props.task.title }}
        </p>

        <task-priority-badge :priority="props.task.priority" />
      </div>

      <u-dropdown-menu
        size="lg"
        :items="dropdownItems"
      >
        <u-button
          variant="ghost"
          icon="material-symbols:more-vert"
          class="rounded-full pointer-events-auto"
        />
      </u-dropdown-menu>
    </div>

    <p class="text-sm text-gray-500 pointer-events-none line-clamp-2 text-justify">
      {{ props.task.description }}
    </p>

    <u-separator class="pointer-events-none" />

    <p class="text-sm font-medium pointer-events-none">
      Deadline: {{ format(props.task.deadlineAt, 'dd/MM/yyyy HH:mm') }}
    </p>
  </div>
</template>
