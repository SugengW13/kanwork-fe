export const useReporting = () => {
  const tasks = useState<Task[]>('reporting:tasks', () => Array(10).fill({
    id: '',
    title: 'Task Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie venenatis lacinia. Pellentesque et dolor.',
    category: 'Category',
    priority: 'Priority',
    asignee: 'John Doe',
    finishedAt: new Date(),
    duration: 60 * 60,
  }))

  return {
    tasks,
  }
}
