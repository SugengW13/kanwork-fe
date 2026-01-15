<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'
import type { PropType } from 'vue'

const { isOpenModal, selectedTeam } = useTeam()

const props = defineProps({
  team: Object as PropType<Team>,
})

const onClickUpdate = () => {
  selectedTeam.value = props.team ?? null
  isOpenModal.value.form = true
}

const onClickDelete = () => {
  selectedTeam.value = props.team ?? null
  isOpenModal.value.delete = true
}

const items: DropdownMenuItem[] = [
  {
    label: 'Update',
    color: 'neutral',
    icon: 'material-symbols:edit-outline-rounded',
    onSelect: onClickUpdate,
  },
  {
    label: 'Delete',
    color: 'error',
    icon: 'material-symbols:delete-outline-rounded',
    onSelect: onClickDelete,
  },
]
</script>

<template>
  <div
    v-if="props.team"
    class="border h-60 border-accented rounded-lg bg-white p-5 space-y-4 flex flex-col"
  >
    <div class="flex justify-between items-center">
      <p class="text-xl font-semibold">
        {{ props.team.name }}
      </p>

      <u-dropdown-menu
        size="lg"
        :items="items"
      >
        <u-button
          color="neutral"
          variant="ghost"
          icon="material-symbols:more-vert"
          class="rounded-full"
        />
      </u-dropdown-menu>
    </div>

    <p class="text-sm text-justify text-gray-500 grow min-h-0 overflow-hidden text-ellipsis">
      {{ props.team.description }}
    </p>

    <div class="grid grid-cols-2 gap-4">
      <u-button
        block
        size="lg"
        variant="outline"
        label="Settings"
        leading-icon="material-symbols:settings-outline-rounded"
      />

      <u-button
        block
        size="lg"
        label="View Tasks"
        leading-icon="material-symbols:file-copy-outline-rounded"
      />
    </div>
  </div>
</template>
