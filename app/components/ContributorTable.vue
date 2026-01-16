<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const { contributors } = useContributor()

const UButton = resolveComponent('UButton')

interface ContributorTableData {
  no: number
  username: string
  email: string
  totalTasks: number
}

const tableColumns: TableColumn<ContributorTableData>[] = [
  {
    accessorKey: 'no',
    header: 'No',
  },
  {
    accessorKey: 'username',
    header: 'Username',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'totalTasks',
    header: 'Total Tasks',
  },
  {
    id: 'actions',
    meta: {
      class: { td: 'space-x-2' },
    },
    cell: () => {
      return h('div', { class: 'space-x-2' }, [
        h(UButton, {
          size: 'lg',
          color: 'neutral',
          variant: 'outline',
          icon: 'material-symbols:edit-outline-rounded',
        }),
        h(UButton, {
          size: 'lg',
          color: 'error',
          variant: 'outline',
          icon: 'material-symbols:delete-outline-rounded',
        }),
      ])
    },
  },
]

const tableData = computed((): ContributorTableData[] => {
  return contributors.value.map((c, i) => ({
    no: i + 1,
    username: c.username,
    email: c.email,
    totalTasks: c.totalTasks,
  }))
})
</script>

<template>
  <div class="w-full bg-white rounded-lg border border-accented overflow-y-auto">
    <u-table
      sticky
      :columns="tableColumns"
      :data="tableData"
      class="h-full"
    />
  </div>
</template>
