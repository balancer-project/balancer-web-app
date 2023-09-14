import { Accordion, Col, Container, Row } from "react-bootstrap"
import { PiCoinsLight } from "react-icons/pi"
import { TfiReload } from "react-icons/tfi"
import { ExpenseType } from "../../../models/ExpenseType"

export const ExpensesListItemHeader = ({ type, categoryIcon, concept, amount, recentlyUpdated }) => {
  return (
    <Accordion.Header>
      <Container>
        <Row className="align-items-center">
          <Col xs={2} className="p-0">
            <div className="icon-grid">
              <div>{type === ExpenseType.OneTime ? <PiCoinsLight /> : <TfiReload />}</div>
              <div className="recently-updated">{recentlyUpdated ? <span></span> : <></>}</div>
              <div className="category-icon">{categoryIcon}</div>
            </div>
          </Col>
          <Col className="p-0">{concept}</Col>
          <Col xs={2} className="text-end">-{amount.toFixed(2)} €</Col>
        </Row>
      </Container>
    </Accordion.Header>
  )
}
