<script setup lang="ts">
const $router = useRouter()
const { register } = useAuth()

const form = reactive({
  email: '',
  username: '',
  password: '',
  passwordConfirmation: '',
})
</script>

<template>
  <u-form
    :state="form"
    :schema="registerSchema"
    class="border border-accented rounded-lg p-5 space-y-4 bg-white"
    @submit.prevent="register(form)"
  >
    <p class="font-semibold text-2xl text-center">
      Register
    </p>

    <u-separator />

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

    <p class="text-xs">
      Already have an account?
      <span
        class="text-info cursor-pointer hover:underline"
        @click="$router.push('/login')"
      >
        Login now
      </span>
    </p>

    <u-separator />

    <u-button
      block
      size="lg"
      label="Register"
      type="submit"
    />
  </u-form>
</template>
