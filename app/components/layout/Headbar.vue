<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const { isOpenModal } = useAuth()
const { isOpen } = useSidebar()

const items = ref<DropdownMenuItem[]>([
  {
    label: 'Settings',
    icon: 'material-symbols:settings-outline-rounded',
  },
  {
    label: 'Logout',
    icon: 'material-symbols:logout-rounded',
    color: 'error',
    onSelect: () => { isOpenModal.value.logout = true },
  },
])
</script>

<template>
  <div class="border-b border-accented px-10 h-20 flex justify-between items-center sticky top-0 bg-white shrink-0 z-20">
    <div class="flex items-center space-x-5">
      <u-button
        size="lg"
        color="neutral"
        variant="ghost"
        icon="material-symbols:density-medium-rounded"
        @click="isOpen = !isOpen"
      />

      <p class="text-2xl cursor-default select-none font-bold">
        KANWORK
      </p>
    </div>

    <u-dropdown-menu :items="items">
      <u-button
        size="lg"
        icon="material-symbols:person-rounded"
        class="rounded-full"
      />
    </u-dropdown-menu>
  </div>
</template>
