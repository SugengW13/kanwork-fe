const { add } = useToast()

export const toast = {
  success: (title: string, icon?: string) => {
    add({
      title,
      color: 'success',
      icon: icon ?? 'material-symbols:check-circle-outline-rounded',
    })
  },
  info: (title: string, icon?: string) => {
    add({
      title,
      color: 'info',
      icon: icon ?? 'material-symbols:info-outline-rounded',
    })
  },
  warning: (title: string, icon?: string) => {
    add({
      title,
      color: 'warning',
      icon: icon ?? 'material-symbols:warning-outline-rounded',
    })
  },
  error: (title: string, icon?: string) => {
    add({
      title,
      color: 'error',
      icon: icon ?? 'material-symbols:error-outline-rounded',
    })
  },
}
