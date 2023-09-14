import { useState } from "react"
import { Accordion } from "react-bootstrap"
import { ExpenseType } from "../../../models/ExpenseType"
import { ExpensesListItemHeader } from "./ExpensesListItemHeader"
import { OneTimeExpenseBody } from "./OneTimeExpenseBody"
import { RecurringExpenseBody } from "./RecurringExpenseBody"

export const ExpensesListItem = ({ expense }) => {
  const [lastExpense, setLastExpense] = useState(expense)
  const [recentlyUpdated, setRecentlyUpdated] = useState(false)

  const markAsRecentlyUpdated = () => {
    setRecentlyUpdated(true)
    alert("Has recibido una actualización para el gasto " + expense.concept)
    setTimeout(() => setRecentlyUpdated(false), 10000)
  }

  if (
    expense.type === ExpenseType.Recurring &&
    expense.payments?.length > lastExpense.payments?.length
  ) {
    markAsRecentlyUpdated()
    setLastExpense(expense)
  }

  if (
    expense.type === ExpenseType.OneTime &&
    expense.oneTimeExpenseStatus !== lastExpense.oneTimeExpenseStatus
  ) {
    markAsRecentlyUpdated()
    setLastExpense(expense)
  }

  return (
    <Accordion.Item className="expenses-list-item one-time" eventKey={expense.id}>
      <ExpensesListItemHeader
        type={expense.type}
        categoryIcon={expense.category.icon}
        concept={expense.concept}
        amount={expense.amount}
        recentlyUpdated={recentlyUpdated} />
      {expense.type === ExpenseType.OneTime ?
          <OneTimeExpenseBody {...expense} /> :
          <RecurringExpenseBody {...expense} />}
    </Accordion.Item>
  )
}
