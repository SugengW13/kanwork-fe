<script setup lang="ts">
import Chart from 'chart.js/auto'

const chartTask = ref()

onMounted(() => {
  new Chart(chartTask.value, {
    type: 'pie',
    data: {
      labels: ['Category 1', 'Category 2', 'Category 3'],
      datasets: [
        { data: [10, 10, 10] },
      ],
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
