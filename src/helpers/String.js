export const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

export const capitalizeAll = (string) => {
  return string
    .split(" ")
    .map(word => capitalize(word))
    .join(" ")
}
