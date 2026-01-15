export const useDashboard = () => {
  const tasks = useState<Task[]>('dashboard:tasks', () => [])

  const getTasks = async () => {
    tasks.value = []

    for (let i = 0; i < 5; i++) {
      tasks.value.push({
        id: `${i + 1}`,
        title: `Task ${i + 1}`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie venenatis lacinia. Pellentesque et dolor.',
        status: 'Done',
        priority: 'Low',
        asignee: `Asignee ${i + 1}`,
        deadlineAt: new Date(),
        startedAt: new Date(),
        finishedAt: new Date(),
        duration: 60 * 60 * (i + 1),
      })
    }
  }

  return {
    tasks,
    getTasks,
  }
}
