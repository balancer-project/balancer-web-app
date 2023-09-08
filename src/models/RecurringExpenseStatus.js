export const RecurringExpenseStatus = Object.freeze({
  Active: {
    name: "active",
    humanName: "activo"
  },
  Done: {
    name: "done",
    humanName: "finalizado"
  },

  from: (name) => RecurringExpenseStatus[Object.keys(RecurringExpenseStatus).find(key => RecurringExpenseStatus[key].name === name)]
})
