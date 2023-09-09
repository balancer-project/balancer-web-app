import { useEffect, useState } from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import { TfiReload } from "react-icons/tfi"
import { ExpensesApi } from "../api/ExpensesApi"
import { ExpensesList } from "../components/expenses/expenses-list/ExpensesList"
import { settings } from "../constants/settings"

export const Expenses = () => {
  const [expenses, setExpenses] = useState([])
  const [loading, setLoading] = useState(false)
  const [preloaded, setPreloaded] = useState(false)

  const loadExpenses = () => {
    setLoading(true)

    ExpensesApi
      .findExpenses(settings.defaultUser.id)
      .then(response => setExpenses(response))
      .finally(() => {
        setLoading(false)
        setPreloaded(true)
      })
  }

  useEffect(loadExpenses, [])

  return (
    <article>
      <Container className="align-items-center">
        <Row>
          <Col><h1 className="mb-4">Gastos</h1></Col>
          {preloaded ? <Col className="text-end"><Button disabled={loading} variant="secondary" onClick={loadExpenses}><TfiReload /> Recargar</Button></Col> : <></>}
        </Row>
      </Container>
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
