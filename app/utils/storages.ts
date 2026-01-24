import { useStorage } from '@vueuse/core'

export const userStorage = useStorage<null | User>('user', null)
export const taskStorage = useStorage<Task[]>('task', [])
