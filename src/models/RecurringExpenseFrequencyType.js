import { WeekDay } from "./WeekDay"

export const RecurringExpenseFrequencyType = Object.freeze({
  monthly_exact_day_of_month: {
    name: "monthly_exact_day_of_month",
    humanName: "mensual",
    humanNameWithParameter: (parameter) => `el ${parameter} de cada mes`
  },
  monthly_last_day_of_month: {
    name: "monthly_last_day_of_month",
    humanName: "mensual",
    humanNameWithParameter: (_parameter) => "el último día del mes"
  },
  weekly_exact_day_of_week: {
    name: "weekly_exact_day_of_week",
    humanName: "semanal",
    humanNameWithParameter: (parameter) => `los ${WeekDay.fromNumber(parameter).humanNamePlural}`
  },
  unknown: {
    name: "unknown",
    humanName: "desconocido",
    humanNameWithParameter: (_parameter) => "desconocido"
  },

  from: (name) => RecurringExpenseFrequencyType[Object.keys(RecurringExpenseFrequencyType).find(key => RecurringExpenseFrequencyType[key].name === name)]
})
