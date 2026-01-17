export const useKanban = () => {
  const { tasks } = useTask()

  const draggedTask = useState<null | Task>('kanban:dragged-task', () => null)
  const draggedTaskIndex = useState<number>('kanban:dragged-task-index', () => 0)

  const onDrag = (task: null | Task, index: number) => {
    if (!task) return

    draggedTask.value = task
    draggedTaskIndex.value = index
  }

  const onDrop = (status: TaskStatusType) => {
    if (!draggedTask.value) return
    if (status === draggedTask.value.status) return

    tasks.value[status].push(draggedTask.value)

    const oldStatus = draggedTask.value.status
    draggedTask.value.status = status

    tasks.value[oldStatus].splice(draggedTaskIndex.value, 1)
  }

  return {
    onDrag,
    onDrop,
  }
}
