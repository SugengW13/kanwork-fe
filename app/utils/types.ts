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

export interface TeamForm {
  name: string
  description: undefined | string
}

export interface ContributorForm {
  username: string
  email: string
  password: string
  passwordConfirmation: string
}

// Server Response
export interface Team {
  id: string
  name: string
  description: string
}

export interface Task {
  id: string
  title: string
  description: string
  status: 'Todo' | 'Doing' | 'Done'
  priority: 'Low' | 'Medium' | 'High'
  asignee: string
  deadlineAt: Date
  startedAt: Date
  finishedAt: Date
  duration: number
}

export interface Contributor {
  id: string
  username: string
  email: string
  totalTasks: number
}
