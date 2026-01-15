export const useTeam = () => {
  const isOpenModal = useState<{
    create: boolean
    update: boolean
    delete: boolean
  }>('team:is-open-modal', () => ({
    create: false,
    update: false,
    delete: false,
  }))

  return { isOpenModal }
}
