<script setup lang="ts">
const { isOpenModal, selectedTeam } = useTeam()
</script>

<template>
  <u-modal
    v-model:open="isOpenModal.form"
    :ui="{ content: 'w-xl' }"
  >
    <template #content>
      <div class="p-5 space-y-4">
        <div class="flex items-center justify-between">
          <p class="text-xl font-semibold">
            {{ selectedTeam ? 'Update' : 'Add New' }} Team
          </p>

          <u-button
            variant="ghost"
            color="neutral"
            icon="material-symbols:close-rounded"
            class="rounded-full"
            @click="isOpenModal.form = false"
          />
        </div>

        <u-separator />

        <team-form />
      </div>
    </template>
  </u-modal>
</template>
