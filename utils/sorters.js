// сортировки
export const diffDate = (oldDate, freshDate) => {
  // Вернёт разницу между двумя датами
  const utc1 = Date.UTC(freshDate.getFullYear(), freshDate.getMonth(), freshDate.getDate())
  const utc2 = Date.UTC(oldDate.getFullYear(), oldDate.getMonth(), oldDate.getDate())
  const result = Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24))
  return result
}

export const getDaysAfter = (arr, date) => arr.filter(day => day - date > 0)

export const getDaysBefore = (arr, date) => arr.filter(day => day - date < 0)

export const sortClosestDay = (arr, day) => arr.sort((a, b) => {
  // Вернёт масссив отсортированных дат
  const distancea = Math.abs(day - a)
  const distanceb = Math.abs(day - b)
  return distancea - distanceb
})[0]