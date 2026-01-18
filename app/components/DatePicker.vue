<script setup lang="ts">
import { CalendarDate, Time } from '@internationalized/date'

const props = defineProps({
  modelValue: Date,
  disabled: Boolean,
})

const emit = defineEmits(['update:modelValue'])

const date = shallowRef<undefined | CalendarDate>(undefined)
const time = shallowRef<undefined | Time>(undefined)

const convertToDateTime = (cd: undefined | CalendarDate, t: undefined | Time) => {
  if (!cd || !t) return undefined
  return new Date(cd.year, cd.month - 1, cd.day, t.hour, t.minute)
}

const convertToCalendarDate = (d: undefined | Date) => {
  if (!d) return undefined
  return new CalendarDate(d.getFullYear(), d.getMonth() + 1, d.getDate())
}

const convertToTime = (d: undefined | Date) => {
  if (!d) return undefined
  return new Time(d.getHours(), d.getMinutes())
}

const placeholder = computed(() => {
  const dateTime = convertToDateTime(date.value, time.value)
  return dateTime ? formatDate(dateTime, 'dd MMMM yyyy, HH:mm') : 'Select Date & Time'
})

const initDate = () => {
  date.value = convertToCalendarDate(props.modelValue)
  time.value = convertToTime(props.modelValue)
}

const onUpdateOpen = (isOpen: boolean) => {
  if (isOpen) return
  emit('update:modelValue', convertToDateTime(date.value, time.value))
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
      {{ placeholder }}
    </u-button>

    <template #content>
      <div class="p-2 space-y-2 flex flex-col items-center">
        <u-calendar v-model="date" />

        <u-separator />

        <u-input-time
          v-model="time"
          :hour-cycle="24"
          @change.prevent=""
        />
      </div>
    </template>
  </u-popover>
</template>
