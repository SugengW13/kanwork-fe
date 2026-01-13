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
    <page-header title="Dashboard">
      <template #suffix>
        <date-range-picker class="w-xs" />
      </template>
    </page-header>

    <div class="space-y-8 flex flex-col min-h-0 grow">
      <div class="grid grid-cols-3 gap-8">
        <report-item
          title="Total Tasks"
          icon="material-symbols:task-outline-rounded"
        >
          <p class="text-2xl font-bold">
            10 Tasks
          </p>
        </report-item>

        <report-item
          title="Completion Rate"
          icon="material-symbols:check-circle-outline-rounded"
        >
          <p class="text-2xl font-bold">
            100%
          </p>
        </report-item>

        <report-item
          title="Average Duration"
          icon="material-symbols:timelapse-outline-rounded"
        >
          <p class="text-2xl font-bold">
            1.5 Days
          </p>
        </report-item>
      </div>

      <div class="grid grid-cols-3 gap-8 min-h-0 grow">
        <report-item
          title="Task History"
          icon="material-symbols:history-rounded"
          class="col-span-2"
        >
          <div class="space-y-5 overflow-y-auto grow min-h-0">
            <task-history-item
              v-for="(task, i) in tasks"
              :key="`task-${task.id || i}`"
              :task="task"
            />
          </div>
        </report-item>

        <report-item
          title="Tasks by Priority"
          icon="material-symbols:pie-chart-outline"
        >
          <div class="flex flex-col items-center justify-center grow overflow-y-auto">
            <task-chart />
          </div>
        </report-item>
      </div>
    </div>
  </div>
</template>
