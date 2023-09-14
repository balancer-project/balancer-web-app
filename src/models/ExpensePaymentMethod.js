export const ExpensePaymentMethod = Object.freeze({
  Cash: {
    name: "cash",
    humanName: "efectivo",
  },
  BankCard: {
    name: "bank_card",
    humanName: "tarjeta bancaria",
  },
  DirectDebit: {
    name: "direct_debit",
    humanName: "cargo en cuenta",
  },

  from: (name) => ExpensePaymentMethod[Object.keys(ExpensePaymentMethod).find(key => ExpensePaymentMethod[key].name === name)],
  values: () => Object.keys(ExpensePaymentMethod).filter(key => typeof ExpensePaymentMethod[key] !== 'function').map(key => ExpensePaymentMethod[key])
})
