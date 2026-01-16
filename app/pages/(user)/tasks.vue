<script setup lang="ts">
const { getTasks } = useTask()

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

          <u-button
            size="lg"
            label="Filter"
            trailing-icon="material-symbols:filter-list-rounded"
          />
        </div>

        <u-button
          size="lg"
          label="Add New"
          trailing-icon="material-symbols:add-rounded"
        />
      </div>

      <div class="grid grid-cols-3 gap-8 grow min-h-0 overflow-y-hidden">
        <task-container type="TODO" />

        <task-container type="DOING" />

        <task-container type="DONE" />
      </div>
    </div>
  </div>
</template>
