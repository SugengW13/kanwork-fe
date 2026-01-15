import { object, ref, string } from 'yup'

export const loginSchema = object({
  email: string()
    .required('Required')
    .max(20, 'Max. 20 characters'),
  password: string()
    .required('Required')
    .min(8, 'Min. 8 characters'),
})

export const registerSchema = object({
  username: string()
    .required('Required')
    .max(20, 'Max. 20 characters'),
  email: string()
    .required('Required')
    .email('Invalid email')
    .max(50, 'Max. 50 characters'),
  password: string()
    .required('Required')
    .min(8, 'Min. 8 characters'),
  passwordConfirmation: string()
    .required('Required')
    .min(8, 'Min. 8 characters')
    .oneOf([ref('password')], 'Password must match'),
})

export const teamSchema = object({
  name: string()
    .required('Required')
    .max(20, 'Max. 20 characters'),
  description: string()
    .notRequired()
    .max(100, 'Max. 100 characters'),
})
