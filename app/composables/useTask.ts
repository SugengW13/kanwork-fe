export const useTask = () => {
  const isOpenModal = useState('task:is-open-modal', () => ({
    detail: false,
    form: false,
  }))

  return {
    isOpenModal,
  }
}
