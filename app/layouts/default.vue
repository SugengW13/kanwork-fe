<script setup lang="ts">
</script>

<template>
  <div class="h-dvh flex flex-col relative bg-gray-50">
    <layout-header />

    <div class="p-10 relative grow min-h-0 flex flex-col">
      <layout-sidebar />

      <slot />
    </div>
  </div>
</template>
