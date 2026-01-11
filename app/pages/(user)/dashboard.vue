<script setup lang="ts">
const $route = useRoute()
const $router = useRouter()
const { tasks, getTasks } = useDashboard()

const selectedType = ref<'WEEKLY' | 'MONTHLY'>('WEEKLY')

watch(selectedType, () => {
  $router.replace({
    query: { selected_type: selectedType.value },
  })
}, { immediate: true })

onMounted(async () => {
  selectedType.value = ($route.query.selected_type as 'WEEKLY' | 'MONTHLY') || 'WEEKLY'
  await getTasks()
})
</script>

<template>
  <div class="space-y-8 flex flex-col h-full">
    <div class="flex justify-between items-center">
      <p class="text-2xl font-semibold">
        Dashboard
      </p>

      <u-field-group size="lg">
        <u-button
          label="Weekly"
          :variant="selectedType === 'WEEKLY' ? 'solid' : 'outline'"
          @click="selectedType = 'WEEKLY'"
        />

        <u-button
          label="Monthly"
          :variant="selectedType === 'MONTHLY' ? 'solid' : 'outline'"
          @click="selectedType = 'MONTHLY'"
        />
      </u-field-group>
    </div>

    <div class="space-y-8 flex flex-col min-h-0 grow">
      <div class="grid grid-cols-3 gap-8">
        <item-report
          title="Total Tasks"
          icon="material-symbols:task-outline-rounded"
        >
          <p class="text-2xl font-bold">
            10 Tasks
          </p>
        </item-report>

        <item-report
          title="Completion Rate"
          icon="material-symbols:check-circle-outline-rounded"
        >
          <p class="text-2xl font-bold">
            100%
          </p>
        </item-report>

        <item-report
          title="Average Duration"
          icon="material-symbols:timelapse-outline-rounded"
        >
          <p class="text-2xl font-bold">
            1.5 Days
          </p>
        </item-report>
      </div>

      <div class="grid grid-cols-3 gap-8 min-h-0 grow">
        <item-report
          title="Task History"
          icon="material-symbols:history-rounded"
          class="col-span-2"
        >
          <div class="space-y-5 overflow-y-auto grow min-h-0">
            <item-task-history
              v-for="(task, i) in tasks"
              :key="`task-${task.id || i}`"
              :task="task"
            />
          </div>
        </item-report>

        <item-report
          title="Tasks by Category"
          icon="material-symbols:pie-chart-outline"
        >
          <div class="flex flex-col items-center justify-center grow overflow-y-auto">
            <chart-task />
          </div>
        </item-report>
      </div>
    </div>
  </div>
</template>
