import { Accordion, Col, Container, Row } from "react-bootstrap"
import { PiCoinsLight } from "react-icons/pi"
import { TfiReload } from "react-icons/tfi"
import { ExpenseType } from "../../../models/ExpenseType"

export const ExpensesListItemHeader = ({ type, categoryIcon, concept, amount }) => {
  return (
    <Accordion.Header>
      <Container>
        <Row className="align-items-center">
          <Col xs={1} className="p-0">{type === ExpenseType.OneTime ? <PiCoinsLight /> : <TfiReload />}</Col>
          <Col xs={1} className="p-0"><div className="category-icon">{categoryIcon}</div></Col>
          <Col className="p-0">{concept}</Col>
          <Col xs={2} className="text-end">-{amount.toFixed(2)} €</Col>
        </Row>
      </Container>
    </Accordion.Header>
  )
}
