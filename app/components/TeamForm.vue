<script setup lang="ts">
const { isOpenModal, selectedTeam, createTeam, updateTeam } = useTeam()

const form = reactive<TeamForm>({
  name: '',
  description: undefined,
})

const onSubmit = () => {
  if (selectedTeam.value)
    updateTeam(selectedTeam.value.id, form)
  else
    createTeam(form)
}

onMounted(() => {
  if (!selectedTeam.value) return

  form.name = selectedTeam.value.name
  form.description = selectedTeam.value.description
})
</script>

<template>
  <u-form
    :state="form"
    :schema="teamSchema"
    class="space-y-4"
    @submit.prevent="onSubmit"
  >
    <u-form-field
      required
      size="lg"
      label="Name"
      name="name"
    >
      <u-input
        v-model="form.name"
        placeholder="Enter team name"
        class="w-full"
      />
    </u-form-field>

    <u-form-field
      size="lg"
      label="Description"
      name="description"
    >
      <u-textarea
        v-model="form.description"
        placeholder="Enter team description"
        class="w-full"
      />
    </u-form-field>

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
