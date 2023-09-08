import { Accordion } from "react-bootstrap"
import { ExpensesListItem } from "./ExpensesListItem"

export const ExpensesList = ({ expenses, loading }) => {
  return (
    <div className="expenses-list">
      <Accordion>
          {expenses.map(expense => <ExpensesListItem key={expense.id} expense={expense} />)}
      </Accordion>
      { loading ? <div className="loader-line"></div> : '' }
    </div>
  )
}
