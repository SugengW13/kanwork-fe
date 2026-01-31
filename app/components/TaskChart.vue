<script setup lang="ts">
import Chart from 'chart.js/auto'

const { tasksByPriority } = useDashboard()

const chartTask = ref()

onMounted(() => {
  new Chart(chartTask.value, {
    type: 'pie',
    data: {
      labels: ['Low', 'Medium', 'High'],
      datasets: [{
        data: [
          tasksByPriority.value.low,
          tasksByPriority.value.medium,
          tasksByPriority.value.high,
        ],
      }],
    },
    options: {
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            boxWidth: 8,
            boxHeight: 8,
            usePointStyle: true,
            pointStyle: 'circle',
            font: { family: 'Poppins' },
            padding: 12,
          },
        },
      },
    },
  })
})
</script>

<template>
  <div class="w-3/4">
    <canvas ref="chartTask" />
  </div>
</template>
