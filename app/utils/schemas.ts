import { date, object, ref, string } from 'yup'

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

export const taskSchema = object({
  title: string()
    .required('Required')
    .max(20, 'Max. 20 characters'),
  description: string()
    .notRequired()
    .max(200, 'Max. 200 characters'),
  status: string()
    .required('Required')
    .oneOf(['TODO', 'DOING', 'DONE'], 'Invalid status'),
  priority: string()
    .required('Required')
    .oneOf(['LOW', 'MEDIUM', 'HIGH'], 'Invalid priority'),
  deadlineAt: date()
    .required('Required'),
  startedAt: date()
    .when('status', {
      is: (value: TaskStatusType) => value === 'DONE',
      then: schema => schema
        .max(ref('finishedAt'), 'Must be before finish date'),
    })
    .when('status', {
      is: (value: TaskStatusType) => (value === 'DOING' || value === 'DONE'),
      then: schema => schema
        .required('Required'),
      otherwise: schema => schema
        .oneOf([undefined], 'Must be empty'),
    }),
  finishedAt: date()
    .when('status', {
      is: (value: TaskStatusType) => value === 'DONE',
      then: schema => schema
        .required('Required')
        .min(ref('startedAt'), 'Must be after start date'),
      otherwise: schema => schema
        .oneOf([undefined], 'Must be empty'),
    }),
})
