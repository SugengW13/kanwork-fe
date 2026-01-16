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

// Server Response
export type TaskStatusType = 'TODO' | 'DOING' | 'DONE'
export type TaskPriorityType = 'LOW' | 'MEDIUM' | 'HIGH'

export interface Task {
  id: string
  title: string
  description: null | string
  status: TaskStatusType
  priority: TaskPriorityType
  deadlineAt: Date
  startedAt: null | Date
  finishedAt: null | Date
  duration: number
}
