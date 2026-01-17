export const useTask = () => {
  const isOpenModal = useState('task:is-open-modal', () => ({
    detail: false,
    form: false,
  }))

  const tasks = useState <Record<TaskStatusType, Task[]>>('tasks:task', () => ({
    TODO: [],
    DOING: [],
    DONE: [],
  }))

  const selectedTask = useState<null | Task>('task:selected-task', () => null)

  const getTasks = () => {
    tasks.value.TODO = []
    tasks.value.DOING = []
    tasks.value.DONE = []

    for (let i = 0; i < 10; i++) {
      tasks.value.TODO.push({
        id: `task-todo-${i + 1}`,
        title: `Task To Do ${i + 1}`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie venenatis lacinia. Pellentesque et dolor.',
        status: 'TODO',
        priority: 'LOW',
        deadlineAt: new Date(),
        startedAt: null,
        finishedAt: null,
        duration: 60 * 60 * (i + 1),
      })

      tasks.value.DOING.push({
        id: `task-doing-${i + 1}`,
        title: `Task Doing ${i + 1}`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie venenatis lacinia. Pellentesque et dolor.',
        status: 'DOING',
        priority: 'MEDIUM',
        deadlineAt: new Date(),
        startedAt: new Date(),
        finishedAt: null,
        duration: 60 * 60 * (i + 1),
      })

      tasks.value.DONE.push({
        id: `task-done-${i + 1}`,
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
