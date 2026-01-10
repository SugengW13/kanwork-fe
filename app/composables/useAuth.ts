export const useAuth = () => {
  const login = (form: LoginForm) => {
    // Login

    console.log(form)
    toast.success('Login Successful')
  }

  const register = (form: RegisterForm) => {
    // Register

    console.log(form)
    toast.success('Register Successful')
  }

  return {
    login,
    register,
  }
}
