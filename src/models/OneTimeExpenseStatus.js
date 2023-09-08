export const OneTimeExpenseStatus = Object.freeze({
  Pending: {
    name: "pending",
    humanName: "previsto"
  },
  Done: {
    name: "done",
    humanName: "pagado"
  },

  from: (name) => OneTimeExpenseStatus[Object.keys(OneTimeExpenseStatus).find(key => OneTimeExpenseStatus[key].name === name)]
})
