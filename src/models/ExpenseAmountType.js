export const ExpenseAmountType = Object.freeze({
  Fixed: {
    name: "fixed",
    humanName: "fija"
  },
  Estimated: {
    name: "estimated",
    humanName: "estimada"
  },

  from: (name) => ExpenseAmountType[Object.keys(ExpenseAmountType).find(key => ExpenseAmountType[key].name === name)]
})
