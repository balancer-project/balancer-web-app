import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ExpensesApi } from "../api/ExpensesApi"
import { ExpensesList } from "../components/expenses/expenses-list/ExpensesList"
import { settings } from "../constants/settings"

export const Expenses = () => {
  const [expenses, setExpenses] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    ExpensesApi
      .findExpenses(settings.defaultUser.id)
      .then(response => setExpenses(response))
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <article>
      <h1 className="mb-4">Gastos</h1>
      <Container style={{maxWidth: "970px"}}>
        <Row className="justify-content-center">
          <Col>
            <ExpensesList expenses={expenses} loading={loading} />
          </Col>
        </Row>
      </Container>
    </article>
  )
}
