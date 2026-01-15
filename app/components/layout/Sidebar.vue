<script setup lang="ts">
const { isOpen } = useSidebar()

const $route = useRoute()
</script>

<template>
  <div
    class="absolute inset-0 transition-all duration-300 z-10"
    :class="{
      'backdrop-blur-xs bg-black/50': isOpen,
      'opacity-0 pointer-events-none': !isOpen,
    }"
    @click.self="isOpen = false"
  >
    <div
      class="absolute bg-white top-0 bottom-0 w-100 border-r border-accented space-y-4 flex flex-col px-5 py-8 transition-transform duration-300"
      :class="{ '-translate-x-full': !isOpen }"
    >
      <nuxt-link
        to="/dashboard"
        @click="isOpen = false"
      >
        <div
          class="hover:bg-primary/5 rounded-lg px-5 py-3 space-x-2 transition flex items-center"
          :class="{ 'bg-primary/5': $route.path === '/dashboard' }"
        >
          <u-icon
            name="material-symbols:bar-chart-rounded"
            size="20"
          />

          <p class="text-lg font-medium">Dashboard</p>
        </div>
      </nuxt-link>

      <div class="space-y-3 flex flex-col">
        <nuxt-link
          to="/teams"
          @click="isOpen = false"
        >
          <div
            class="hover:bg-primary/5 rounded-lg px-5 py-3 space-x-2 transition flex items-center"
            :class="{ 'bg-primary/5': $route.path === '/teams' }"
          >
            <u-icon
              name="material-symbols:groups-outline-rounded"
              size="20"
            />

            <p class="text-lg font-medium">Teams</p>
          </div>
        </nuxt-link>

        <!-- <div class="space-y-3 flex flex-col">
          <nuxt-link
            v-for="i in 3"
            :key="`team-${i}`"
            to="#"
            @click="isOpen = false"
          >
            <div class="hover:bg-primary/5 rounded-lg px-5 py-3 space-x-2 transition flex items-center">
              <div class="w-5" />
              <p class="text-lg font-medium">Team {{ i }}</p>
            </div>
          </nuxt-link>
        </div> -->
      </div>
    </div>
  </div>
</template>
