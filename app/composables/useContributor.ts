export const useContributor = () => {
  const isOpenModal = useState('contributor:is-open-modal', () => ({
    form: false,
    delete: false,
  }))

  const isLoading = useState('contributor:is-loading', () => ({
    list: false,
    form: false,
    delete: false,
  }))

  const contributors = useState<Contributor[]>('contributor:contributors', () => [])

  const selectedContributor = useState<null | Contributor>('contributor:selected-contributor', () => null)

  const getContributors = async () => {
    contributors.value = []

    for (let i = 0; i < 10; i++) {
      contributors.value.push({
        id: `${i + 1}`,
        username: `Contributor ${i + 1}`,
        email: `contributor-${i + 1}@gmail.com`,
        totalTasks: i + 1,
      })
    }
  }

  const createContributor = async (form: ContributorForm) => {
    console.log('Create Contributor', form)
  }

  const updateContributor = async (id: string, form: ContributorForm) => {
    console.log('Update Contributor', id, form)
  }

  const deleteContributor = async (id: string) => {
    console.log('Delete Contributor', id)
  }

  return {
    isOpenModal,
    isLoading,
    contributors,
    selectedContributor,
    getContributors,
    createContributor,
    updateContributor,
    deleteContributor,
  }
}
