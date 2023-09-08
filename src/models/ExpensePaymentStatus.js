export const ExpensePaymentStatus = Object.freeze({
  Pending: {
    name: "pending",
    humanName: "pendiente"
  },
  Posted: {
    name: "posted",
    humanName: "pagado"
  },

  from: (name) => ExpensePaymentStatus[Object.keys(ExpensePaymentStatus).find(key => ExpensePaymentStatus[key].name === name)]
})
