// Функция для форматирования продолжительности полета в часы и минуты

export function formatDuration(duration: number): string {
  const hours = Math.floor(duration / 60)
  const minutes = duration % 60
  return `${hours}ч ${minutes}м`
}

// Функция для форматирования времени из объекта Date
export function formatTime(dataTime: string | Date): string {
  const date = new Date(dataTime)
  return `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`
}

// Функция для форматирования времени вылета и прилета
export function formatFlightTimes(departureTime: string | Date, duration: number): string {
  const departureDate = new Date(departureTime)
  const arrivalDate = new Date(departureDate.getTime() + duration * 60000)
  return `${formatTime(departureDate)} - ${formatTime(arrivalDate)}`
}

// Функция для форматирования количества пересадок
export function formatStops(stops: string[]): string {
  const stopCount = stops.length
  if (stopCount === 0) return 'БЕЗ ПЕРЕСАДОК'
  if (stopCount === 1) return '1 ПЕРЕСАДКА'
  return `${stopCount} ПЕРЕСАДКИ`
}

// Функция для форматирования списка пересадок в строку
export function formatStopsList(stops: string[]): string {
  return stops.join(', ')
}

// Функция для форматирования маршрута
export function formatRoute(origin: string, destination: string): string {
  return `${origin} - ${destination}`
}
