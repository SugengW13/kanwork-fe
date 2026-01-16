export const useTask = () => {
  const isOpenModal = useState('task:is-open-modal', () => ({
    detail: false,
    form: false,
  }))

  const tasks = useState<{
    todo: Task[]
    doing: Task[]
    done: Task[]
  }>('tasks:task', () => ({
    todo: [],
    doing: [],
    done: [],
  }))

  const selectedTask = useState<null | Task>('task:selected-task', () => null)

  const getTasks = () => {
    tasks.value.todo = []
    tasks.value.doing = []
    tasks.value.done = []

    for (let i = 0; i < 5; i++) {
      tasks.value.todo.push({
        id: `${i + 1}`,
        title: `Task To Do ${i + 1}`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie venenatis lacinia. Pellentesque et dolor.',
        status: 'TODO',
        priority: 'LOW',
        deadlineAt: new Date(),
        startedAt: null,
        finishedAt: null,
        duration: 60 * 60 * (i + 1),
      })

      tasks.value.doing.push({
        id: `${i + 1}`,
        title: `Task Doing ${i + 1}`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie venenatis lacinia. Pellentesque et dolor.',
        status: 'DOING',
        priority: 'MEDIUM',
        deadlineAt: new Date(),
        startedAt: new Date(),
        finishedAt: null,
        duration: 60 * 60 * (i + 1),
      })

      tasks.value.done.push({
        id: `${i + 1}`,
        title: `Task Done ${i + 1}`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie venenatis lacinia. Pellentesque et dolor.',
        status: 'DONE',
        priority: 'HIGH',
        deadlineAt: new Date(),
        startedAt: new Date(),
        finishedAt: new Date(),
        duration: 60 * 60 * (i + 1),
      })
    }
  }

  return {
    isOpenModal,
    tasks,
    selectedTask,
    getTasks,
  }
}
