import { Badge, Col, Container, ListGroup, Row } from "react-bootstrap"
import { localizeDate } from "../../../helpers/DateTime"
import { capitalize } from "../../../helpers/String"
import { ExpensePaymentStatus } from "../../../models/ExpensePaymentStatus"

export const PaymentsListItem = ({ index, status, amount, authorizationDate, date, single }) => {
  return (
    <ListGroup.Item>
      <Container className="m-0">
        <Row>
          {!single ? <Col lg={1}>{index}</Col> : <></>}
          <Col lg={3}>{localizeDate(status === ExpensePaymentStatus.Posted ? date : authorizationDate)}</Col>
          <Col lg={2}>
            <Badge bg={status === ExpensePaymentStatus.Posted ? "success" : "secondary"}>{capitalize(status.humanName)}</Badge>
          </Col>
          <Col className="text-end">
            -{amount.toFixed(2)} €
          </Col>
        </Row>
      </Container>
    </ListGroup.Item>
  )
}
