<script setup lang="ts">
const { isOpen } = useSidebar()
</script>

<template>
  <div class="border-b border-accented px-10 h-20 flex justify-between items-center sticky top-0 bg-white shrink-0 z-20">
    <div class="flex items-center space-x-5">
      <u-button
        size="lg"
        variant="ghost"
        icon="material-symbols:density-medium-rounded"
        @click="isOpen = !isOpen"
      />

      <p class="text-2xl cursor-default select-none font-bold">
        KANWORK
      </p>
    </div>

    <u-button
      size="lg"
      icon="material-symbols:person-rounded"
      class="rounded-full"
    />
  </div>
</template>
