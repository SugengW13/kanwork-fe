<script setup lang="ts">
const items = [
  {
    label: 'Update',
    color: 'info',
    icon: 'material-symbols:edit-outline-rounded',
  },
  {
    label: 'Delete',
    color: 'error',
    icon: 'material-symbols:delete-outline-rounded',
  },
]
</script>

<template>
  <div class="border h-60 border-accented rounded-lg bg-white p-5 space-y-4 flex flex-col">
    <div class="flex justify-between items-center">
      <p class="text-xl font-semibold">
        Team Name
      </p>

      <u-dropdown-menu
        size="lg"
        :items="items"
      >
        <u-button
          variant="ghost"
          icon="material-symbols:more-vert"
          class="rounded-full"
        />
      </u-dropdown-menu>
    </div>

    <p class="text-sm text-justify text-gray-500 grow min-h-0 overflow-hidden text-ellipsis">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem cupiditate voluptas, adipisci soluta minima autem dolores, recusandae dolor iste mollitia dolorem porro, reiciendis aliquid perferendis.
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
