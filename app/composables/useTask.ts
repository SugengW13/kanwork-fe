import { differenceInMinutes, differenceInSeconds } from 'date-fns'

export const useTask = () => {
  const isOpenModal = useState('task:is-open-modal', () => ({
    detail: false,
    form: false,
    delete: false,
    autoSort: false,
  }))

  const tasks = useState<Record<TaskStatusType, Task[]>>('tasks:task', () => ({
    TODO: [],
    DOING: [],
    DONE: [],
  }))

  const selectedTask = useState<null | Task>('task:selected-task', () => null)

  const getTasks = () => {
    tasks.value = taskStorage.value.reduce((result: Record<TaskStatusType, Task[]>, task: Task) => {
      switch (task.status) {
        case 'TODO':
          result.TODO.push(task)
          break
        case 'DOING':
          result.DOING.push(task)
          break
        case 'DONE':
          result.DONE.push(task)
          break
        default:
          return result
      }

      return result
    }, { TODO: [], DOING: [], DONE: [] })
  }

  const createTask = (form: TaskForm) => {
    try {
      if (!form.status || !form.priority || !form.deadlineAt)
        throw new Error('Invalid Form')

      const duration = form.startedAt && form.finishedAt
        ? differenceInSeconds(form.finishedAt, form.startedAt)
        : 0

      const taskForm: Task = {
        id: String(new Date().getTime()),
        title: form.title,
        description: form.description,
        status: form.status,
        priority: form.priority,
        deadlineAt: form.deadlineAt,
        startedAt: form.startedAt,
        finishedAt: form.finishedAt,
        duration,
      }

      taskStorage.value.push(taskForm)

      toast.success('Create Task Successful')
      isOpenModal.value.form = false
      getTasks()
    }
    catch (e) {
      toast.error('Create Task Failed')
      console.error(e)
    }
  }

  const updateTask = (id: string, form: TaskForm) => {
    try {
      const taskIndex = taskStorage.value.findIndex(t => t.id === id) ?? null

      if (taskIndex === -1)
        throw new Error('Task Not Found')

      if (!form.status || !form.priority || !form.deadlineAt)
        throw new Error('Invalid Form')

      const duration = form.startedAt && form.finishedAt
        ? differenceInSeconds(form.finishedAt, form.startedAt)
        : 0

      const taskForm: Task = {
        id: String(new Date().getTime()),
        title: form.title,
        description: form.description,
        status: form.status,
        priority: form.priority,
        deadlineAt: form.deadlineAt,
        startedAt: form.startedAt,
        finishedAt: form.finishedAt,
        duration,
      }

      taskStorage.value[taskIndex] = { ...taskForm }

      toast.success('Update Task Successful')
      isOpenModal.value.form = false
      getTasks()
    }
    catch (e) {
      toast.error('Update Task Failed')
      console.error(e)
    }
  }

  const deleteTask = (id: string) => {
    try {
      const taskIndex = taskStorage.value.findIndex(t => t.id === id) ?? null

      if (taskIndex === -1)
        throw new Error('Task Not Found')

      taskStorage.value.splice(taskIndex, 1)

      toast.success('Delete Task Successful')
      isOpenModal.value.delete = false
      getTasks()
    }
    catch (e) {
      toast.error('Delete Task Failed')
      console.error(e)
    }
  }

  const updateStatus = (id: string, status: TaskStatusType) => {
    try {
      const taskIndex = taskStorage.value.findIndex(t => t.id === id) ?? null

      if (taskIndex === -1)
        throw new Error('Task Not Found')

      const task = taskStorage.value[taskIndex]
      if (!task)
        throw new Error('Task Not Found')

      let startedAt: undefined | Date = undefined
      let finishedAt: undefined | Date = undefined

      switch (status) {
        case 'TODO':
          break
        case 'DOING':
          startedAt = new Date()
          break
        case 'DONE':
          startedAt = task.startedAt ?? new Date()
          finishedAt = new Date()
          break
      }

      taskStorage.value[taskIndex] = {
        ...task,
        status,
        startedAt,
        finishedAt,
      }

      getTasks()
    }
    catch (e) {
      toast.error('Update Status Failed')
      console.error(e)
    }
  }

  const autoSortTask = () => {
    const priorityPoint: Record<TaskPriorityType, number> = {
      LOW: 3,
      MEDIUM: 2,
      HIGH: 1,
    }

    tasks.value.TODO.sort((a, b) => {
      const timeDiff = {
        a: differenceInMinutes(new Date(a.deadlineAt), new Date()),
        b: differenceInMinutes(new Date(b.deadlineAt), new Date()),
      }

      return (timeDiff.a * priorityPoint[a.priority]) - (timeDiff.b * priorityPoint[b.priority])
    })

    isOpenModal.value.autoSort = false
  }

  return {
    isOpenModal,
    tasks,
    selectedTask,
    getTasks,
    createTask,
    updateTask,
    deleteTask,
    updateStatus,
    autoSortTask,
  }
}
