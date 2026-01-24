export const useDashboard = () => {
  const tasks = useState<Task[]>('dashboard:tasks', () => [])

  const tasksDone = computed(() => {
    return taskStorage.value.filter(t => t.status === 'DONE')
  })

  const totalTasks = computed(() => tasksDone.value.length)

  const completionRate = computed(() => {
    return (tasksDone.value.length / tasks.value.length) * 100
  })

  const averageDuration = computed(() => {
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
    completionRate,
    averageDuration,
    tasksByPriority,
    getTasks,
  }
}
