import { Accordion } from "react-bootstrap"
import { ExpenseType } from "../../../models/ExpenseType"
import { ExpensesListItemHeader } from "./ExpensesListItemHeader"
import { OneTimeExpenseBody } from "./OneTimeExpenseBody"
import { RecurringExpenseBody } from "./RecurringExpenseBody"

export const ExpensesListItem = ({ expense }) => {
  return (
    <Accordion.Item className="expenses-list-item one-time" eventKey={expense.id}>
      <ExpensesListItemHeader
        type={expense.type}
        categoryIcon={expense.category.icon}
        concept={expense.concept}
        amount={expense.amount} />
      {expense.type === ExpenseType.OneTime ?
          <OneTimeExpenseBody {...expense} /> :
          <RecurringExpenseBody {...expense} />}
    </Accordion.Item>
  )
}
