<script setup lang="ts">
import { CalendarDate, DateFormatter, getLocalTimeZone } from '@internationalized/date'
import type { PropType } from 'vue'

const props = defineProps({
  modelValue: Object as PropType<{ start?: Date, end?: Date }>,
})

const emit = defineEmits(['update:modelValue'])

const df = new DateFormatter('en-US', {
  dateStyle: 'medium',
})

const date = shallowRef<{
  start: undefined | CalendarDate
  end: undefined | CalendarDate
}>({
  start: undefined,
  end: undefined,
})

const convertToDate = (cd: undefined | CalendarDate) => {
  if (!cd) return undefined
  return new Date(cd.year, cd.month - 1, cd.day)
}

const convertToCalendarDate = (d: undefined | Date) => {
  if (!d) return undefined
  return new CalendarDate(d.getFullYear(), d.getMonth() + 1, d.getDate())
}

const initDate = () => {
  if (!props.modelValue) return
  const { start, end } = props.modelValue

  date.value = {
    start: convertToCalendarDate(start),
    end: convertToCalendarDate(end),
  }
}

const onUpdateOpen = (isOpen: boolean) => {
  if (isOpen) return
  const { start, end } = date.value

  emit('update:modelValue', {
    start: convertToDate(start),
    end: convertToDate(end),
  })
}

watch(() => props.modelValue, initDate, { deep: true })

onMounted(() => {
  initDate()
})
</script>

<template>
  <u-popover @update:open="onUpdateOpen">
    <u-button
      size="lg"
      color="neutral"
      variant="subtle"
      icon="material-symbols:calendar-today-outline-rounded"
      class="bg-white hover:bg-gray-100 active:bg-gray-100"
    >
      <template v-if="date.start">
        <template v-if="date.end">
          {{ df.format(date.start.toDate(getLocalTimeZone())) }} - {{ df.format(date.end.toDate(getLocalTimeZone())) }}
        </template>

        <template v-else>
          {{ df.format(date.start.toDate(getLocalTimeZone())) }}
        </template>
      </template>

      <template v-else>
        Select Date
      </template>
    </u-button>

    <template #content>
      <u-calendar
        v-model="date"
        range
        class="p-2"
      />
    </template>
  </u-popover>
</template>
