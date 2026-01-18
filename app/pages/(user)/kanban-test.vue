<script setup lang="ts">
import { ref } from 'vue'

interface ITask {
  id: number
  title: string
}

interface IColumn {
  id: number
  title: string
  tasks: ITask[]
}

const columns = ref<IColumn[]>([
  {
    id: 1,
    title: 'To Do',
    tasks: [
      { id: 1, title: 'Research competitors' },
      { id: 2, title: 'Define project scope' },
    ],
  },
  {
    id: 2,
    title: 'In Progress',
    tasks: [
      { id: 3, title: 'Create wireframes' },
      { id: 4, title: 'Design UI components' },
    ],
  },
  {
    id: 3,
    title: 'Done',
    tasks: [
      { id: 5, title: 'Project kickoff meeting' },
      { id: 6, title: 'Gather requirements' },
    ],
  },
])
</script>

<template>
  <Kanban
    v-slot="{ columns }"
    :columns="columns"
  >
    <KanbanColumn
      v-for="(column, index) in columns"
      :key="column.id"
      :column="column"
      :columns="columns"
      :column-index="index"
      :body-source="column.tasks"
    >
      <template #header>
        {{ column.title }}
      </template>

      <KanbanItem
        v-for="(task, taskIndex) in column.tasks"
        :key="task.id"
        :item="task"
        :items="column.tasks"
        :item-index="taskIndex"
      >
        {{ task.title }}
      </KanbanItem>
    </KanbanColumn>
  </Kanban>
</template>
