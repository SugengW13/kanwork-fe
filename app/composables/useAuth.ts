export const useAuth = () => {
  const login = (form: LoginForm) => {
    // Login
    console.log(form)
    toast.success('Login Successful')
  }

  return {
    login,
  }
}
