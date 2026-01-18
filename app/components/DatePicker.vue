<script setup lang="ts">
import { CalendarDate, DateFormatter, getLocalTimeZone } from '@internationalized/date'

const props = defineProps({
  modelValue: Date,
  disabled: Boolean,
})

const emit = defineEmits(['update:modelValue'])

const df = new DateFormatter('en-US', {
  dateStyle: 'medium',
})

const date = shallowRef<undefined | CalendarDate>(undefined)

const convertToDate = (cd: undefined | CalendarDate) => {
  if (!cd) return undefined
  return new Date(cd.year, cd.month - 1, cd.day)
}

const convertToCalendarDate = (d: undefined | Date) => {
  if (!d) return undefined
  return new CalendarDate(d.getFullYear(), d.getMonth() + 1, d.getDate())
}

const initDate = () => {
  date.value = convertToCalendarDate(props.modelValue)
}

const onUpdateOpen = (isOpen: boolean) => {
  if (isOpen) return
  emit('update:modelValue', convertToDate(date.value))
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
      :disabled="props.disabled"
      class="bg-white hover:bg-black/5!"
    >
      {{ date ? df.format(date.toDate(getLocalTimeZone())) : 'Select Date' }}
    </u-button>

    <template #content>
      <u-calendar
        v-model="date"
        class="p-2"
      />
    </template>
  </u-popover>
</template>
