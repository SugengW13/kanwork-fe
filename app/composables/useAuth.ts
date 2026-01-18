export const useAuth = () => {
  const isOpenModal = useState('auth:is-open-modal', () => ({
    logout: false,
  }))

  const login = (form: LoginForm) => {
    console.log('Login', form)
    navigateTo('/dashboard')
    toast.success('Login Successful')
  }

  const register = (form: RegisterForm) => {
    console.log('Register', form)
    toast.success('Register Successful')
  }

  const logout = () => {
    isOpenModal.value.logout = false

    console.log('Logout')
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
