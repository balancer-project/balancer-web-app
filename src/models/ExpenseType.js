export const ExpenseType = Object.freeze({
  Recurring: {
    name: "recurring",
    humanName: "Recurrente"
  },
  OneTime: {
    name: "one_time",
    humanName: "Puntual"
  },

  from: (name) => ExpenseType[Object.keys(ExpenseType).find(key => ExpenseType[key].name === name)]
})
