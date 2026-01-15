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
  finishedAt: Date
  duration: number
}
