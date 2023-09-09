export const parseDate = (date) => {
  return date
    ? new Date(Date.parse(date))
    : undefined
}

export const localizeDate = (date, undefinedValue = undefined) => {
  return date
    ? date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })
    : undefinedValue
}
