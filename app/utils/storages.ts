import { useStorage, StorageSerializers } from '@vueuse/core'

export const userStorage = useStorage<null | User>(
  'user',
  null,
  undefined,
  { serializer: StorageSerializers.object },
)
export const taskStorage = useStorage<Task[]>(
  'task',
  [],
  undefined,
  { serializer: StorageSerializers.object },
)

// Clean up corrupted localStorage on first load
if (import.meta.client) {
  const raw = localStorage.getItem('user')
  if (raw === '[object Object]') {
    localStorage.removeItem('user')
  }
  const rawTask = localStorage.getItem('task')
  if (rawTask === '[object Object]') {
    localStorage.removeItem('task')
  }
}
