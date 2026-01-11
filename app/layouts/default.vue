<script setup lang="ts"></script>

<template>
  <div class="h-full flex flex-col relative ">
    <layout-header />

    <div class="grow p-10 relative">
      <layout-sidebar />

      <slot />
    </div>
  </div>
</template>
