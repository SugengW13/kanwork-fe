export const useDashboard = () => {
  const tasks = useState<Task[]>('dashboard:tasks', () => [])

  const tasksDone = computed(() => {
    return taskStorage.value.filter(t => t.status === 'DONE')
  })

  const totalTasks = computed(() => tasksDone.value.length)

  const hasAnyTasks = computed(() => taskStorage.value.length > 0)

  const completionRate = computed(() => {
    if (tasks.value.length === 0) return 0
    return Math.round((tasksDone.value.length / tasks.value.length) * 100)
  })

  const averageDuration = computed(() => {
    if (tasksDone.value.length === 0) return 0
    return tasksDone.value.reduce((sum, t) => sum + t.duration, 0) / tasksDone.value.length
  })

  const tasksByPriority = computed(() => {
    return taskStorage.value.reduce((result: { low: number, medium: number, high: number }, task) => {
      switch (task.priority) {
        case 'LOW':
          result.low += 1
          break
        case 'MEDIUM':
          result.medium += 1
          break
        case 'HIGH':
          result.high += 1
          break
      }
      return result
    }, { low: 0, medium: 0, high: 0 })
  })

  const getTasks = async () => {
    tasks.value = taskStorage.value.filter(t => t.status === 'DONE')
  }

  return {
    tasks,
    totalTasks,
    hasAnyTasks,
    completionRate,
    averageDuration,
    tasksByPriority,
    getTasks,
  }
}
