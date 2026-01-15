<script setup lang="ts">
const { isOpenModal, selectedTeam, deleteTeam } = useTeam()
</script>

<template>
  <u-modal
    v-model:open="isOpenModal.delete"
    :ui="{ content: 'w-xl' }"
  >
    <template #content>
      <div
        v-if="selectedTeam"
        class="p-5 space-y-4 flex flex-col items-center"
      >
        <p class="text-xl text-center font-semibold">
          Delete Team
        </p>

        <div class="aspect-square w-15 flex items-center justify-center rounded-full bg-error/10">
          <u-icon
            size="40"
            name="material-symbols:error-outline-rounded"
            class="text-error"
          />
        </div>

        <p class="text-center text-sm text-gray-500">
          Are you sure want to delete
          <span class="text-black font-medium">
            {{ selectedTeam.name }}
          </span>
          ?
        </p>

        <div class="grid grid-cols-2 gap-4 w-full">
          <u-button
            size="lg"
            label="Cancel"
            class="justify-center"
            @click="isOpenModal.delete = false"
          />

          <u-button
            size="lg"
            label="Confirm"
            variant="outline"
            class="justify-center"
            @click="deleteTeam(selectedTeam.id)"
          />
        </div>
      </div>
    </template>
  </u-modal>
</template>
