<script setup lang="ts">
const { isOpenModal, selectedTask, getTasks } = useTask()

const onClickAdd = () => {
  selectedTask.value = null
  isOpenModal.value.form = true
}

onMounted(async () => {
  await getTasks()
})
</script>

<template>
  <div class="space-y-8 flex flex-col h-full">
    <page-header title="Tasks" />

    <div class="space-y-8 flex flex-col min-h-0 grow">
      <div class="flex items-center justify-between">
        <div class="space-x-5">
          <u-input
            size="lg"
            placeholder="Search"
            leading-icon="material-symbols:search-rounded"
          />

          <task-filter />
        </div>

        <u-button
          size="lg"
          label="Add New"
          trailing-icon="material-symbols:add-rounded"
          @click="onClickAdd"
        />
      </div>

      <kanban-board />
    </div>
  </div>
</template>
