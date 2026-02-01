<template>
  <div class="bg-white rounded-lg border border-accented p-8 md:p-12 flex flex-col items-center justify-center h-full empty-state">
    <!-- Icon -->
    <div class="icon-wrapper">
      <u-icon
        name="material-symbols:view-kanban-outline-rounded"
        size="64"
        class="text-gray-400"
      />
    </div>

    <!-- Content -->
    <div class="text-center space-y-3 max-w-md">
      <h2 class="text-2xl font-semibold text-gray-900">
        No tasks yet
      </h2>
      <p class="text-base text-gray-500">
        Create your first task to start organizing your work on the kanban board.
      </p>
    </div>
  </div>
</template>

<style scoped>
.empty-state {
  animation: fade-in 0.4s ease-out;
}

.icon-wrapper {
  margin-bottom: 1.5rem;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
