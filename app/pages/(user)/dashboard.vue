<script setup lang="ts">
import { format } from 'date-fns'

const $route = useRoute()
const $router = useRouter()
const { tasks, totalTasks, hasAnyTasks, completionRate, averageDuration, getTasks } = useDashboard()

const date = ref<{
  start: undefined | Date
  end: undefined | Date
}>({
  start: undefined,
  end: undefined,
})

watch(date, ({ start, end }) => {
  $router.replace({ query: {
    start: start ? format(start, 'MM-dd-yyyy') : '',
    end: end ? format(end, 'MM-dd-yyyy') : '',
  } })
}, { deep: true })

onMounted(async () => {
  const { start, end } = $route.query as { start: string, end: string }

  date.value.start = isValidDate(start)
    ? new Date(start)
    : undefined

  date.value.end = isValidDate(end)
    ? new Date(end)
    : undefined

  await getTasks()
})
</script>

<template>
  <div class="space-y-8 flex flex-col h-full">
    <page-header title="Dashboard">
      <template #suffix>
        <date-range-picker
          v-if="hasAnyTasks"
          v-model="date"
          class="w-xs"
        />
      </template>
    </page-header>

    <!-- Empty State: Show when no tasks -->
    <empty-dashboard v-if="!hasAnyTasks" />

    <!-- Normal Dashboard: Show when tasks exist -->
    <div
      v-else
      class="space-y-8 flex flex-col min-h-0 grow"
    >
      <div class="grid grid-cols-3 gap-8">
        <report-item
          title="Total Tasks"
          icon="material-symbols:task-outline-rounded"
        >
          <p class="text-2xl font-bold">
            {{ totalTasks }} Tasks
          </p>
        </report-item>

        <report-item
          title="Completion Rate"
          icon="material-symbols:check-circle-outline-rounded"
        >
          <p class="text-2xl font-bold">
            {{ completionRate }}%
          </p>
        </report-item>

        <report-item
          title="Average Duration"
          icon="material-symbols:timelapse-outline-rounded"
        >
          <p class="text-2xl font-bold">
            {{ secondsToDuration(averageDuration) }}
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
