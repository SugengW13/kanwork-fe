<script setup lang="ts">
const { isOpenModal } = useTask()
</script>

<template>
  <u-modal v-model:open="isOpenModal.detail">
    <template #content>
      <task-detail />
    </template>
  </u-modal>
</template>
