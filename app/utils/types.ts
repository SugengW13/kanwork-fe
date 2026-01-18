export type TaskStatusType = 'TODO' | 'DOING' | 'DONE'
export type TaskPriorityType = 'LOW' | 'MEDIUM' | 'HIGH'

// Form Types
export interface LoginForm {
  email: string
  password: string
}

export interface RegisterForm {
  email: string
  username: string
  password: string
  passwordConfirmation: string
}

export interface TaskForm {
  title: string
  description: undefined | string
  status: undefined | TaskStatusType
  priority: undefined | TaskPriorityType
  deadlineAt: undefined | Date
  startedAt: undefined | Date
  finishedAt: undefined | Date
}

// Server Response
export interface Task {
  id: string
  title: string
  description?: string
  status: TaskStatusType
  priority: TaskPriorityType
  deadlineAt: Date
  startedAt?: Date
  finishedAt?: Date
  duration: number
}
