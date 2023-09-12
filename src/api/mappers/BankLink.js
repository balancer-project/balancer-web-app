import { parseDate } from "../../helpers/DateTime"

export const map = (original) => {
  return {
    ...original,
    createdAt: parseDate(original.createdAt),
  }
}
