<script setup lang="ts">
const { isOpen } = useSidebar()
</script>

<template>
  <div
    class="absolute inset-0 transition-all duration-300"
    :class="{
      'backdrop-blur-sm bg-black/25': isOpen,
      'opacity-0 pointer-events-none': !isOpen,
    }"
    @click.self="isOpen = false"
  >
    <div
      class="absolute bg-white top-0 bottom-0 w-100 border-r border-accented space-y-4 px-5 py-10 transition-transform duration-300"
      :class="{ '-translate-x-full': !isOpen }"
    >
      sidebar
    </div>
  </div>
</template>
