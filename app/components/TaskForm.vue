<script setup lang="ts">
import type { SelectMenuItem } from '@nuxt/ui'

const {
  isOpenModal,
  selectedTask,
  createTask,
  updateTask,
} = useTask()

const statusItems = ref<SelectMenuItem[]>([
  { label: 'To Do', id: 'TODO' },
  { label: 'Doing', id: 'DOING' },
  { label: 'Done', id: 'DONE' },
])

const priorityItems = ref<SelectMenuItem[]>([
  { label: 'Low', id: 'LOW' },
  { label: 'Medium', id: 'MEDIUM' },
  { label: 'High', id: 'HIGH' },
])

const form = reactive<TaskForm>({
  title: '',
  description: '',
  status: undefined,
  priority: undefined,
  deadlineAt: undefined,
  startedAt: undefined,
  finishedAt: undefined,
})

const onSubmit = () => {
  if (selectedTask.value)
    updateTask(selectedTask.value.id, form)
  else
    createTask(form)
}

watch(() => form.status, () => {
  if (form.status === 'TODO') {
    if (!form.startedAt) return
    form.startedAt = undefined

    if (!form.finishedAt) return
    form.finishedAt = undefined
  }
})

onMounted(() => {
  if (!selectedTask.value) return

  form.title = selectedTask.value.title
  form.description = selectedTask.value.description
  form.status = selectedTask.value.status
  form.priority = selectedTask.value.priority
  form.deadlineAt = selectedTask.value.deadlineAt
  form.startedAt = selectedTask.value.startedAt
  form.finishedAt = selectedTask.value.finishedAt
})
</script>

<template>
  <u-form
    :state="form"
    :schema="taskSchema"
    :validate-on="['blur']"
    class="space-y-4"
    @submit.prevent="onSubmit"
  >
    <u-form-field
      required
      size="lg"
      name="title"
      label="Title"
    >
      <u-input
        v-model="form.title"
        placeholder="Enter title"
        class="w-full"
      />
    </u-form-field>

    <u-form-field
      size="lg"
      name="description"
      label="Description"
    >
      <u-textarea
        v-model="form.description"
        placeholder="Enter description"
        class="w-full"
      />
    </u-form-field>

    <div class="grid grid-cols-2 gap-4">
      <u-form-field
        required
        size="lg"
        name="status"
        label="Status"
      >
        <u-select
          v-model="form.status"
          :items="statusItems"
          value-key="id"
          placeholder="Select Status"
          class="w-full"
        />
      </u-form-field>

      <u-form-field
        required
        size="lg"
        name="priority"
        label="Priority"
      >
        <u-select
          v-model="form.priority"
          :items="priorityItems"
          value-key="id"
          placeholder="Select Priority"
          class="w-full"
        />
      </u-form-field>
    </div>

    <u-form-field
      required
      size="lg"
      name="deadlineAt"
      label="Deadline At"
    >
      <date-picker
        v-model="form.deadlineAt"
        class="w-full"
      />
    </u-form-field>

    <div class="grid grid-cols-2 gap-4">
      <u-form-field
        :required="form.status === 'DOING' || form.status === 'DONE'"
        size="lg"
        name="startedAt"
        label="Started At"
      >
        <date-picker
          v-model="form.startedAt"
          :disabled="form.status !== 'DOING' && form.status !== 'DONE'"
          class="w-full"
        />
      </u-form-field>

      <u-form-field
        :required="form.status === 'DONE'"
        size="lg"
        name="finishedAt"
        label="Finished At"
      >
        <date-picker
          v-model="form.finishedAt"
          :disabled="form.status !== 'DONE'"
          class="w-full"
        />
      </u-form-field>
    </div>

    <u-separator />

    <div class="space-x-4 flex justify-end">
      <u-button
        size="lg"
        label="Cancel"
        variant="outline"
        @click="isOpenModal.form = false"
      />

      <u-button
        size="lg"
        type="submit"
        label="Save"
      />
    </div>
  </u-form>
</template>
