<script setup lang="ts">
const $router = useRouter()
const { login } = useAuth()

const form = reactive({
  emailOrUsername: '',
  password: '',
})
</script>

<template>
  <u-form
    :state="form"
    :schema="loginSchema"
    class="border border-accented rounded-lg p-5 space-y-4 bg-white"
    @submit="login(form)"
  >
    <p class="font-semibold text-2xl text-center">
      Login
    </p>

    <u-separator />

    <u-form-field
      required
      size="xl"
      label="Email or Username"
      name="emailOrUsername"
    >
      <u-input
        v-model="form.emailOrUsername"
        placeholder="Enter your email or username"
        class="w-full"
      />
    </u-form-field>

    <u-form-field
      required
      size="xl"
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

    <p class="text-xs">
      Don't have an account?
      <span
        class="text-info cursor-pointer hover:underline"
        @click="$router.push('/register')"
      >
        Register now
      </span>
    </p>

    <u-separator />

    <u-button
      block
      size="xl"
      label="Login"
      type="submit"
    />
  </u-form>
</template>
