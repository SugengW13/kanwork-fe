export const useAuth = () => {
  const isOpenModal = useState('auth:is-open-modal', () => ({
    logout: false,
  }))

  const login = (form: LoginForm) => {
    try {
      const isValidUser = (
        form.email === userStorage.value?.email
        && form.password === userStorage.value.password
      )

      if (!isValidUser)
        throw new Error()

      toast.success('Login Successful')
      navigateTo('/dashboard')
    }
    catch {
      toast.error('Login Failed')
    }
  }

  const register = (form: RegisterForm) => {
    try {
      const { username, email, password } = form
      userStorage.value = { username, email, password }

      toast.success('Register Successful')
      navigateTo('/login')
    }
    catch {
      toast.error('Register Failed')
    }
  }

  const logout = () => {
    isOpenModal.value.logout = false

    navigateTo('/login')
    toast.success('Logout Successful')
  }

  return {
    isOpenModal,
    login,
    register,
    logout,
  }
}
