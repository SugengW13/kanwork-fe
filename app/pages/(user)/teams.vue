<script setup lang="ts"></script>

<template>
  <div class="space-y-8 flex flex-col h-full">
    <page-header title="Teams" />

    <div class="space-y-8 flex flex-col grow min-h-0">
      <div class="flex justify-between">
        <div class="space-x-5">
          <u-input
            size="lg"
            placeholder="Search"
            leading-icon="material-symbols:search-rounded"
          />

          <u-button
            size="lg"
            label="Filter"
            trailing-icon="material-symbols:filter-list-rounded"
          />
        </div>

        <u-button
          size="lg"
          label="Add New"
          trailing-icon="material-symbols:add-rounded"
          @click=""
        />
      </div>

      <div class="grid grid-cols-3 gap-8 overflow-y-auto">
        <team-item
          v-for="i in 10"
          :key="`team-${i}`"
        />
      </div>
    </div>
  </div>
</template>
