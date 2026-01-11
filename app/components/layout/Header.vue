<script setup lang="ts"></script>

<template>
  <div class="border-b border-accented px-10 h-20 flex justify-between items-center sticky top-0 bg-white shrink-0">
    <div class="flex items-center space-x-5">
      <u-button
        size="xl"
        variant="ghost"
        icon="material-symbols:density-medium-rounded"
      />

      <p class="text-2xl cursor-default select-none font-bold">
        KANWORK
      </p>
    </div>

    <div class="flex items-center space-x-5">
      <u-button
        size="xl"
        variant="ghost"
        icon="material-symbols:notifications-outline-rounded"
        class="rounded-full"
      />

      <u-button
        size="xl"
        icon="material-symbols:person-rounded"
        class="rounded-full"
      />
    </div>
  </div>
</template>
