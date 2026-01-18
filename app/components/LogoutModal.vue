<script setup lang="ts">
const { isOpenModal, logout } = useAuth()
</script>

<template>
  <u-modal
    v-model:open="isOpenModal.logout"
    :ui="{ content: 'w-lg' }"
  >
    <template #content>
      <div class="p-5 space-y-4 flex flex-col items-center">
        <p class="text-xl text-center font-semibold">
          Logout
        </p>

        <div class="aspect-square w-15 flex items-center justify-center rounded-full bg-error/10">
          <u-icon
            size="40"
            name="material-symbols:error-outline-rounded"
            class="text-error"
          />
        </div>

        <p class="text-center text-gray-500 text-sm">
          Are you sure want to logout?
        </p>

        <div class="grid grid-cols-2 gap-4 w-full">
          <u-button
            size="lg"
            label="Cancel"
            class="justify-center"
            @click="isOpenModal.logout = false"
          />

          <u-button
            size="lg"
            label="Confirm"
            variant="outline"
            class="justify-center"
            @click="logout"
          />
        </div>
      </div>
    </template>
  </u-modal>
</template>
