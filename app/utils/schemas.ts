import { object, ref, string } from 'yup'

export const loginSchema = object({
  emailOrUsername: string()
    .required('Required'),
  password: string()
    .required('Required')
    .min(8, 'Must be at least 8 characters'),
})

export const registerSchema = object({
  username: string()
    .required('Required'),
  email: string()
    .required('Required')
    .email('Invalid email'),
  password: string()
    .required('Required')
    .min(8, 'Must be at least 8 characters'),
  passwordConfirmation: string()
    .required('Required')
    .min(8, 'Must be at least 8 characters')
    .oneOf([ref('password')], 'Password must match'),
})
