<script setup lang="ts">
import { format } from 'date-fns'
</script>

<template>
  <div class="p-5 space-y-4">
    <div class="flex items-center justify-between">
      <p class="text-xl font-semibold">
        Task Title
      </p>

      <!-- TODO: Integrate with status & finished at -->
      <div class="flex space-x-3">
        <u-button
          size="lg"
          color="info"
          variant="outline"
          label="Update"
          leading-icon="material-symbols:edit-outline-rounded"
        />

        <u-button
          size="lg"
          color="error"
          variant="outline"
          label="Delete"
          leading-icon="material-symbols:delete-outline-rounded"
        />
      </div>
    </div>

    <p class="text-sm text-gray-500">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, tempora ad provident eveniet odit quo.
    </p>

    <div class="space-x-3">
      <u-badge
        variant="soft"
        label="Category"
        class="rounded-full"
      />

      <u-badge
        variant="soft"
        label="Priority"
        class="rounded-full"
      />
    </div>

    <div class="space-y-4 text-sm">
      <p>Asginee: John Doe</p>
      <p>Deadline: {{ format(new Date(), 'dd/MM/yyyy HH:mm') }}</p>
    </div>
  </div>
</template>
