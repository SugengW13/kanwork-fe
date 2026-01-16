<script setup lang="ts">
const {
  isOpenModal,
  selectedContributor,
  createContributor,
  updateContributor,
} = useContributor()

const form = reactive<ContributorForm>({
  username: '',
  email: '',
  password: '',
  passwordConfirmation: '',
})

const onSubmit = () => {
  if (selectedContributor.value)
    updateContributor(selectedContributor.value.id, form)
  else
    createContributor(form)
}

onMounted(() => {
  if (!selectedContributor.value) return

  form.username = selectedContributor.value.username
  form.email = selectedContributor.value.email
})
</script>

<template>
  <u-form
    :state="form"
    :schema="contributorSchema"
    class="space-y-4"
    @submit.prevent="onSubmit"
  >
    <u-form-field
      required
      size="lg"
      label="Email"
      name="email"
    >
      <u-input
        v-model="form.email"
        type="email"
        placeholder="Enter your email"
        class="w-full"
      />
    </u-form-field>

    <u-form-field
      required
      size="lg"
      label="Username"
      name="username"
    >
      <u-input
        v-model="form.username"
        placeholder="Enter your username"
        class="w-full"
      />
    </u-form-field>

    <template v-if="!selectedContributor">
      <u-form-field
        required
        size="lg"
        label="Password"
        name="password"
      >
        <u-input
          v-model="form.password"
          type="password"
          placeholder="Enter your password"
          class="w-full"
        />
      </u-form-field>

      <u-form-field
        required
        size="lg"
        label="Password Confirmation"
        name="passwordConfirmation"
      >
        <u-input
          v-model="form.passwordConfirmation"
          type="password"
          placeholder="Enter your password confirmation"
          class="w-full"
        />
      </u-form-field>
    </template>

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
