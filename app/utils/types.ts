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
