// Form Types
export interface LoginForm {
  emailOrUsername: string
  password: string
}

export interface RegisterForm {
  email: string
  username: string
  password: string
  passwordConfirmation: string
}

// Server Response
export interface Task {
  id: string
  title: string
  description: string
  category: string
  priority: string
  asignee: string
  finishedAt: Date
  duration: number
}
