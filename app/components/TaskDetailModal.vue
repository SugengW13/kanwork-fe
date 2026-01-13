<script setup lang="ts">
const { isOpenModal } = useTask()
</script>

<template>
  <u-modal
    v-model:open="isOpenModal.detail"
    :ui="{ content: 'w-xl' }"
  >
    <template #content>
      <task-detail />
    </template>
  </u-modal>
</template>
