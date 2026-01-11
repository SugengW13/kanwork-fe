import { formatDuration } from 'date-fns'

export function secondsToDuration(s: number) {
  const minuteInSeconds = 60
  const hourInSeconds = 60 * minuteInSeconds
  const dayInSeconds = 24 * hourInSeconds
  const monthInSeconds = 30 * dayInSeconds
  const yearInSeconds = 365 * dayInSeconds

  const years = Math.floor(s / yearInSeconds)
  const months = Math.floor((s % yearInSeconds) / monthInSeconds)
  const days = Math.floor((s % monthInSeconds) / dayInSeconds)
  const hours = Math.floor((s % dayInSeconds) / hourInSeconds)
  const minutes = Math.floor((s % hourInSeconds) / minuteInSeconds)
  const seconds = Math.floor(s % minuteInSeconds)

  return (years === 0 && months === 0 && days === 0 && hours === 0 && minutes === 0 && seconds === 0)
    ? '0 seconds'
    : formatDuration({ years, months, days, hours, minutes, seconds })
}
