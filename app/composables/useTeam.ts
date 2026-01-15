export const useTeam = () => {
  const isOpenModal = useState('team:is-open-modal', () => ({
    form: false,
    delete: false,
  }))

  const isLoading = useState('team:is-loading', () => ({
    list: false,
    form: false,
    delete: false,
  }))

  const teams = useState<Team[]>('team:teams', () => [])

  const selectedTeam = useState<null | Team>('team:selected-team', () => null)

  const getTeams = async () => {
    // Fetch Teams
    for (let i = 0; i < 5; i++) {
      teams.value.push({
        id: `${i + 1}`,
        name: `Team ${i + 1}`,
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem cupiditate voluptas, adipisci soluta minima autem dolores, recusandae dolor iste mollitia dolorem porro, reiciendis aliquid perferendis.',
      })
    }
  }

  const createTeam = async (form: TeamForm) => {
    console.log('Create Team', form)
  }

  const updateTeam = async (id: string, form: TeamForm) => {
    console.log('Update Team', id, form)
  }

  const deleteTeam = async (id: string) => {
    console.log('Delete Team', id)
  }

  return {
    isOpenModal,
    isLoading,
    teams,
    selectedTeam,
    getTeams,
    createTeam,
    updateTeam,
    deleteTeam,
  }
}
