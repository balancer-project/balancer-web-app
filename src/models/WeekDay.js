export const WeekDay = Object.freeze({
  Monday: {
    name: "monday",
    number: 1,
    humanNameSingular: "lunes",
    humanNamePlural: "lunes"
  },
  Tuesday: {
    name: "tuesday",
    number: 2,
    humanNameSingular: "martes",
    humanNamePlural: "martes"
  },
  Wednesday: {
    name: "wednesday",
    number: 3,
    humanNameSingular: "miércoles",
    humanNamePlural: "miércoles"
  },
  Thursday: {
    name: "thursday",
    number: 4,
    humanNameSingular: "jueves",
    humanNamePlural: "jueves"
  },
  Friday: {
    name: "friday",
    number: 5,
    humanNameSingular: "viernes",
    humanNamePlural: "viernes"
  },
  Saturday: {
    name: "saturday",
    number: 6,
    humanNameSingular: "sábado",
    humanNamePlural: "sábados"
  },
  Sunday: {
    name: "sunday",
    number: 7,
    humanNameSingular: "domingo",
    humanNamePlural: "domingos"
  },

  from: (name) => WeekDay[Object.keys(WeekDay).find(key => WeekDay[key].name === name)],
  fromNumber: (number) => WeekDay[Object.keys(WeekDay).find(key => WeekDay[key].number === number)]
})
