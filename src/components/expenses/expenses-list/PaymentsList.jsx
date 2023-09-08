import { Col, Container, ListGroup, Row } from "react-bootstrap"
import { PaymentsListItem } from "./PaymentsListItem"

export const PaymentsList = ({ payments, single = false }) => {
  return (
    <div className="expense-payments-list small mb-3">
      <div className="text-muted mb-1">{single ? "Pago asociado" : "Pagos asociados"}</div>

      <ListGroup>
        {payments.length > 0 ?
        <>
          <ListGroup.Item className="text-muted">
            <Container className="m-0">
              <Row>
                <Col lg={1}>#</Col>
                <Col lg={3}>Fecha</Col>
                <Col lg={2}>Estado</Col>
                <Col className="text-end">Cantidad</Col>
              </Row>
            </Container>
          </ListGroup.Item>
          {payments.map((payment, index) =>
            <PaymentsListItem {...payment} key={payment.id} index={payments.length - index} />)}
        </>
        : <ListGroup.Item>
          {single ? "No se ha encontrado ningún pago asociado a este gasto" : "No se han encontrado pagos asociados a este gasto"}
        </ListGroup.Item>}
      </ListGroup>
    </div>
  )
}
