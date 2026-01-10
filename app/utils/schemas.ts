import { object, string } from 'yup'

export const loginSchema = object({
  emailOrUsername: string().required('Required'),
  password: string().required('Required'),
})

export const registerSchema = object({

})
