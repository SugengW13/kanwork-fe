import { differenceInSeconds } from 'date-fns'

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

  // Search and filter state synced with URL
  const route = useRoute()
  const router = useRouter()

  const searchQuery = computed({
    get: () => (route.query.search as string) || '',
    set: (value: string) => {
      router.push({
        query: { ...route.query, search: value || undefined },
      })
    },
  })

  const filterState = computed({
    get: () => ({
      priority: route.query.priority
        ? (Array.isArray(route.query.priority)
            ? route.query.priority
            : [route.query.priority])
        : [],
      deadlineAt: route.query.deadlineFrom && route.query.deadlineTo
        ? { start: new Date(route.query.deadlineFrom as string), end: new Date(route.query.deadlineTo as string) }
        : undefined,
      startedAt: route.query.startedFrom && route.query.startedTo
        ? { start: new Date(route.query.startedFrom as string), end: new Date(route.query.startedTo as string) }
        : undefined,
      finishedAt: route.query.finishedFrom && route.query.finishedTo
        ? { start: new Date(route.query.finishedFrom as string), end: new Date(route.query.finishedTo as string) }
        : undefined,
    }),
    set: (value: any) => {
      const query: any = { ...route.query }

      // Priority
      if (value.priority && value.priority.length > 0) {
        query.priority = value.priority
      }
      else {
        delete query.priority
      }

      // Deadline
      if (value.deadlineAt) {
        query.deadlineFrom = value.deadlineAt.start.toISOString()
        query.deadlineTo = value.deadlineAt.end.toISOString()
      }
      else {
        delete query.deadlineFrom
        delete query.deadlineTo
      }

      // Started At
      if (value.startedAt) {
        query.startedFrom = value.startedAt.start.toISOString()
        query.startedTo = value.startedAt.end.toISOString()
      }
      else {
        delete query.startedFrom
        delete query.startedTo
      }

      // Finished At
      if (value.finishedAt) {
        query.finishedFrom = value.finishedAt.start.toISOString()
        query.finishedTo = value.finishedAt.end.toISOString()
      }
      else {
        delete query.finishedFrom
        delete query.finishedTo
      }

      router.push({ query })
    },
  })

  // Watch for URL changes and re-filter tasks
  watch([searchQuery, filterState], () => {
    getTasks()
  }, { deep: true })

  // Filter tasks based on search and filter criteria (AND logic)
  const applyFilters = (allTasks: Task[]): Task[] => {
    let filtered = allTasks

    // Search filter (title OR description)
    if (searchQuery.value) {
      const search = searchQuery.value.toLowerCase()
      filtered = filtered.filter(task =>
        task.title.toLowerCase().includes(search)
        || (task.description?.toLowerCase().includes(search) ?? false),
      )
    }

    // Priority filter
    const priorities = filterState.value.priority
    if (priorities && priorities.length > 0) {
      filtered = filtered.filter(task => priorities.includes(task.priority))
    }

    // Deadline filter
    if (filterState.value.deadlineAt) {
      const { start, end } = filterState.value.deadlineAt
      filtered = filtered.filter((task) => {
        const deadline = new Date(task.deadlineAt)
        return deadline >= start && deadline <= end
      })
    }

    // Started At filter
    if (filterState.value.startedAt) {
      const { start, end } = filterState.value.startedAt
      filtered = filtered.filter((task) => {
        if (!task.startedAt) return false
        const started = new Date(task.startedAt)
        return started >= start && started <= end
      })
    }

    // Finished At filter
    if (filterState.value.finishedAt) {
      const { start, end } = filterState.value.finishedAt
      filtered = filtered.filter((task) => {
        if (!task.finishedAt) return false
        const finished = new Date(task.finishedAt)
        return finished >= start && finished <= end
      })
    }

    return filtered
  }

  const getTasks = () => {
    // Get all tasks from storage
    const allTasks = taskStorage.value

    // Apply filters
    const filteredTasks = applyFilters(allTasks)

    // Group by status
    tasks.value = filteredTasks.reduce((result: Record<TaskStatusType, Task[]>, task: Task) => {
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
      useDashboard().getTasks()
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

      const duration = startedAt && finishedAt
        ? differenceInSeconds(finishedAt, startedAt)
        : 0

      taskStorage.value[taskIndex] = {
        ...task,
        status,
        startedAt,
        finishedAt,
        duration,
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
        a: differenceInSeconds(new Date(a.deadlineAt), new Date()),
        b: differenceInSeconds(new Date(b.deadlineAt), new Date()),
      }

      return (timeDiff.a * priorityPoint[a.priority]) - (timeDiff.b * priorityPoint[b.priority])
    })

    isOpenModal.value.autoSort = false
  }

  const resetSearch = () => {
    const query = { ...route.query }
    delete query.search
    router.push({ query })
  }

  const resetFilters = () => {
    const query = { ...route.query }
    delete query.priority
    delete query.deadlineFrom
    delete query.deadlineTo
    delete query.startedFrom
    delete query.startedTo
    delete query.finishedFrom
    delete query.finishedTo
    router.push({ query })
  }

  const resetAll = () => {
    const query = { ...route.query }
    // Remove search
    delete query.search
    // Remove filters
    delete query.priority
    delete query.deadlineFrom
    delete query.deadlineTo
    delete query.startedFrom
    delete query.startedTo
    delete query.finishedFrom
    delete query.finishedTo
    router.push({ query })
  }

  return {
    isOpenModal,
    tasks,
    selectedTask,
    searchQuery,
    filterState,
    getTasks,
    createTask,
    updateTask,
    deleteTask,
    updateStatus,
    autoSortTask,
    resetSearch,
    resetFilters,
    resetAll,
  }
}
