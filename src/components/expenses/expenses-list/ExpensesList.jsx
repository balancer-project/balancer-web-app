import { Accordion } from "react-bootstrap"
import { ExpensesListItem } from "./ExpensesListItem"

export const ExpensesList = ({ expenses, loading }) => {
  return (
    <div className="expenses-list">
      <div className={`loader-wrapper mb-3 ${!loading ? "hidden" : ""}`}>
        <div className="loader-line"></div>
      </div>
      <Accordion>
          {expenses.map(expense => <ExpensesListItem key={expense.id} expense={expense} />)}
      </Accordion>
    </div>
  )
}
