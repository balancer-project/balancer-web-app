import { useEffect, useState } from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import { TfiReload } from "react-icons/tfi"
import { ExpensesApi } from "../api/ExpensesApi"
import { ExpensesList } from "../components/expenses/expenses-list/ExpensesList"
import { settings } from "../constants/settings"
import useDocumentTitle from "../hooks/useDocumentTitle"

export const Expenses = () => {
  useDocumentTitle("Mis gastos – Balancer")

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
    <article className="py-5">
      <Container className="align-items-center">
        <Row>
          <Col><h1 className="mb-4">Mis gastos</h1></Col>
          <Col className="text-end"><Button disabled={!preloaded || loading} variant="secondary" onClick={loadExpenses}><TfiReload /> Actualizar</Button></Col>
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
