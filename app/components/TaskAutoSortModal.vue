<script setup lang="ts">
const { isOpenModal, autoSortTask } = useTask()
</script>

<template>
  <u-modal
    v-model:open="isOpenModal.autoSort"
    :ui="{ content: 'w-lg' }"
  >
    <template #content>
      <div class="p-5 space-y-4 flex flex-col items-center">
        <p class="text-xl text-center font-semibold">
          Auto Sort Task
        </p>

        <div class="aspect-square w-15 flex items-center justify-center rounded-full bg-info/10">
          <u-icon
            size="40"
            name="material-symbols:info-outline-rounded"
            class="text-info"
          />
        </div>

        <p class="text-center text-gray-500 text-sm">
          Tasks will be automatically sorted by priority and deadline.<br>
          You can manually reorder them anytime.
        </p>

        <div class="grid grid-cols-2 gap-4 w-full">
          <u-button
            size="lg"
            label="Cancel"
            variant="outline"
            class="justify-center"
            @click="isOpenModal.autoSort = false"
          />

          <u-button
            size="lg"
            label="Confirm"
            class="justify-center"
            @click="autoSortTask"
          />
        </div>
      </div>
    </template>
  </u-modal>
</template>
