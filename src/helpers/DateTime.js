export const parseDate = (date) => {
  return date !== undefined
    ? new Date(Date.parse(date))
    : undefined
}

export const localizeDate = (date, undefinedValue = undefined) => {
  return date !== undefined
    ? date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })
    : undefinedValue
}
