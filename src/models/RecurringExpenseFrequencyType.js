import { WeekDay } from "./WeekDay"

export const RecurringExpenseFrequencyType = Object.freeze({
  monthly_exact_day_of_month: {
    name: "monthly_exact_day_of_month",
    humanName: "mensual",
    selectName: "el día X de cada mes",
    humanNameWithParameter: (parameter) => `el ${parameter} de cada mes`
  },
  monthly_last_day_of_month: {
    name: "monthly_last_day_of_month",
    humanName: "mensual",
    selectName: "el último día del mes",
    humanNameWithParameter: (_parameter) => "el último día del mes"
  },
  monthly_unknown: {
    name: "monthly_unknown",
    humanName: "mensual",
    selectName: "mensual, un día desconocido",
    humanNameWithParameter: (_parameter) => "mensual"
  },
  weekly_exact_day_of_week: {
    name: "weekly_exact_day_of_week",
    humanName: "semanal",
    selectName: "el día X de cada semana",
    humanNameWithParameter: (parameter) => `los ${WeekDay.fromNumber(parameter).humanNamePlural}`
  },
  unknown: {
    name: "unknown",
    humanName: "desconocido",
    selectName: "desconocido",
    humanNameWithParameter: (_parameter) => "desconocido"
  },

  from: (name) => RecurringExpenseFrequencyType[Object.keys(RecurringExpenseFrequencyType).find(key => RecurringExpenseFrequencyType[key].name === name)],
  values: () => Object.keys(RecurringExpenseFrequencyType).filter(key => typeof RecurringExpenseFrequencyType[key] !== "function").map(key => RecurringExpenseFrequencyType[key]),
  needsParameter: (name) => name === RecurringExpenseFrequencyType.monthly_exact_day_of_month.name || name === RecurringExpenseFrequencyType.weekly_exact_day_of_week.name
})
